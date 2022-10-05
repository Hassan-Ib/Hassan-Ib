import { saveAs } from "file-saver";
export const downloadCv = async () => {
  const url = "/api/download_resume";
  //   const url = "/api/hello";

  try {
    const response = await fetch(url);
    if (!response.ok) throw response;
    const blob = await response.blob();
    console.log(blob);
    saveAs(blob, "HassanIbrahimResume.pdf");
  } catch (error) {
    console.log("error", error);
  }
};
