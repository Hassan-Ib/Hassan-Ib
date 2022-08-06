import React, { EventHandler, MouseEvent, KeyboardEvent } from "react";
import { saveAs } from "file-saver";

export function ResumeBtn({}) {
  const save = async (
    e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
  ) => {
    const url = "/api/download-cv";
    try {
      const response = await fetch(url);
      console.log(response.status);
      console.log(response.body);
      const blob = await response.blob();
      saveAs(blob, "HassanIbrahimResume.pdf");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <button
      onClick={save}
      className=" border  border-black dark:border-main-100 font-medium font-barlow tracking-wider px-6 py-1 rounded-md capitalize hover:bg-main-100/20">
      resume
    </button>
  );
}
