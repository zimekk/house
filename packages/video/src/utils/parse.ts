export default (s: string) =>
  s
    .split("\n")
    .map((l) => l.trim().match(/^(\d+):(\d+)\s(.*)$/))
    .map((s) =>
      s
        ? {
            time: Number(s[1]) * 60 + Number(s[2]),
            text: s[3],
          }
        : null,
    )
    .filter((item) => item !== null);
