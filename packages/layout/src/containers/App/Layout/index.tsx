import { type ReactNode, createContext, useContext } from "react";

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
};

export type Point = [number, number];

const draw = (ps: Point[]) =>
  ps
    .map((p, i) => (i > 0 ? line(p) : move(p)))
    .concat("z")
    .join(" ");

const line = (p: Point) => `L${p.join(" ")}`;
const move = (p: Point) => `M${p.join(" ")}`;

export function cross(a: Point, b: Point): Point {
  const [ax] = a;
  const [, by] = b;

  return [ax, by];
}

export function rect(a: Point, b: Point): Point[] {
  return [a, cross(b, a), b, cross(a, b)];
}

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
      {children}
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
      {children}
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
      {children}
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
      {children}
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
      {children}
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
        stroke-dasharray=".05,.05"
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
              osGarderoby3: { x: 0, y: 0, w: 0.48, h: 0.48, n: 0 },
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
            />
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
            />

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
            />
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
                w: 2.2,
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
            />
            <Gabinet
              vars={{
                w: 2.7,
              }}
              size={(context, { w = 0 }) => {
                const { n } = context.ad;
                const h = (context.wymiaryDomu.h - 0.16) / n - 0.48;
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
            />
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
                w: 2.5,
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
            />
            <Garderoba
              vars={{
                w: 1.5 + 1.6 + 0.16,
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
            />
            <Pralnia
              vars={{
                w: 1.6,
                // w:1.6+.56
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
            />
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
            />

            <Sypialnia
              vars={{
                w: 4.16,
                // w:4.16-.56
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
            />
            <Garderoba
              vars={{
                w: 1.6,
                // w:1.6+.56,
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
                context.cd.w += w;
                context.osGarderoby3.h += h + 0.16;
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
                w: 1.6 + 0.16,
              }}
              size={(context, { w = 0 }) => {
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
            />

            <Korytarz
              size={(context) => {
                const w =
                  context.wymiaryDomu.w -
                  context.cd.w -
                  context.dc.x -
                  0.16 -
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
