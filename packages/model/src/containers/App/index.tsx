import { MouseEvent, useCallback } from "react";
// import Plan from "./Plan";
import Plan from "./Draw";
import { getPosition, useModel } from "./hooks";
import styles from "./styles.module.scss";

export default function App() {
  const [model, setModel] = useModel();

  const handleClick = useCallback((e: MouseEvent) => {
    console.log(["handleClick"]);
  }, []);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    e.preventDefault();
    if (e.target instanceof Element) {
      const { dataset } = e.target as HTMLElement;
      const { index } = dataset;
      if (index) {
        console.log(["handleMouseDown"], { index });
        setModel((model) => ({
          ...model,
          click: { x: e.pageX, y: e.pageY },
          active: Number(index),
        }));
      }
    }
  }, []);

  const handleMouseUp = useCallback((e: MouseEvent) => {
    console.log(["handleMouseUp"]);
    setModel((model) => ({
      ...model,
      click: undefined,
      active: -1,
      points: model.points.map((p, index) =>
        model.active === index ? getPosition(model, p) : p,
      ),
    }));
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (e.target instanceof Element) {
      const root = e.target.closest("svg");
      setModel((model) => ({
        ...model,
        mouse: root ? { x: e.pageX, y: e.pageY } : undefined,
      }));
    }
    return false;
  }, []);

  const onMouseOver = useCallback((e: MouseEvent) => {
    if (e.target instanceof Element) {
      const { dataset } = e.target as HTMLElement;
      const { index } = dataset;
      if (index) {
        console.log(["onMouseOver"], { index });
        setModel((model) => ({ ...model, hover: Number(index) }));
      }
    }
  }, []);

  const onMouseOut = useCallback((e: MouseEvent) => {
    if (e.target instanceof Element) {
      const { dataset } = e.target as HTMLElement;
      const { index } = dataset;
      if (index) {
        console.log(["onMouseOut"], { index });
        setModel((model) => ({ ...model, hover: -1 }));
      }
    }
  }, []);

  return (
    <div className={styles.Container}>
      <h1>model</h1>
      <div className={styles.Wrapper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{
            height: "165vh",
          }}
          onClick={handleClick}
          onMouseMove={handleMouseMove}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
        >
          <defs>
            <filter id="texture-roof">
              <feImage
                href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/grey_roof_01/grey_roof_01_diff_1k.jpg"
                // href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/grey_roof_tiles/grey_roof_tiles_diff_1k.jpg"
                result="texture-img"
                width="10"
                height="10"
              />
              <feTile
                in="texture-img"
                x="-20"
                y="-15"
                width="40"
                height="40"
                result="tile"
              />
              <feComposite
                in2="SourceGraphic"
                operator="in"
                in="tile"
                result="composite"
              />
              <feBlend in="SourceGraphic" in2="composite" mode="multiply" />
            </filter>
            <filter id="texture-slab">
              <feImage
                href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/asphalt_pit_lane/asphalt_pit_lane_diff_1k.jpg"
                result="texture-img"
                width={25}
                height={25}
              />
              <feTile
                in="texture-img"
                x="-20"
                y="-15"
                width="40"
                height="40"
                result="tile"
              />
              <feComposite
                in2="SourceGraphic"
                operator="in"
                in="tile"
                result="composite"
              />
              <feBlend in="SourceGraphic" in2="composite" mode="multiply" />
            </filter>
            <filter id="texture-wall">
              <feImage
                // href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/brick_wall_001/brick_wall_001_diffuse_1k.jpg"
                // href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/long_white_tiles/long_white_tiles_diff_1k.jpg"
                href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/stone_pavers/stone_pavers_diff_1k.jpg"
                // href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/pavement_03/pavement_03_diff_1k.jpg"
                // href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/pavement_01/pavement_01_diff_1k.jpg"
                // href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/floor_bricks_02/floor_bricks_02_diff_1k.jpg"
                // href="http://klinkierdesigner.pl/database_8kp/0277_HF77_Dolomite%2520peak_O.png"
                // href="http://klinkierdesigner.pl/database_8kp/0281_HF81_Steel%2520rebel_O.png"
                result="texture-img"
                width="2"
                height="2"
              />
              <feTile
                in="texture-img"
                x="-20"
                y="-15"
                width="40"
                height="20"
                result="tile"
              />
              <feComposite
                in2="SourceGraphic"
                operator="in"
                in="tile"
                result="composite"
              />
              <feBlend in="SourceGraphic" in2="composite" mode="multiply" />
            </filter>
            <filter id="texture-wood">
              <feImage
                // href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/wood_planks_grey/wood_planks_grey_diff_1k.jpg"
                href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/wood_floor/wood_floor_diff_1k.jpg"
                result="texture-img"
                width="1"
                height="1"
              />
              <feTile
                in="texture-img"
                x="-20"
                y="-15"
                width="40"
                height="40"
                result="tile"
              />
              <feComposite
                in2="SourceGraphic"
                operator="in"
                in="tile"
                result="composite"
              />
              <feBlend in="SourceGraphic" in2="composite" mode="multiply" />
            </filter>
            <filter id="texture-blue">
              <feImage
                href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/blue_metal_plate/blue_metal_plate_diff_1k.jpg"
                result="texture-img"
                width="10"
                height="10"
              />
              <feTile
                in="texture-img"
                x="-20"
                y="-15"
                width="40"
                height="40"
                result="tile"
              />
              <feComposite
                in2="SourceGraphic"
                operator="in"
                in="tile"
                result="composite"
              />
              <feBlend in="SourceGraphic" in2="composite" mode="multiply" />
            </filter>
            <filter id="texture-gray">
              <feImage
                href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/worn_shutter/worn_shutter_diff_1k.jpg"
                // href="https://dl.polyhaven.org/file/ph-assets/Textures/jpg/1k/painted_metal_shutter/painted_metal_shutter_diff_1k.jpg"
                result="texture-img"
                width="5"
                height="5"
              />
              <feTile
                in="texture-img"
                x="-20"
                y="-15"
                width="40"
                height="40"
                result="tile"
              />
              <feComposite
                in2="SourceGraphic"
                operator="in"
                in="tile"
                result="composite"
              />
              <feBlend in="SourceGraphic" in2="composite" mode="multiply" />
            </filter>
          </defs>
          <Plan model={model} />
        </svg>
      </div>
    </div>
  );
}
