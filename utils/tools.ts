import JavaScriptSvg from "../public/tools-logo/icons8-javascript.svg";
import TypeScriptSvg from "../public/tools-logo/icons8-typescript.svg";
import ReduxSvg from "../public/tools-logo/icons8-redux.svg";
import SassSvg from "../public/tools-logo/icons8-sass.svg";
import ReactSvg from "../public/tools-logo/icons8-react.svg";
import NodeSvg from "../public/tools-logo/icons8-nodejs.svg";

interface ITool {
  src: string;
  toolName: string;
}

const tools: ITool[] = [
  {
    src: JavaScriptSvg,
    toolName: "javascript",
  },
  {
    src: TypeScriptSvg,
    toolName: "typeScript",
  },
  {
    src: ReactSvg,
    toolName: "react js",
  },
  {
    src: NodeSvg,
    toolName: "node js",
  },
  {
    src: ReduxSvg,
    toolName: "redux",
  },
  {
    src: SassSvg,
    toolName: "Scss",
  },
];

export default tools;
