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

// let fileReader = new FileReader();

// fileReader.readAsDataURL(blob);

// fileReader.addEventListener("load", (event) => {
//   var uri = event?.target?.result;
//   if (!uri || typeof uri !== "string") {
//     throw new Error("No uri");
//   }
//   var link = document.createElement("a");
//   link.download = "Ibrahim Hassan Resumed.pdf";
//   link.href = uri;
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
//   //   delete link;
// });
