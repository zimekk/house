import { config } from "dotenv";
import express, { Router } from "express";
import { createServer } from "http";
import { AddressInfo } from "net";
import { dirname, resolve } from "path";

export const router = Router().use("/api", (_req, res) =>
  res.json({ hello: "Hello" })
);

export const server = () => {
  const env = config({ path: resolve(__dirname, "../../../.env") });
  const { PORT: port } = env.parsed;

  const server = createServer(
    express()
      .use(router)
      .use(
        express.static(
          resolve(dirname(require.resolve("@dev/web/package")), "public")
        )
      )
  );
  server.listen({ port }, () => {
    const { port } = server.address() as AddressInfo;
    console.log(`Listening on port: ${port}`);
  });
};

// https://stackoverflow.com/questions/6398196/detect-if-called-through-require-or-directly-by-command-line
if (process.mainModule.filename === __filename) {
  server();
}
