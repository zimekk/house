const styles = {
  fill: {
    fill: "lightgray",
    stroke: "black",
    strokeWidth: 0.01,
  },
};

export default function Layout({ d }: { d: string }) {
  return (
    <g transform={`scale(${50}) translate(${[2, 3].join(" ")})`}>
      <path d={d} style={styles.fill} />
    </g>
  );
}
