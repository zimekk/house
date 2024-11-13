// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Zip from "jszip";
import slug from "slug";
import { inspirations } from "../data";

type Data = unknown;

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const zip = new Zip();
  const dir = zip.folder("inspirations");

  return inspirations
    .slice(0, 10)
    .reduce(
      (promise, { url, src }, index) =>
        promise.then(() => {
          const host = new URL(url).host;
          const path = new URL(url).pathname;
          const name = new URL(src).pathname.replace(
            /.*\/([^\/\.]+)(\.[^\/]+)?$/,
            "$1",
          );

          return fetch(src)
            .then((res) => res.blob())
            .then(async (blob) => {
              const type = blob.type.split("/").pop() || "jpeg";
              const file = `${String(index + 1).padStart(4, "0")}_${slug([host.substring(host.length - 10, host.length), path.substring(path.length - 10, path.length), name.substring(0, 10)].join("_"))}.${type}`;
              // console.log({url, src, type: blob.type, name, file})
              return dir?.file(file, Buffer.from(await blob.arrayBuffer()));
            });
        }),
      Promise.resolve() as Promise<any>,
    )
    .then(() => {
      zip
        .generateNodeStream({ type: "nodebuffer", streamFiles: true })
        .pipe(res)
        .on("finish", () => console.log("finish"));
    });
}
