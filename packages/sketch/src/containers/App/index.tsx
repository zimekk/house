import {
  type ChangeEventHandler,
  MouseEvent,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import rough from "roughjs";

// https://github.com/mirayatech/NinjaSketch/blob/main/src/types.ts
export type SelectedElementType = ElementType & {
  xOffsets?: number[];
  yOffsets?: number[];
  offsetX?: number;
  offsetY?: number;
};

export interface ExtendedElementType extends ElementType {
  xOffsets?: number[];
  yOffsets?: number[];
}

export type ElementType = {
  id: number;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  type: ToolsType;
  // TODO: add type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  roughElement?: any;
  offsetX?: number;
  offsetY?: number;
  position?: string | null;
  points?: { x: number; y: number }[];
  text?: string;
};

export type ActionsType =
  | "writing"
  | "drawing"
  | "moving"
  | "panning"
  | "resizing"
  | "none";

const Tools = {
  pan: "pan",
  selection: "selection",
  rectangle: "rectangle",
  line: "line",
  pencil: "pencil",
  text: "text",
};

export type ToolsType = (typeof Tools)[keyof typeof Tools];

export type PointType = { x: number; y: number };

export const adjustElementCoordinates = (element: ElementType) => {
  const { type, x1, y1, x2, y2 } = element;

  if (type === Tools.rectangle) {
    const minX = Math.min(x1, x2);
    const maxX = Math.max(x1, x2);
    const minY = Math.min(y1, y2);
    const maxY = Math.max(y1, y2);
    return { x1: minX, y1: minY, x2: maxX, y2: maxY };
  } else {
    if (x1 < x2 || (x1 === x2 && y1 < y2)) {
      return { x1, y1, x2, y2 };
    } else {
      return { x1: x2, y1: y2, x2: x1, y2: y1 };
    }
  }
};

export const adjustmentRequired = (type: ToolsType) =>
  ["line", "rectangle"].includes(type);

export const createElement = (
  id: number,
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  type: ToolsType,
): ElementType => {
  const generator = rough.generator();

  switch (type) {
    case Tools.line:
    case Tools.rectangle: {
      const roughElement =
        type === Tools.line
          ? generator.line(x1, y1, x2, y2)
          : generator.rectangle(x1, y1, x2 - x1, y2 - y1);
      return { id, x1, y1, x2, y2, type, roughElement };
    }
    case Tools.pencil: {
      const defaultRoughElement = null;
      return {
        id,
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        type,
        points: [{ x: x1, y: y1 }],
        roughElement: defaultRoughElement,
      };
    }
    case Tools.text:
      return { id, type, x1, y1, x2, y2, text: "" };
    default:
      throw new Error(`Type not recognised: ${type}`);
  }
};

export const cursorForPosition = (position: string) => {
  switch (position) {
    case "topLeft":
    case "bottomRight":
      return "nwse-resize";
    case "topRight":
    case "bottomLeft":
      return "nesw-resize";
    case "start":
    case "end":
      return "move";
    case "inside":
      return "move";
    default:
      return "default";
  }
};

export const drawElement = (
  // TODO: add type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  roughCanvas: any,
  context: CanvasRenderingContext2D,
  element: ElementType,
) => {
  console.log(["drawElement"], element);
  switch (element.type) {
    case "line":
    case "rectangle":
      roughCanvas.draw(element.roughElement);
      break;
    // case "pencil": {
    //   if (!element.points) {
    //     throw new Error("Pencil element points are undefined");
    //   }
    //   const strokePoints = getStroke(element.points);
    //   const formattedPoints: [number, number][] = strokePoints.map((point) => {
    //     if (point.length !== 2) {
    //       throw new Error(
    //         `Expected point to have exactly 2 elements, got ${point.length}`
    //       );
    //     }
    //     return [point[0], point[1]];
    //   });
    //   const stroke = getSvgPathFromStroke(formattedPoints);
    //   context.fill(new Path2D(stroke));
    //   break;
    // }
    // case "text": {
    //   context.textBaseline = "top";
    //   context.font = "24px sans-serif";
    //   const text = element.text || "";
    //   context.fillText(text, element.x1, element.y1);
    //   break;
    // }
    default:
      throw new Error(`Type not recognised: ${element.type}`);
  }
};

export const getElementAtPosition = (
  x: number,
  y: number,
  elements: ElementType[],
) => {
  return elements
    .map((element) => ({
      ...element,
      position: positionWithinElement(x, y, element),
    }))
    .find((element) => element.position !== null);
};

const positionWithinElement = (x: number, y: number, element: ElementType) => {
  const { type, x1, x2, y1, y2 } = element;
  switch (type) {
    case Tools.line: {
      const on = onLine(x1, y1, x2, y2, x, y);
      const start = nearPoint(x, y, x1, y1, "start");
      const end = nearPoint(x, y, x2, y2, "end");
      return start || end || on;
    }
    case Tools.rectangle: {
      const topLeft = nearPoint(x, y, x1, y1, "topLeft");
      const topRight = nearPoint(x, y, x2, y1, "topRight");
      const bottomLeft = nearPoint(x, y, x1, y2, "bottomLeft");
      const bottomRight = nearPoint(x, y, x2, y2, "bottomRight");
      const inside = x >= x1 && x <= x2 && y >= y1 && y <= y2 ? "inside" : null;
      return topLeft || topRight || bottomLeft || bottomRight || inside;
    }
    case Tools.pencil: {
      const betweenAnyPoint = element.points!.some((point, index) => {
        const nextPoint = element.points![index + 1];
        if (!nextPoint) return false;
        return (
          onLine(point.x, point.y, nextPoint.x, nextPoint.y, x, y, 5) != null
        );
      });
      return betweenAnyPoint ? "inside" : null;
    }
    case Tools.text:
      return x >= x1 && x <= x2 && y >= y1 && y <= y2 ? "inside" : null;
    default:
      throw new Error(`Type not recognised: ${type}`);
  }
};

export const resizedCoordinates = (
  clientX: number,
  clientY: number,
  position: string,
  coordinates: { x1: number; y1: number; x2: number; y2: number },
) => {
  const { x1, y1, x2, y2 } = coordinates;

  switch (position) {
    case "start":
    case "topLeft":
      return {
        x1: clientX,
        y1: clientY,
        x2,
        y2,
      };
    case "topRight":
      return {
        x1,
        y1: clientY,
        x2: clientX,
        y2,
      };
    case "bottomLeft":
      return {
        x1: clientX,
        y1,
        x2,
        y2: clientY,
      };
    case "end":
    case "bottomRight":
      return {
        x1,
        y1,
        x2: clientX,
        y2: clientY,
      };
    default:
      return coordinates;
  }
};

const onLine = (
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x: number,
  y: number,
  maxDistance: number = 1,
): string | null => {
  const a: PointType = { x: x1, y: y1 };
  const b: PointType = { x: x2, y: y2 };
  const c: PointType = { x, y };
  const offset = distance(a, b) - (distance(a, c) + distance(b, c));
  return Math.abs(offset) < maxDistance ? "inside" : null;
};

const distance = (a: PointType, b: PointType) =>
  Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));

export const nearPoint = (
  x: number,
  y: number,
  x1: number,
  y1: number,
  name: string,
) => {
  return Math.abs(x - x1) < 5 && Math.abs(y - y1) < 5 ? name : null;
};

function Canvas() {
  // const initialTool: ToolsType = Tools.selection;
  // const initialTool: ToolsType = Tools.line;
  const initialTool: ToolsType = Tools.rectangle;

  // const { elements, setElements, undo, redo } = useHistory([]);
  const [elements, setElements] = useState<ElementType[]>([]);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [startPanMousePosition, setStartPanMousePosition] = useState({
    x: 0,
    y: 0,
  });
  const [action, setAction] = useState<ActionsType>("none");
  const [tool, setTool] = useState<ToolsType>(initialTool);
  const [selectedElement, setSelectedElement] = useState<ElementType | null>();
  const [scale, setScale] = useState(1);
  const [scaleOffset, setScaleOffset] = useState({ x: 0, y: 0 });

  const canvasRef = useRef(null);

  useLayoutEffect(() => {
    // const canvas = document.getElementById("canvas") as HTMLCanvasElement;
    const canvas = canvasRef.current as HTMLCanvasElement | null;
    if (!canvas) {
      return;
    }
    const context = canvas.getContext("2d") as CanvasRenderingContext2D;
    const roughCanvas = rough.canvas(canvas);

    context.clearRect(0, 0, canvas.width, canvas.height);

    const scaledWidth = canvas.width * scale;
    const scaledHeight = canvas.height * scale;
    const scaleOffsetX = (scaledWidth - canvas.width) / 2;
    const scaleOffsetY = (scaledHeight - canvas.height) / 2;
    setScaleOffset({ x: scaleOffsetX, y: scaleOffsetY });

    context.save();
    context.translate(
      panOffset.x * scale - scaleOffsetX,
      panOffset.y * scale - scaleOffsetY,
    );
    context.scale(scale, scale);

    elements.forEach((element) => {
      if (
        action === "writing" &&
        selectedElement &&
        selectedElement.id === element.id
      )
        return;
      drawElement(roughCanvas, context, element);
    });
    context.restore();
  }, [elements, action, selectedElement, panOffset, scale]);

  const updateElement = (
    id: number,
    x1: number,
    y1: number,
    x2: number,
    y2: number,
    type: ToolsType,
    options?: { text: string },
  ) => {
    const elementsCopy = [...elements];
    switch (type) {
      case Tools.line:
      case Tools.rectangle: {
        elementsCopy[id] = createElement(id, x1, y1, x2, y2, type);
        break;
      }
      case Tools.pencil: {
        const existingPoints = elementsCopy[id].points || [];
        elementsCopy[id].points = [...existingPoints, { x: x2, y: y2 }];
        break;
      }
      case Tools.text: {
        const canvas = document.getElementById("canvas");
        if (!(canvas instanceof HTMLCanvasElement)) {
          throw new Error("Canvas element not found");
        }
        const context = canvas.getContext("2d");
        if (!context) {
          throw new Error("Could not get 2D context from canvas");
        }
        if (!options) {
          throw new Error("No text options provided for text tool");
        }
        const textWidth = context.measureText(options.text).width;
        const textHeight = 24;
        elementsCopy[id] = {
          ...createElement(id, x1, y1, x1 + textWidth, y1 + textHeight, type),
          text: options.text,
        };
        break;
      }
      default:
        throw new Error(`Type not recognised: ${type}`);
    }
    // setElements(elementsCopy, true);
    setElements(elementsCopy);
  };

  const getMouseCoordinates = (event: MouseEvent) => {
    const clientX =
      (event.clientX - panOffset.x * scale + scaleOffset.x) / scale;
    const clientY =
      (event.clientY - panOffset.y * scale + scaleOffset.y) / scale;
    return { clientX, clientY };
  };

  const handleMouseDown = (event: MouseEvent<HTMLCanvasElement>) => {
    if (action === "writing") return;

    const { clientX, clientY } = getMouseCoordinates(event);

    // if (tool === Tools.pan || event.button === 1 || pressedKeys.has(" ")) {
    //   setAction("panning");
    //   setStartPanMousePosition({ x: clientX, y: clientY });
    //   document.body.style.cursor = "grabbing";
    //   return;
    // }

    // if (event.button === 1 || pressedKeys.has(" ")) {
    //   setAction("panning");
    //   setStartPanMousePosition({ x: clientX, y: clientY });
    //   document.body.style.cursor = "grabbing";
    //   return;
    // }
    console.log(["handleMouseDown"], action, tool);

    if (tool === Tools.selection) {
      const element = getElementAtPosition(clientX, clientY, elements);

      if (element) {
        let selectedElement: SelectedElementType = { ...element };

        if (element.type === "pencil" && element.points) {
          const xOffsets = element.points.map((point) => clientX - point.x);
          const yOffsets = element.points.map((point) => clientY - point.y);
          selectedElement = { ...selectedElement, xOffsets, yOffsets };
        } else {
          const offsetX = clientX - selectedElement.x1;
          const offsetY = clientY - selectedElement.y1;
          selectedElement = { ...selectedElement, offsetX, offsetY };
        }

        setSelectedElement(selectedElement);
        setElements((prevState) => prevState);

        if (element.position === "inside") {
          setAction("moving");
        } else {
          setAction("resizing");
        }
      }
    } else {
      const id = elements.length;
      const newElement = createElement(
        id,
        clientX,
        clientY,
        clientX,
        clientY,
        tool,
      );
      setElements((prevState) => [...prevState, newElement]);
      setSelectedElement(newElement);
      setAction(tool === "text" ? "writing" : "drawing");
    }
  };

  const handleMouseMove = (event: MouseEvent<HTMLCanvasElement>) => {
    const { clientX, clientY } = getMouseCoordinates(event);

    if (action === "panning") {
      const deltaX = clientX - startPanMousePosition.x;
      const deltaY = clientY - startPanMousePosition.y;
      setPanOffset({
        x: panOffset.x + deltaX,
        y: panOffset.y + deltaY,
      });
      return;
    }
    console.log(["handleMouseMove"], action, tool);
    if (tool === Tools.selection) {
      const element = getElementAtPosition(clientX, clientY, elements);

      if (element && element.position) {
        (event.target as HTMLElement).style.cursor = cursorForPosition(
          element.position,
        );
      } else {
        (event.target as HTMLElement).style.cursor = "default";
      }
    }

    if (action === "drawing") {
      const index = elements.length - 1;
      const { x1, y1 } = elements[index];
      updateElement(index, x1, y1, clientX, clientY, tool);
    } else if (action === "moving" && selectedElement) {
      if (
        selectedElement.type === "pencil" &&
        "points" in selectedElement &&
        "xOffsets" in selectedElement &&
        "yOffsets" in selectedElement
      ) {
        const extendedElement = selectedElement as ExtendedElementType;
        const newPoints = extendedElement.points!.map((_, index) => ({
          x: clientX - extendedElement.xOffsets![index],
          y: clientY - extendedElement.yOffsets![index],
        }));
        const elementsCopy = [...elements];
        elementsCopy[extendedElement.id] = {
          ...elementsCopy[extendedElement.id],
          points: newPoints,
        };
        // setElements(elementsCopy, true);
        setElements(elementsCopy);
      } else {
        const { id, x1, x2, y1, y2, type, offsetX, offsetY } =
          selectedElement as ExtendedElementType;
        const safeOffsetX = offsetX ?? 0;
        const safeOffsetY = offsetY ?? 0;
        const newX1 = clientX - safeOffsetX;
        const newY1 = clientY - safeOffsetY;
        // 🫐 Calculate the new position for x2 and y2 based on the original size
        const newX2 = newX1 + (x2 - x1);
        const newY2 = newY1 + (y2 - y1);
        const options =
          type === "text" && selectedElement.text
            ? { text: selectedElement.text }
            : undefined;
        updateElement(id, newX1, newY1, newX2, newY2, type, options);
      }
    } else if (
      action === "resizing" &&
      selectedElement &&
      selectedElement.position
    ) {
      const { id, type, position, ...coordinates } =
        selectedElement as ExtendedElementType;

      if (typeof position === "string") {
        const { x1, y1, x2, y2 } = resizedCoordinates(
          clientX,
          clientY,
          position,
          coordinates,
        );
        updateElement(id, x1, y1, x2, y2, type);
      }
    }
  };

  const handleMouseUp = (event: MouseEvent<HTMLCanvasElement>) => {
    const { clientX, clientY } = getMouseCoordinates(event);

    if (selectedElement) {
      const index = selectedElement.id;
      const { id, type } = elements[index];
      if (
        (action === "drawing" || action === "resizing") &&
        adjustmentRequired(type)
      ) {
        const { x1, y1, x2, y2 } = adjustElementCoordinates(elements[index]);
        updateElement(id, x1, y1, x2, y2, type);
      }

      const offsetX = selectedElement.offsetX || 0;
      const offsetY = selectedElement.offsetY || 0;

      if (
        selectedElement.type === "text" &&
        clientX - offsetX === selectedElement.x1 &&
        clientY - offsetY === selectedElement.y1
      ) {
        setAction("writing");
        return;
      }
    }

    if (action === "writing") {
      return;
    }

    if (action === "panning") {
      document.body.style.cursor = "default";
    }

    setAction("none");
    setSelectedElement(null);
  };

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    if (selectedElement) {
      const { id, x1, y1, type } = selectedElement;

      const x2 = selectedElement.x2 || x1;
      const y2 = selectedElement.y2 || y1;

      setAction("none");
      setSelectedElement(null);
      updateElement(id, x1, y1, x2, y2, type, { text: event.target.value });
    } else {
      console.error("No element selected when handleBlur was called");
    }
  };

  const onZoom = (delta: number) => {
    setScale((prevState) => Math.min(Math.max(prevState + delta, 0.1), 20));
  };

  return (
    <canvas
      ref={canvasRef}
      // width={window.innerWidth}
      // height={window.innerHeight}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      // style={{ position: "absolute", zIndex: 1 }}
      style={{ border: "1px solid red", width: "100%" }}
    />
  );
}

export default function App() {
  const [show, setShow] = useState(false);

  // https://reactjs.org/link/uselayouteffect-ssr
  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      {/* <h1>sketch</h1> */}
      {/* <div className={styles.Columns}> */}
      {show && <Canvas />}
      {/* </div> */}
    </>
  );
}
