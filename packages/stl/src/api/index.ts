// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = unknown;

export default function handler(
  _req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  return res.json({});
}
