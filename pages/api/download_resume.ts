import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
// import { pipeline, finished } from "stream";
// import { promisify } from "util";
// import next from "next";
// const pipelineAsync = promisify(pipeline);

async function handler(request: NextApiRequest, response: NextApiResponse) {
  // response.download("filePath", "fileName");

  if (request.method !== "GET") throw new Error("Method not allowed");
  try {
    const fileDirectory = path.join(process.cwd(), "files");
    const resumePath = path.join(fileDirectory, "Ibrahim Hassan Resume.pdf");

    console.log("resume path", resumePath, __dirname, __filename);

    const resumeFileStream = fs.createReadStream(resumePath);
    const fileSize = fs.statSync(resumePath).size;

    console.log("file size ", fileSize);

    response.writeHead(200, {
      "Content-Type": "application/pdf",
      "content-Length": fileSize,
      "Content-Disposition": "attachment; filename=HassanIbrahimResume.pdf",
    });

    resumeFileStream.pipe(response);
  } catch (error) {
    console.log(error);
    return response.status(400).json({ error: error });
  }
}

export default handler;
