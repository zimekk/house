import dynamic from "next/dynamic";
import "./index.css";

// https://github.com/mirayatech/NinjaSketch/blob/main/src/types.ts
const App = dynamic(() => import("./containers/App"), { ssr: false });

export default App;
