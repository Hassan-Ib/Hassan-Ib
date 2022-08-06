import { saveAs } from "file-saver";
export const downloadCv = async () => {
  const url = "/api/download_resume";
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
