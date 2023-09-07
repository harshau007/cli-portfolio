import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Gui: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "resume") {
    window.open("https://drive.google.com/file/d/1NOCCTnnb5hjMzONoXsEKDY1VT3khZa_B/view?usp=sharing", "_blank");
  }

  return <span></span>;
};

export default Gui;
