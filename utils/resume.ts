import { saveAs } from "file-saver";
export const downloadCv = async (url: string = "/api/download-cv") => {
  //   const url = "/api/download-cv";
  try {
    const response = await fetch(url);
    if (!response.ok) throw response;
    console.log(response.status);
    console.log(response.body);
    const blob = await response.blob();
    console.log(blob);
    saveAs(blob, "HassanIbrahimResume.pdf");
  } catch (error) {
    console.log(error);
  }
};
