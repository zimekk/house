import * as THREE from "three";
import { OrbitControls } from "three-stdlib";
import { type ComponentPropsWithoutRef, useState } from "react";
import { type Camera, useThree } from "@react-three/fiber";

export function Target({
  zoom,
  position,
  cameraPosition,
  ...props
}: ComponentPropsWithoutRef<"mesh"> & {
  cameraPosition?: { x: number; y: number; z: number };
  zoom?: number;
}) {
  const [hovered, hover] = useState(false);
  const { camera, controls } = useThree<{
    camera: Camera;
    controls: OrbitControls;
  }>();

  return (
    <mesh
      geometry={new THREE.BoxGeometry(0.1, 0.1, 0.1)}
      position={position}
      {...props}
      onClick={(event) => {
        // console.log(camera);
        // console.log(controls);
        // camera.lookAt(1, 1, 1);
        if (controls) {
          // console.log({
          //   polarAngle: controls.getPolarAngle(),
          //   azimuthalAngle: controls.getAzimuthalAngle(),
          //   distance: controls.getDistance(),
          //   target: controls.target,
          //   cameraPosition: camera.position,
          // });
          // https://github.com/mrdoob/three.js/blob/master/examples/jsm/controls/OrbitControls.js#L600
          console.log({
            position: (({ x, y, z }) => [x, y, z])({ ...controls.target }),
            cameraPosition: { ...camera.position },
            zoom: camera.zoom,
          });

          if (position) {
            const [x, y, z] = position as [number, number, number];
            controls.target.copy({ x, y, z });
          }
          if (cameraPosition) {
            camera.position.copy(cameraPosition);
          }
          if (zoom) {
            camera.zoom = zoom;
            camera.updateProjectionMatrix();
          }
        }
      }}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <meshStandardMaterial color={hovered ? "orange" : "blue"} />
    </mesh>
  );
}
