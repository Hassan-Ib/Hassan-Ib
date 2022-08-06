import type { NextApiRequest, NextApiResponse } from "next";
import { pipeline, finished } from "stream";
import { promisify } from "util";
import fs from "fs";
import next from "next";
import path from "path";
const pipelineAsync = promisify(pipeline);

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
      "public/files/Ibrahim Hassan Resume.pdf"
    );
    const resumeFileStream = fs.createReadStream(resumePath);
    return resumeFileStream.pipe(response);
  } catch (error) {
    console.log(error);
    response.status(400).json({ error: error });
  }
}

export default getResume;
