import { memo } from "react";
import {
  AccumulativeShadows,
  RandomizedLight,
  Environment as EnvironmentImpl,
  GizmoHelper,
  GizmoViewport,
} from "@react-three/drei";

export const Environment = memo(
  ({ direction = [5, 5, 5] }: { direction?: [number, number, number] }) => (
    <>
      <color attach="background" args={["skyblue"]} />
      <directionalLight
        position={direction}
        intensity={0.5}
        shadow-mapSize={1024}
        castShadow
      />
      <directionalLight
        position={[-5, 5, 5]}
        intensity={0.1}
        shadow-mapSize={128}
        castShadow
      />
      <directionalLight
        position={[-5, 5, -5]}
        intensity={0.1}
        shadow-mapSize={128}
        castShadow
      />
      <directionalLight
        position={[0, 5, 0]}
        intensity={0.1}
        shadow-mapSize={128}
        castShadow
      />
      <gridHelper
        args={[30, 30, "#4D089A", "#4D089A"]}
        position={[0, -1.5, 0]}
        rotation={[0, 0, 0]}
      />
      <AccumulativeShadows
        frames={100}
        alphaTest={0.85}
        opacity={0.75}
        scale={30}
        position={[0, -1.5, 0]}
      >
        <RandomizedLight
          amount={8}
          radius={2.5}
          ambient={0.5}
          intensity={1}
          position={direction}
          bias={0.001}
        />
      </AccumulativeShadows>
      <EnvironmentImpl preset="city" />
      <GizmoHelper>
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="black"
        />
        {/* alternative: <GizmoViewcube /> */}
      </GizmoHelper>
    </>
  ),
);
