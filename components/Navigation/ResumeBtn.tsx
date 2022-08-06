import React, { EventHandler, MouseEvent, KeyboardEvent } from "react";
import { saveAs } from "file-saver";
import { downloadCv } from "../../utils/resume";

export function ResumeBtn({}) {
  const save = async () => {
    downloadCv();
  };

  return (
    <button
      onClick={save}
      className=" border  border-black dark:border-main-100 font-medium font-barlow tracking-wider px-6 py-1 rounded-md capitalize hover:bg-main-100/20">
      resume
    </button>
  );
}
