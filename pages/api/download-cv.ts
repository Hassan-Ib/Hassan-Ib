import type { NextApiRequest, NextApiResponse } from "next";
import { pipeline, finished } from "stream";
import { promisify } from "util";
import fs from "fs";
import next from "next";

const pipelineAsync = promisify(pipeline);

async function getResume(request: NextApiRequest, response: NextApiResponse) {
  // response.download("filePath", "fileName");
  response.setHeader("Content-Type", "application/pdf");
  response.setHeader(
    "Content-Disposition",
    "attachment; filename=Ibrahim Hassan Resume d.pdf"
  );
  try {
    const resumePath = "files/Ibrahim Hassan Resume.pdf";
    const resumeStream = fs.createReadStream(resumePath);
    await pipelineAsync(resumeStream, response);
  } catch (error) {
    console.log(error);
  }
}

export default getResume;
