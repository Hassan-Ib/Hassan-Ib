import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

async function getResume(request: NextApiRequest, response: NextApiResponse) {
  // response.download("filePath", "fileName");

  if (request.method !== "GET") throw new Error("Method not allowed");
  try {
    const filePath = path.join(process.cwd(), "public");
    const resumePath = path.join(
      filePath,
      "files",
      "Ibrahim Hassan Resume.pdf"
    );

    response.writeHead(200, {
      "Content-Length": fs.statSync(resumePath).size,
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=Ibrahim Hassan Resume.pdf",
    });
    const resumeFileStream = fs.createReadStream(resumePath);
    return resumeFileStream.pipe(response);
  } catch (error) {
    console.log(error);
    response.status(400).json({ error: error });
  }
}

export default getResume;
