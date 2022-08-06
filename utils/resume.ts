import { saveAs } from "file-saver";
export const downloadCv = async (url: string = "/api/download-cv") => {
  const response = await fetch(url);
  const blob = await response.blob();

  saveAs(blob, "HassanIbrahimResume.pdf");
};
