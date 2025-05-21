import React, { type ComponentType, lazy, useEffect, useState } from "react";

export default function Print() {
  const [Viewer, setViewer] = useState<ComponentType>(() => () => null);

  useEffect(() => {
    setViewer(() => lazy(() => import("./Viewer")));
  }, []);

  return (
    <div style={{ border: "1px solid blue", height: 200 }}>
      <Viewer />
    </div>
  );
}
