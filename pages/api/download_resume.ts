import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
// import { pipeline, finished } from "stream";
// import { promisify } from "util";
// import next from "next";
// const pipelineAsync = promisify(pipeline);

async function getResume(request: NextApiRequest, response: NextApiResponse) {
  // response.download("filePath", "fileName");

  if (request.method !== "GET") throw new Error("Method not allowed");
  try {
    response.setHeader("Content-Type", "application/pdf");
    response.setHeader(
      "Content-Disposition",
      "attachment; filename=HassanIbrahimResume.pdf"
    );
    const resumePath = path.join(
      process.cwd(),
      "files",
      "Ibrahim Hassan Resume.pdf"
    );
    console.log("resume path", resumePath);
    const resumeFileStream = fs.createReadStream(resumePath);
    // resumeFileStream.on("open", () => {
    //   resumeFileStream.pipe(response);
    // });
    // resumeFileStream.on("error", (error) => {
    //   return response.end(error.message);
    // });
    console.log("resume file stream ", resumeFileStream);
    return resumeFileStream.pipe(response);
  } catch (error) {
    console.log(error);
    return response.status(400).json({ error: error });
  }
}

export default getResume;
