import { type ComponentType, useEffect, useState } from "react";
import { links } from "../../data";

function Post({ permalink }: { permalink: string }) {
  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={permalink}
      data-instgrm-version="14"
      style={{
        width: 324 * 2,
      }}
    ></blockquote>
  );
}

function View() {
  return (
    <div>
      {links.map((permalink, index) => (
        <Post key={index} permalink={permalink} />
      ))}
      <script async src="//www.instagram.com/embed.js"></script>
    </div>
  );
}

export default function App() {
  const [Component, setComponent] = useState<ComponentType>(() => () => null);

  useEffect(() => {
    setComponent(() => View);
  }, []);

  return (
    <div>
      <h1>insta</h1>
      <Component />
    </div>
  );
}
