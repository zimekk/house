// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { createElement } from "react";
import { renderToStream } from "@react-pdf/renderer";
import Document from "../containers/App/Print/Document";

type Data = unknown;

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  return renderToStream(createElement(Document)).then((pdfStream) => {
    res.setHeader("Content-Type", "application/pdf");
    pdfStream.pipe(res);
    pdfStream.on("end", () => console.log("Done streaming, response sent."));
  });
}
