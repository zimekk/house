export const images = [
  ...(await import("./ariostea")).default,
  ...(await import("./catalano")).default,
  ...(await import("./hansgrohe")).default,
  ...(await import("./imolaceramica")).default,
  ...(await import("./marazzi")).default,
  ...(await import("./rakceramics")).default,
].reduce(
  (
    result,
    {
      src,
      url,
      gallery = [],
    }: { src: string; url: string; gallery?: string[] },
  ) => result.concat({ src, url }).concat(gallery.map((src) => ({ src, url }))),
  [] as { src: string; url: string }[],
);
// :src.split('&').shift() as string
