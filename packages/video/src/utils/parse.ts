export default (s: string) =>
  s
    .split("\n")
    .map((l) => l.trim().match(/^((\d+):)?(\d+):(\d+)\s(.*)$/))
    .map((s) =>
      s
        ? {
            time: (Number(s[2] || 0) * 60 + Number(s[3])) * 60 + Number(s[4]),
            text: s[5],
          }
        : null,
    )
    .filter((item) => item !== null);
