import { type ReactNode, createContext, useContext } from "react";
import { type Point, cross, middle, rect } from "@dev/model/utils";

const styles = {
  none: {
    fill: "transparent",
    stroke: "black",
    strokeWidth: 0.1,
  },
  line: {
    fill: "transparent",
    stroke: "black",
    strokeWidth: 0.01,
  },
  size: {
    fill: "transparent",
    stroke: "black",
    strokeWidth: 0.005,
  },
  bold: {
    fill: "transparent",
    stroke: "black",
    strokeWidth: 0.02,
  },
};

const draw = (ps: Point[]) =>
  ps
    .map((p, i) => (i > 0 ? line(p) : move(p)))
    .concat("z")
    .join(" ");

const line = (p: Point) => `L${p.join(" ")}`;
const move = (p: Point) => `M${p.join(" ")}`;

function Dzialka({ children }: { children: ReactNode }) {
  return children;
}

interface Sizing {
  x: number;
  y: number;
  w: number;
  h: number;
}

type SizingN = Sizing & {
  n: number;
};

interface OsContextType {
  wymiaryDomu: SizingN;
  ab: SizingN;
  ad: SizingN;
  dc: SizingN;
  ba: SizingN;
  cd: SizingN;
  osPralni: SizingN;
  osGarderoby1: SizingN;
  osGarderoby2: SizingN;
  osGarderoby3: SizingN;
}

const OsContext = createContext<OsContextType | undefined>(undefined);

function useOsContext() {
  const value = useContext(OsContext);
  if (value === undefined) {
    throw new Error(
      `useContext must be used inside a Provider with a value that's not undefined`,
    );
  }
  return value;
}

function OsPietraX({
  children,
  vars,
}: {
  children: any[];
  vars: OsContextType;
}) {
  const context = vars;

  children.forEach((child) => {
    if (child.props.calc) {
      child.props.calc(context, child.props.vars);
    }
  });

  return <OsContext.Provider value={context}>{children}</OsContext.Provider>;
}

interface ParentContextType {
  ab: SizingN;
  // ad: SizingN;
  // dc: SizingN;
  ba: SizingN;
  // cd: SizingN;
}

const ParentContext = createContext<ParentContextType | undefined>(undefined);

function useParentContext() {
  const value = useContext(ParentContext);
  if (value === undefined) {
    throw new Error(
      `useContext must be used inside a Provider with a value that's not undefined`,
    );
  }
  return value;
}

function ParentPovider({
  children,
  vars,
}: {
  children: any;
  vars: ParentContextType;
}) {
  const context = vars;

  if (children) {
    (Array.isArray(children) ? children : [children]).forEach((child: any) => {
      if (child.props.calc) {
        child.props.calc(context, child.props.vars);
      }
    });
  }

  return (
    <ParentContext.Provider value={context}>{children}</ParentContext.Provider>
  );
}

function Dom({
  children,
  size,
}: {
  children?: ReactNode;
  size: (context: OsContextType, vars: Partial<Sizing>) => Sizing;
}) {
  const context = useOsContext();
  const { x, y, w, h } = size(context, {});
  console.log(["Dom"], { w, h, x, y });
  return (
    <>
      <path d={draw(rect([x, y], [x + w, y + h]))} style={styles.line} />
      {children}
    </>
  );
}

function Sypialnia({
  children,
  vars,
  size,
}: {
  children?: ReactNode;
  vars: Partial<Sizing>;
  calc?: (context: OsContextType, vars: Partial<Sizing>) => void;
  size: (context: OsContextType, vars: Partial<Sizing>) => Sizing;
}) {
  const context = useOsContext();
  const { x, y, w, h } = size(context, vars);
  console.log(["Sypialnia"], { w, h, x, y });
  return (
    <>
      <path d={draw(rect([x, y], [x + w, y + h]))} style={styles.line} />
      <Meter
        points={[
          [x, y],
          [x + w, y + h],
        ]}
      />
      <ParentPovider
        vars={{
          ab: { x, y, w, h, n: 0 },
          ba: { x: x + w, y: y + h, w: 0, h: 0, n: 0 },
        }}
      >
        {children}
      </ParentPovider>
    </>
  );
}

function Garderoba({
  children,
  vars,
  size,
}: {
  children?: ReactNode;
  vars: Partial<Sizing>;
  calc?: (context: OsContextType, vars: Partial<Sizing>) => void;
  size: (context: OsContextType, vars: Partial<Sizing>) => Sizing;
}) {
  const context = useOsContext();
  const { x, y, w, h } = size(context, vars);
  console.log(["Garderoba"], { w, h, x, y });
  return (
    <>
      <path d={draw(rect([x, y], [x + w, y + h]))} style={styles.line} />
      <Meter
        points={[
          [x, y],
          [x + w, y + h],
        ]}
      />
      <ParentPovider
        vars={{
          ab: { x, y, w, h, n: 0 },
          ba: { x: x + w, y: y + h, w: 0, h: 0, n: 0 },
        }}
      >
        {children}
      </ParentPovider>
    </>
  );
}

function Schody({
  children,
  vars,
  size,
}: {
  children?: ReactNode;
  vars: Partial<Sizing>;
  calc?: (context: OsContextType, vars: Partial<Sizing>) => void;
  size: (context: OsContextType, vars: Partial<Sizing>) => Sizing;
}) {
  const context = useOsContext();
  const { x, y, w, h } = size(context, vars);
  console.log(["Schody"], { w, h, x, y });
  return (
    <>
      <path d={draw(rect([x, y], [x + w, y + h]))} style={styles.line} />
      <Meter
        points={[
          [x, y],
          [x + w, y + h],
        ]}
      />
      {children}
    </>
  );
}

function Lazienka({
  children,
  vars,
  size,
}: {
  children?: ReactNode;
  vars: Partial<Sizing>;
  calc?: (context: OsContextType, vars: Partial<Sizing>) => void;
  size: (context: OsContextType, vars: Partial<Sizing>) => Sizing;
}) {
  const context = useOsContext();
  const { x, y, w, h } = size(context, vars);
  console.log(["Lazienka"], { w, h, x, y });
  return (
    <>
      <path d={draw(rect([x, y], [x + w, y + h]))} style={styles.line} />
      <Meter
        points={[
          [x, y],
          [x + w, y + h],
        ]}
      />
      <ParentPovider
        vars={{
          ab: { x, y, w, h, n: 0 },
          ba: { x: x + w, y: y + h, w: 0, h: 0, n: 0 },
        }}
      >
        {children}
      </ParentPovider>
    </>
  );
}

function Pralnia({
  children,
  vars,
  size,
}: {
  children?: ReactNode;
  vars: Partial<Sizing>;
  calc?: (context: OsContextType, vars: Partial<Sizing>) => void;
  size: (context: OsContextType, vars: Partial<Sizing>) => Sizing;
}) {
  const context = useOsContext();
  const { x, y, w, h } = size(context, vars);
  console.log(["Pralnia"], { w, h, x, y });
  return (
    <>
      <path d={draw(rect([x, y], [x + w, y + h]))} style={styles.line} />
      <Meter
        points={[
          [x, y],
          [x + w, y + h],
        ]}
      />
      <ParentPovider
        vars={{
          ab: { x, y, w, h, n: 0 },
          ba: { x: x + w, y: y + h, w: 0, h: 0, n: 0 },
        }}
      >
        {children}
      </ParentPovider>
    </>
  );
}

function Gabinet({
  children,
  vars,
  size,
}: {
  children?: ReactNode;
  vars: Partial<Sizing>;
  calc?: (context: OsContextType, vars: Partial<Sizing>) => void;
  size: (context: OsContextType, vars: Partial<Sizing>) => Sizing;
}) {
  const context = useOsContext();
  const { x, y, w, h } = size(context, vars);
  console.log(["Gabinet"], { w, h, x, y });
  return (
    <>
      <path d={draw(rect([x, y], [x + w, y + h]))} style={styles.line} />
      <Meter
        points={[
          [x, y],
          [x + w, y + h],
        ]}
      />
      <ParentPovider
        vars={{
          ab: { x, y, w, h, n: 0 },
          ba: { x: x + w, y: y + h, w: 0, h: 0, n: 0 },
        }}
      >
        {children}
      </ParentPovider>
    </>
  );
}

function Korytarz({
  children,
  vars = {},
  size,
}: {
  children?: ReactNode;
  vars?: Partial<Sizing>;
  calc?: (context: OsContextType, vars: Partial<Sizing>) => void;
  size: (context: OsContextType, vars: Partial<Sizing>) => Sizing;
}) {
  const context = useOsContext();
  const { x, y, w, h } = size(context, vars);
  console.log(["Korytarz"], { w, h, x, y });
  return (
    <>
      <path d={draw(rect([x, y], [x + w, y + h]))} style={styles.line} />
      <Meter
        points={[
          [x, y],
          [x + w, y + h],
        ]}
      />
      <ParentPovider
        vars={{
          ab: { x, y, w, h, n: 0 },
          ba: { x: x + w, y: y + h, w: 0, h: 0, n: 0 },
        }}
      >
        {children}
      </ParentPovider>
    </>
  );
}

function Sauna({
  children,
  vars = {},
  size,
}: {
  children?: ReactNode;
  vars?: Partial<Sizing>;
  calc?: (context: ParentContextType, vars: Partial<Sizing>) => void;
  size: (context: ParentContextType, vars: Partial<Sizing>) => Sizing;
}) {
  const context = useParentContext();
  const { x, y, w, h } = size(context, vars);
  console.log(["Sauna"], { w, h, x, y });
  return (
    <>
      <path d={draw(rect([x, y], [x + w, y + h]))} style={styles.line} />
      <Meter
        points={[
          [x, y],
          [x + w, y + h],
        ]}
        fontSize={0.15}
      />
      <ParentPovider
        vars={{
          ab: { x, y, w, h, n: 0 },
          ba: { x: x + w, y: y + h, w: 0, h: 0, n: 0 },
        }}
      >
        {children}
      </ParentPovider>
    </>
  );
}

function Zabudowa({
  children,
  vars = {},
  size,
}: {
  children?: ReactNode;
  vars?: Partial<Sizing>;
  calc?: (context: ParentContextType, vars: Partial<Sizing>) => void;
  size: (context: ParentContextType, vars: Partial<Sizing>) => Sizing;
}) {
  const context = useParentContext();
  const { x, y, w, h } = size(context, vars);
  // console.log(["Zabudowa"], { w, h, x, y });
  return (
    <>
      <path d={draw(rect([x, y], [x + w, y + h]))} style={styles.line} />
      <Meter
        points={[
          [x, y],
          [x + w, y + h],
        ]}
        fontSize={0.1}
      />
      {children}
    </>
  );
}

function Okno({
  children,
  vars = {},
  size,
}: {
  children?: ReactNode;
  vars?: Partial<Sizing>;
  calc?: (context: ParentContextType, vars: Partial<Sizing>) => void;
  size: (context: ParentContextType, vars: Partial<Sizing>) => Sizing;
}) {
  const context = useParentContext();
  const { x, y, w, h } = size(context, vars);
  // console.log(["Zabudowa"], { w, h, x, y });
  return (
    <>
      <path d={draw(rect([x, y], [x + w, y + h]))} style={styles.bold} />
      <Meter
        important
        points={[
          [x, y],
          [x + w, y + h],
        ]}
        fontSize={0.1}
      />
      {children}
    </>
  );
}

function Drzwi({
  children,
  vars = {},
  size,
}: {
  children?: ReactNode;
  vars?: Partial<Sizing>;
  calc?: (context: ParentContextType, vars: Partial<Sizing>) => void;
  size: (context: ParentContextType, vars: Partial<Sizing>) => Sizing;
}) {
  const context = useParentContext();
  const { x, y, w, h } = size(context, vars);
  // console.log(["Zabudowa"], { w, h, x, y });
  return (
    <>
      <path d={draw(rect([x, y], [x + w, y + h]))} style={styles.bold} />
      <Meter
        important
        points={[
          [x, y],
          [x + w, y + h],
        ]}
        fontSize={0.1}
      />
      {children}
    </>
  );
}

function Odstep({
  children,
  vars = {},
  size,
}: {
  children?: ReactNode;
  vars?: Partial<Sizing>;
  calc?: (context: ParentContextType, vars: Partial<Sizing>) => void;
  size: (context: ParentContextType, vars: Partial<Sizing>) => Sizing;
}) {
  const context = useParentContext();
  const { x, y, w, h } = size(context, vars);
  // console.log(["Zabudowa"], { w, h, x, y });
  return (
    <>
      <path d={draw(rect([x, y], [x + w, y + h]))} style={styles.size} />
      <Meter
        important
        points={[
          [x, y],
          [x + w, y + h],
        ]}
        fontSize={0.1}
      />
      {children}
    </>
  );
}

function Klapa({
  children,
  vars = {},
  size,
}: {
  children?: ReactNode;
  vars?: Partial<Sizing>;
  calc?: (context: ParentContextType, vars: Partial<Sizing>) => void;
  size: (context: ParentContextType, vars: Partial<Sizing>) => Sizing;
}) {
  const context = useParentContext();
  const { x, y, w, h } = size(context, vars);
  // console.log(["Klapa"], { w, h, x, y });
  return (
    <>
      <path
        d={draw(rect([x, y], [x + w, y + h]))}
        style={styles.line}
        stroke-dasharray=".06,.04"
      />
      <Meter
        points={[
          [x, y],
          [x + w, y + h],
        ]}
        fontSize={0.15}
      />
      {children}
    </>
  );
}

function Komin({
  children,
  vars = {},
  size,
}: {
  children?: ReactNode;
  vars?: Partial<Sizing>;
  calc?: (context: OsContextType, vars: Partial<Sizing>) => void;
  size: (context: OsContextType, vars: Partial<Sizing>) => Sizing;
}) {
  const context = useOsContext();
  const { x, y, w, h } = size(context, vars);
  console.log(["Komin"], { w, h, x, y });
  return (
    <>
      <path d={draw(rect([x, y], [x + w, y + h]))} style={styles.line} />
      <Meter
        points={[
          [x, y],
          [x + w, y + h],
        ]}
        fontSize={0.1}
      />
      {children}
    </>
  );
}

function Lukarna({
  children,
  vars = {},
  size,
}: {
  children?: ReactNode;
  vars?: Partial<Sizing>;
  calc?: (context: OsContextType, vars: Partial<Sizing>) => void;
  size: (context: OsContextType, vars: Partial<Sizing>) => Sizing;
}) {
  const context = useOsContext();
  const { x, y, w, h } = size(context, vars);
  console.log(["Lukarna"], { w, h, x, y });
  return (
    <>
      <path d={draw(rect([x, y], [x + w, y + h]))} style={styles.line} />
      {children}
    </>
  );
}

function Skos({
  children,
  vars = {},
  size,
}: {
  children?: ReactNode;
  vars?: Partial<Sizing>;
  calc?: (context: OsContextType, vars: Partial<Sizing>) => void;
  size: (context: OsContextType, vars: Partial<Sizing>) => Sizing;
}) {
  const context = useOsContext();
  const { x, y, w, h } = size(context, vars);
  console.log(["Skos"], { w, h, x, y });
  return (
    <>
      <path
        d={draw(rect([x, y], [x + w, y + h]))}
        style={styles.line}
        stroke-dasharray=".02,.08"
      />
      {children}
    </>
  );
}

function Pietro({ children }: { children: ReactNode }) {
  return children;
}

function Strych({ children }: { children?: ReactNode }) {
  return children;
}

function Meter({
  points,
  fontSize = 0.2,
  important = false,
}: {
  points: [Point, Point];
  fontSize?: number;
  important?: boolean;
}) {
  const [a, c] = points;
  const b = cross(c, a);
  const d = cross(a, c);
  const [ax, ay] = a;
  const [cx, cy] = c;

  const w = Math.abs(ax - cx);
  const h = Math.abs(ay - cy);
  // console.log({ w, h });
  return important || (w > 0.1 && h > 0.1) ? (
    <g>
      {w > 0.1 && (
        <g transform={`translate(${middle(a, b).join(" ")})`}>
          <g transform={`rotate(${ax < cx ? 0 : 180})`}>
            <text
              style={{ fontSize }}
              textAnchor="middle"
              y={important ? (ax < cx ? -1.2 : -0.2) * fontSize : fontSize}
            >
              {`${Math.round(1000 * w) / 1000}`}
            </text>
          </g>
        </g>
      )}
      {h > 0.1 && (
        <g transform={`translate(${middle(a, d).join(" ")})`}>
          <g transform={`rotate(${ay > cy ? 90 : -90})`}>
            <text
              style={{ fontSize }}
              textAnchor="middle"
              y={important ? (ay > cy ? -0.2 : -1.2) * fontSize : fontSize}
            >
              {`${Math.round(1000 * h) / 1000}`}
            </text>
          </g>
        </g>
      )}
    </g>
  ) : null;
}

export default function Layout() {
  return (
    <g transform={`scale(${50}) translate(${[0.4, 2].join(",")})`}>
      <Dzialka>
        <Pietro>
          <OsPietraX
            vars={{
              wymiaryDomu: { x: 0, y: 0, w: 19.8, h: 8, n: 0 },
              ab: { x: 0.48, y: 0.48, w: 0, h: 0, n: 0 },
              ad: { x: 0.48, y: 0.48, w: 0, h: 0, n: 0 },
              dc: { x: 0.48, y: 0, w: 0, h: 0, n: 0 },
              ba: { x: 0.48, y: 0, w: 0.48, h: 0, n: 0 },
              cd: { x: 0.48, y: 0, w: 0.48, h: 0, n: 0 },
              osPralni: { x: 0, y: 0, w: 0.48, h: 0.48, n: 0 },
              osGarderoby1: { x: 0, y: 0, w: 0.48, h: 0.48, n: 0 },
              osGarderoby2: { x: 0, y: 0, w: 0.48, h: 0.48, n: 0 },
              osGarderoby3: { x: 0, y: 0, w: 0, h: 0.48, n: 0 },
            }}
          >
            <Dom size={(context) => context.wymiaryDomu} />
            <Sypialnia
              vars={{
                w: 3.9,
              }}
              calc={(context) => {
                console.log(["Sypialnia calc"], context);
                context.ad.n++;
              }}
              size={(context, vars) => {
                const { w = 0 } = vars;
                const { n } = context.ad;
                const h = (context.wymiaryDomu.h - 2 * 0.48 - 0.16) / n;
                const x = context.wymiaryDomu.x + context.ab.x;
                const y = context.wymiaryDomu.y + context.ad.y;
                context.ab.x += w + 0.16;
                context.ad.y += h + 0.16;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            >
              <Odstep
                vars={{
                  h: 0.1,
                }}
                size={(context, { h = 0 }) => {
                  const w = -0.1;
                  const x = context.ab.x + context.ab.w + 0.16;
                  const y = context.ab.y + context.ab.h - h;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Drzwi
                vars={{
                  h: -0.8,
                }}
                size={(context, { h = 0 }) => {
                  const w = -0.1;
                  const x = context.ab.x + context.ab.w + 0.16;
                  const y = context.ab.y + context.ab.h - 0.1;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Odstep
                vars={{
                  h: 0.9,
                }}
                size={(context, { h = 0 }) => {
                  const w = -0.1;
                  const x = context.ab.x + context.ab.w + 0.16;
                  const y = context.ab.y + context.ab.h - h - 0.9;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Drzwi
                vars={{
                  h: -0.8,
                }}
                size={(context, { h = 0 }) => {
                  const w = -0.1;
                  const x = context.ab.x + context.ab.w + 0.16;
                  const y = context.ab.y + context.ab.h - 0.9 - 0.9;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
            </Sypialnia>
            <Garderoba
              vars={{
                w: 1.22,
                h: 2.04,
              }}
              size={(context, vars) => {
                const { w = 0, h = 0 } = vars;
                const x = context.wymiaryDomu.x + context.ab.x;
                const y = context.wymiaryDomu.y + 0.48;
                context.ab.x += w + 0.16;
                context.osGarderoby1.x = x;
                context.osGarderoby1.y = y + h + 0.16;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            >
              <Zabudowa
                vars={{
                  w: 0.6,
                  h: 0.2,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  context.ba.y -= h;
                  const x = context.ba.x - w;
                  const y = context.ba.y;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.6,
                  h: 0.6,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  context.ba.y -= h;
                  const x = context.ba.x - w;
                  const y = context.ba.y;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.6,
                  h: 0.6,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  context.ba.y -= h;
                  const x = context.ba.x - w;
                  const y = context.ba.y;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.6,
                  h: 0.6,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  context.ba.y -= h;
                  const x = context.ba.x - w;
                  const y = context.ba.y;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
            </Garderoba>

            <Sypialnia
              vars={{
                w: 3.9,
              }}
              calc={(context) => {
                context.ad.n++;
              }}
              size={(context, vars) => {
                const { w = 0 } = vars;
                const { n } = context.ad;
                const h = (context.wymiaryDomu.h - 2 * 0.48 - 0.16) / n;
                const x = context.wymiaryDomu.x + context.dc.x;
                const y = context.wymiaryDomu.y + context.ad.y;
                context.ad.y += h;
                context.dc.x += w + 0.16;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            >
              <Odstep
                vars={{
                  h: 0.1,
                }}
                size={(context, { h = 0 }) => {
                  const w = -0.1;
                  const x = context.ab.x + context.ab.w + 0.16;
                  const y = context.ab.y;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Drzwi
                vars={{
                  h: -0.8,
                }}
                size={(context, { h = 0 }) => {
                  const w = -0.1;
                  const x = context.ab.x + context.ab.w + 0.16;
                  const y = context.ab.y + 0.1 - h;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Odstep
                vars={{
                  h: 0.9,
                }}
                size={(context, { h = 0 }) => {
                  const w = -0.1;
                  const x = context.ab.x + context.ab.w + 0.16;
                  const y = context.ab.y + 0.9;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Drzwi
                vars={{
                  h: -0.8,
                }}
                size={(context, { h = 0 }) => {
                  const w = -0.1;
                  const x = context.ab.x + context.ab.w + 0.16;
                  const y = context.ab.y + 0.9 + 0.9 - h;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
            </Sypialnia>
            <Garderoba
              vars={{
                w: 1.22,
                h: 2.04,
              }}
              size={(context, { w = 0, h = 0 }) => {
                const x = context.wymiaryDomu.x + context.dc.x;
                const y = context.wymiaryDomu.y + context.ad.y - h;
                context.dc.x += w;
                context.osGarderoby2.x = x + w + 0.16;
                context.osGarderoby2.y = y - 0.16;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            />

            <Skos
              size={(context) => {
                const w = context.dc.x - 0.48 + 0.16;
                const h = 1;
                const x = context.wymiaryDomu.x + 0.48;
                const y =
                  context.wymiaryDomu.y + context.wymiaryDomu.h - 0.48 - h;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            />
            <Lukarna
              vars={{
                w: 2.1,
                h: 0.3,
              }}
              size={(context, { w = 0, h = 0 }) => {
                const x = context.wymiaryDomu.x + context.dc.x + 0.16;
                const y = context.wymiaryDomu.y + context.ad.y;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            />
            <Skos
              size={(context) => {
                const h = 1;
                const x = context.wymiaryDomu.x + context.dc.x + 0.16 + 2.1;
                const y = context.wymiaryDomu.y + context.ad.y - h;
                const w =
                  context.wymiaryDomu.x + context.wymiaryDomu.w - x - 0.48;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            />

            <Korytarz
              vars={{}}
              size={(context) => {
                const w = context.osGarderoby2.x - context.osGarderoby1.x;
                const h = context.osGarderoby2.y - context.osGarderoby1.y;
                const x = context.osGarderoby1.x;
                const y = context.osGarderoby1.y;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            />

            <Schody
              vars={{
                w: 2.1,
                h: 1,
              }}
              size={(context, { w = 0, h = 0 }) => {
                const x = context.wymiaryDomu.x + context.ab.x;
                const y = context.wymiaryDomu.y + 0.48;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            />
            <Schody
              vars={{
                w: 1,
                h: 1.2,
              }}
              size={(context, { w = 0, h = 0 }) => {
                const x = context.wymiaryDomu.x + context.ab.x;
                const y = context.wymiaryDomu.y + 0.48 + 1;
                context.ab.x += w;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            />
            <Schody
              vars={{
                w: 0.1,
                h: 2.6,
              }}
              size={(context, { w = 0, h = 0 }) => {
                const x = context.wymiaryDomu.x + context.ab.x;
                const y = context.wymiaryDomu.y + 0.48 + 1;
                context.ab.x += w;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            />
            <Schody
              vars={{
                w: 1,
                h: 2.6,
              }}
              size={(context, { w = 0, h = 0 }) => {
                const x = context.wymiaryDomu.x + context.ab.x;
                const y = context.wymiaryDomu.y + 0.48 + 1;
                context.ab.x += w + 0.16;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            />
            <Skos
              size={(context) => {
                const w = context.ab.x - 0.48;
                const h = 1;
                const x = context.wymiaryDomu.x + 0.48;
                const y = context.wymiaryDomu.y + 0.48;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            />
            <Lukarna
              vars={{
                w: 2.2 + 0.16 + 2.7 + 0.16 + 1.6,
                h: 0.3,
              }}
              size={(context, { w = 0, h = 0 }) => {
                const x = context.wymiaryDomu.x + context.ab.x;
                const y = context.wymiaryDomu.y + 0.48 - h;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            />
            <Lazienka
              vars={{
                w: 2.2 + 0.2,
              }}
              size={(context, { w = 0 }) => {
                const { n } = context.ad;
                const h = (context.wymiaryDomu.h - 0.16) / n - 0.48;
                const x = context.wymiaryDomu.x + context.ab.x;
                const y = context.wymiaryDomu.y + 0.48;
                context.ab.x += w + 0.16;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            >
              <Odstep
                vars={{
                  w: -0.4,
                }}
                size={(context, { w = 0 }) => {
                  const h = -0.1;
                  const x = context.ab.x + context.ab.w;
                  const y = context.ab.y + context.ab.h + 0.16;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Drzwi
                vars={{
                  w: -0.8,
                }}
                size={(context, { w = 0 }) => {
                  const h = -0.1;
                  const x = context.ab.x + context.ab.w - 0.4;
                  const y = context.ab.y + context.ab.h + 0.16;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Odstep
                vars={{
                  w: 1.2,
                }}
                size={(context, { w = 0 }) => {
                  const h = -0.1;
                  const x = context.ab.x;
                  const y = context.ab.y;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Okno
                vars={{
                  w: 0.8,
                }}
                size={(context, { w = 0 }) => {
                  const h = -0.1;
                  const x = context.ab.x + context.ab.w - w - 0.4;
                  const y = context.ab.y;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Odstep
                vars={{
                  w: 0.4,
                }}
                size={(context, { w = 0 }) => {
                  const h = -0.1;
                  const x = context.ab.x + context.ab.w - w;
                  const y = context.ab.y;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 1.2,
                  h: 0.9,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ab.x;
                  const y = context.ab.y;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.75,
                  h: 1.6,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ab.x;
                  const y = context.ab.y + (context.ab.h - h) / 2;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.3,
                  h: (3.44 - 1.6) / 2,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ab.x + (context.ab.w - w);
                  const y = context.ab.y;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.5,
                  h: 1.6,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ab.x + (context.ab.w - w);
                  const y = context.ab.y + (context.ab.h - h) / 2;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.3,
                  h: (3.44 - 1.6) / 2,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ab.x + (context.ab.w - w);
                  const y = context.ab.y + context.ab.h - h;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.55,
                  h: 0.5,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ab.x + 0.2;
                  const y = context.ab.y + (context.ab.h - (h + 0.9) / 2);
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.2,
                  h: 0.9,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ab.x;
                  const y = context.ab.y + (context.ab.h - h);
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
            </Lazienka>
            <Gabinet
              vars={{
                // w: 2.7,
                w: 2.7 + 0.1,
              }}
              size={(context, { w = 0 }) => {
                const { n } = context.ad;
                const h = (context.wymiaryDomu.h - 0.16) / n - 0.48 + 0.16;
                const x = context.wymiaryDomu.x + context.ab.x;
                const y = context.wymiaryDomu.y + 0.48;
                context.ab.x += w + 1.6;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            >
              <Odstep
                vars={{
                  w: -0.1,
                }}
                size={(context, { w = 0 }) => {
                  const h = -0.1;
                  const x = context.ab.x - w;
                  const y = context.ab.y + context.ab.h;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Drzwi
                vars={{
                  w: -0.8,
                }}
                size={(context, { w = 0 }) => {
                  const h = -0.1;
                  const x = context.ab.x + 0.1 - w;
                  const y = context.ab.y + context.ab.h;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Okno
                vars={{
                  w: 2,
                }}
                size={(context, { w = 0 }) => {
                  const h = -0.1;
                  const x = context.ab.x;
                  const y = context.ab.y;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Okno
                vars={{
                  w: 0.8,
                }}
                size={(context, { w = 0 }) => {
                  const h = -0.1;
                  const x = context.ab.x + context.ab.w - w;
                  const y = context.ab.y;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 1.8,
                  h: 0.6,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ab.x;
                  const y = context.ab.y;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
            </Gabinet>
            <Skos
              size={(context) => {
                const w = context.wymiaryDomu.w - context.ab.x - 0.48 - 0.16;
                const h = 1;
                const x = context.ab.x + 0.16;
                const y = context.wymiaryDomu.y + 0.48;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            />

            <Lazienka
              vars={{
                w: 2.5 - 0.06,
              }}
              size={(context, { w = 0 }) => {
                const { n } = context.ad;
                const h = (context.wymiaryDomu.h - 0.16) / n - 0.48;
                const x =
                  context.wymiaryDomu.x +
                  context.wymiaryDomu.w -
                  context.ba.w -
                  w;
                const y = context.wymiaryDomu.y + 0.48;
                context.ba.w += w + 0.16;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            >
              <Odstep
                vars={{
                  h: 0.1 - 0.84,
                }}
                size={(context, { h = 0 }) => {
                  const w = -0.1;
                  const x = context.ab.x + context.ab.w - w;
                  const y = context.ab.y + context.ab.h;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Okno
                vars={{
                  h: -0.8,
                }}
                size={(context, { h = 0 }) => {
                  const w = -0.1;
                  const x = context.ab.x + context.ab.w - w;
                  const y = context.ab.y + context.ab.h - 0.84 + 0.1;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Drzwi
                vars={{
                  h: -0.8,
                }}
                size={(context, { h = 0 }) => {
                  const w = -0.1;
                  const x = context.ab.x - 0.06;
                  const y = context.ab.y + context.ab.h - 0.84 + 0.1;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.5,
                  h: 0.55,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ab.x + 0.9 + -(w + 0.9) / 2;
                  const y = context.ab.y + context.ab.h - h - 0.2;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.9,
                  h: 0.2,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ab.x + 0.9 + -w;
                  const y = context.ab.y + context.ab.h - h;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Sauna
                vars={{
                  w: 1.5 - 0.06,
                  h: 1.8,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ab.x;
                  const y = context.ab.y;
                  context.ab.x += w + 0.1;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              >
                <Zabudowa
                  vars={{
                    w: 0.6,
                  }}
                  size={(context, { w = 0, h = context.ab.h }) => {
                    const x = context.ab.x;
                    const y = context.ab.y;
                    return {
                      x,
                      y,
                      w,
                      h,
                    };
                  }}
                />
                <Zabudowa
                  vars={{
                    h: 0.6,
                  }}
                  size={(context, { h = 0, w = context.ab.w - 0.6 }) => {
                    const x = context.ab.x + 0.6;
                    const y = context.ab.y;
                    context.ab.y += h;
                    return {
                      x,
                      y,
                      w,
                      h,
                    };
                  }}
                />
                <Zabudowa
                  vars={{
                    h: 0.4,
                  }}
                  size={(context, { h = 0, w = context.ab.w - 0.6 }) => {
                    const x = context.ab.x + 0.6;
                    const y = context.ab.y;
                    return {
                      x,
                      y,
                      w,
                      h,
                    };
                  }}
                />
              </Sauna>
              <Zabudowa
                vars={{
                  w: 0.9,
                  h: 1.8,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ab.x;
                  const y = context.ab.y;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 1.5,
                  h: 0.5,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ba.x - w;
                  const y = context.ba.y - h;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
            </Lazienka>
            <Garderoba
              vars={{
                // w: 1.5 + 1.6 + 0.16,
                w: 1.5 + 1.6 + 0.16 - 0.3 + 0.06,
                h: 1.8,
              }}
              size={(context, { w = 0, h = 0 }) => {
                const x =
                  context.wymiaryDomu.x +
                  context.wymiaryDomu.w -
                  context.ba.w -
                  w;
                const y = context.wymiaryDomu.y + context.osPralni.h;
                context.ba.w += w;
                context.osPralni.w = w;
                context.osPralni.h += h + 0.16;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            >
              <Klapa
                vars={{
                  w: 0.8,
                  h: 1,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ab.x + 0.72;
                  const y = context.ab.y + 0.1;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Klapa
                vars={{
                  w: 0.8,
                  h: 1,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ab.x + 0.72 + w + 0.2 + 0.4;
                  const y = context.ab.y + 0.1;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.6,
                  h: 0.6,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ab.x;
                  const y = context.ab.y;
                  context.ab.x += w;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.6,
                  h: 0.6,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ab.x;
                  const y = context.ab.y;
                  context.ab.x += w;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.6,
                  h: 0.6,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ab.x;
                  const y = context.ab.y;
                  context.ab.x += w;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.6,
                  h: 0.6,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ab.x;
                  const y = context.ab.y;
                  context.ab.x += w;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.6,
                  h: 0.6,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ab.x;
                  const y = context.ab.y;
                  context.ab.x += w;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.6,
                  h: 0.6,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  context.ba.y += h;
                  const x = context.ba.x - context.ab.w;
                  const y = context.ba.y - context.ab.h;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.6,
                  h: 0.6,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  context.ba.y += h;
                  const x = context.ba.x - context.ab.w;
                  const y = context.ba.y - context.ab.h;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
            </Garderoba>
            <Pralnia
              vars={{
                // w: 1.6,
                w: 1.6 + 0.26,
              }}
              size={(context, { w = 0 }) => {
                const h =
                  (context.wymiaryDomu.h - 0.16) / 2 - context.osPralni.h;
                const x =
                  context.wymiaryDomu.x + context.wymiaryDomu.w - context.ba.w;
                const y = context.wymiaryDomu.y + context.osPralni.h;
                context.ba.w -= w + 0.16;
                context.osPralni.w -= w + 0.16;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            >
              <Odstep
                vars={{
                  w: -0.1,
                }}
                size={(context, { w = 0 }) => {
                  const h = -0.1;
                  const x = context.ab.x - w;
                  const y = context.ab.y + context.ab.h + 0.16;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Drzwi
                vars={{
                  w: -0.8,
                }}
                size={(context, { w = 0 }) => {
                  const h = -0.1;
                  const x = context.ab.x + 0.1 - w;
                  const y = context.ab.y + context.ab.h + 0.16;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Klapa
                vars={{
                  w: 1.4,
                  h: 0.7,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ba.x - w - 0.1;
                  const y = context.ba.y - h - 0.1;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.2,
                  h: 0.6,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ab.x;
                  const y = context.ab.y;
                  context.ab.x += w;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.6,
                  h: 0.6,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ab.x;
                  const y = context.ab.y;
                  context.ab.x += w;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.6,
                  h: 0.6,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ab.x;
                  const y = context.ab.y;
                  context.ab.x += w;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.2,
                  h: 0.6,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ab.x;
                  const y = context.ab.y;
                  // context.ab.x += w;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.46,
                  h: 0.88,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ab.x;
                  const y = context.ab.y + 0.6;
                  context.ab.x += w;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
            </Pralnia>
            <Korytarz
              size={(context) => {
                const w = context.osPralni.w;
                const h =
                  (context.wymiaryDomu.h - 0.16) / 2 -
                  context.osPralni.h +
                  0.16;
                const x =
                  context.wymiaryDomu.x + context.wymiaryDomu.w - context.ba.w;
                const y = context.wymiaryDomu.y + context.osPralni.h - 0.16;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            >
              <Odstep
                vars={{
                  w: -0.1,
                }}
                size={(context, { w = 0 }) => {
                  const h = -0.1;
                  const x = context.ab.x - w;
                  const y = context.ab.y + context.ab.h + 0.16;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Drzwi
                vars={{
                  w: -0.8,
                }}
                size={(context, { w = 0 }) => {
                  const h = -0.1;
                  const x = context.ab.x + 0.1 - w;
                  const y = context.ab.y + context.ab.h + 0.16;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
            </Korytarz>

            <Sypialnia
              vars={{
                // w: 4.16,
                w: 4.16 - 0.56,
              }}
              size={(context, { w = 0 }) => {
                const { n } = context.ad;
                const h = (context.wymiaryDomu.h - 0.16) / n - 0.48;
                const x =
                  context.wymiaryDomu.x +
                  context.wymiaryDomu.w -
                  context.cd.w -
                  w;
                const y =
                  context.wymiaryDomu.y + context.wymiaryDomu.h - h - 0.48;
                context.cd.w += w + 0.16;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            >
              <Zabudowa
                vars={{
                  w: 2,
                  h: 2,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ba.x - w - 0.8;
                  const y = context.ba.y - h;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
            </Sypialnia>
            <Garderoba
              vars={{
                // w: 1.6,
                // w: 1.6 + 0.26,
                w: 1.2 + 0.26,
                h: 2.28,
              }}
              size={(context, { w = 0, h = 0 }) => {
                const x =
                  context.wymiaryDomu.x +
                  context.wymiaryDomu.w -
                  context.cd.w -
                  w;
                const y =
                  context.wymiaryDomu.y + context.wymiaryDomu.h - 0.48 - h;
                context.cd.w += w + 0.16;
                context.osGarderoby3.w += w + 0.16 + 0.16;
                context.osGarderoby3.h += h + 0.16;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            >
              <Odstep
                vars={{
                  h: 0.1,
                }}
                size={(context, { h = 0 }) => {
                  const w = -0.1;
                  const x = context.ab.x + context.ab.w + 0.16;
                  const y = context.ab.y;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Drzwi
                vars={{
                  h: -0.8,
                }}
                size={(context, { h = 0 }) => {
                  const w = -0.1;
                  const x = context.ab.x + context.ab.w + 0.16;
                  const y = context.ab.y + 0.1 - h;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.6,
                  h: 0.2,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ba.x - context.ab.w;
                  const y = context.ba.y - context.ab.h;
                  context.ba.y += h;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.6,
                  h: 0.6,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ba.x - context.ab.w;
                  const y = context.ba.y - context.ab.h;
                  context.ba.y += h;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.6,
                  h: 0.6,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ba.x - context.ab.w;
                  const y = context.ba.y - context.ab.h;
                  context.ba.y += h;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.6,
                  h: 0.6,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ba.x - context.ab.w;
                  const y = context.ba.y - context.ab.h;
                  context.ba.y += h;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Zabudowa
                vars={{
                  w: 0.6,
                  h: 0.2,
                }}
                size={(context, { w = 0, h = 0 }) => {
                  const x = context.ba.x - context.ab.w;
                  const y = context.ba.y - context.ab.h;
                  context.ba.y += h;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
            </Garderoba>
            <Garderoba
              vars={{
                // w: 1.6,
                // w: 1.6 + 0.26,
                w: +0.4,
                // h: 2.28,
              }}
              size={(context, { w = 0 }) => {
                const h = context.osGarderoby3.h - 0.64;
                const x =
                  context.wymiaryDomu.x +
                  context.wymiaryDomu.w -
                  context.cd.w -
                  w;
                const y =
                  context.wymiaryDomu.y + context.wymiaryDomu.h - 0.48 - h;
                context.cd.w += w;
                context.osGarderoby3.w += w;
                // context.osGarderoby3.h += h + 0.16;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            />
            <Korytarz
              vars={{
                // w: 1.6 + 0.42,
                w: 1.02 - 0.16,
              }}
              size={(context, { w = 0 }) => {
                const h =
                  (context.wymiaryDomu.h - 0.16) / 2 - context.osGarderoby3.h;
                const x =
                  context.wymiaryDomu.x +
                  context.wymiaryDomu.w -
                  context.cd.w +
                  context.osGarderoby3.w -
                  w;
                const y =
                  context.wymiaryDomu.y +
                  context.wymiaryDomu.h -
                  context.osGarderoby3.h -
                  h;
                context.osGarderoby3.w -= w + 0.16;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            />
            <Korytarz
              size={(context) => {
                const w = context.osGarderoby3.w;
                const h =
                  (context.wymiaryDomu.h - 0.16) / 2 - context.osGarderoby3.h;
                const x =
                  context.wymiaryDomu.x + context.wymiaryDomu.w - context.cd.w;
                const y =
                  context.wymiaryDomu.y +
                  context.wymiaryDomu.h -
                  context.osGarderoby3.h -
                  h;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            >
              <Odstep
                vars={{
                  h: 0.1,
                }}
                size={(context, { h = 0 }) => {
                  const w = -0.1;
                  const x = context.ab.x + context.ab.w - w;
                  const y = context.ab.y;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
              <Drzwi
                vars={{
                  h: -0.8,
                }}
                size={(context, { h = 0 }) => {
                  const w = -0.1;
                  const x = context.ab.x + context.ab.w - w;
                  const y = context.ab.y + 0.1 - h;
                  return {
                    x,
                    y,
                    w,
                    h,
                  };
                }}
              />
            </Korytarz>

            <Korytarz
              size={(context) => {
                const w =
                  context.wymiaryDomu.w -
                  context.cd.w -
                  context.dc.x -
                  // 0.16 -
                  0.16;
                const h = (context.wymiaryDomu.h - 0.16) / 2 - 0.48;
                const x = context.dc.x + 0.16;
                const y =
                  context.wymiaryDomu.y + context.wymiaryDomu.h - h - 0.48;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            />

            <Komin
              size={(context) => {
                const w = 0.4;
                const h = 0.4;
                const x =
                  context.wymiaryDomu.x + context.wymiaryDomu.w - 0.48 - 4;
                const y = context.wymiaryDomu.y + 0.48 + 1.8;
                return {
                  x,
                  y,
                  w,
                  h,
                };
              }}
            />
          </OsPietraX>
        </Pietro>
        <Strych></Strych>
      </Dzialka>
    </g>
  );
}
