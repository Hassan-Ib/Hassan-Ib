import { saveAs } from "file-saver";
export const downloadCv = async (url: string = "/api/download_resume") => {
  //   const url = "/api/download-cv";
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          "attachment; filename=Ibrahim Hassan Resumed.pdf",
      },
    });
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
