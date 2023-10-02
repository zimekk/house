import React, { useMemo, useRef, useState } from "react";
import { DoubleSide, type Group, type Mesh, Shape } from "three";
import * as THREE from "three";
import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import House from "../House";

// https://codesandbox.io/s/rrppl0y8l4
function Box(props: any) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<Mesh>();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => (ref.current.rotation.x += delta));
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color={hovered ? "hotpink" : "orange"} />
      {/* <meshStandardMaterial color={hovered ? "hotpink" : "orange"} /> */}
    </mesh>
  );
}

// https://codesandbox.io/s/r3f-clipping-example-8feekk
// function Planes() {
//   const mesh = useRef<Mesh>();

//   useFrame((_, delta) => {
//     mesh.current.rotation.x += delta * 0.5;
//     mesh.current.rotation.y += delta * 0.2;
//     mesh.current.scale.setScalar(Math.cos(delta) * 0.125 + 0.875);
//   });

//   return (
//     <mesh ref={mesh} castShadow>
//       <torusKnotGeometry args={[0.4, 0.08, 95, 20]} />
//       <meshPhongMaterial color={0x80ee10} shininess={100} side={DoubleSide}>
//         <plane attach="clippingPlanes-0" normal={[0, 1, 0]} constant={0} />
//       </meshPhongMaterial>
//     </mesh>
//   );
// }

// https://codesandbox.io/s/basic-demo-forked-zcv5dr
// function Extrusion({ start = [0, 0], paths, ...props }) {
//   const shape = useMemo(() => {
//     const shape = new Shape();
//     shape.moveTo(...start);
//     paths.forEach((path) => shape.bezierCurveTo(...path));
//     return shape;
//   }, [start, paths]);
//   return (
//     <mesh scale={0.1}>
//       <extrudeGeometry args={[shape, props]} />
//       <meshPhysicalMaterial
//         color="red"
//         clearcoat={1}
//         clearcoatRoughness={0.2}
//       />
//     </mesh>
//   );
// }

// https://codesandbox.io/s/jflps
// function Triangle({ color, ...props }) {
//   const ref = useRef<Group>()
//   const [r] = useState(() => Math.random() * 10000)
//   useFrame((_) => (ref.current.position.y = -1.75 + Math.sin(_.clock.elapsedTime + r) / 10))
//   const { paths: [path] } = useLoader(SVGLoader, '/triangle.svg') // prettier-ignore
//   const geom = useMemo(() => SVGLoader.pointsToStroke(path.subPaths[0].getPoints(), path.userData.style), [])
//   return (
//     <group ref={ref}>
//       <mesh geometry={geom} {...props}>
//         <meshBasicMaterial color={color} toneMapped={false} />
//       </mesh>
//     </group>
//   )
// }

// function Rig({ children }) {
//   const ref = useRef<Group>()
//   const vec = new THREE.Vector3()
//   const { camera, mouse } = useThree()
//   useFrame(() => {
//     camera.position.lerp(vec.set(mouse.x * 2, 0, 3.5), 0.05)
//     ref.current.position.lerp(vec.set(mouse.x * 1, mouse.y * 0.1, 0), 0.1)
//     ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (-mouse.x * Math.PI) / 20, 0.1)
//   })
//   return <group ref={ref}>{children}</group>
// }

// function Ground(props) {
//   const [floor, normal] = useTexture(['/SurfaceImperfections003_1K_var1.jpg', '/SurfaceImperfections003_1K_Normal.jpg'])
//   return (
//     <Reflector resolution={1024} args={[8, 8]} {...props}>
//       {(Material, props) => <Material color="#f0f0f0" metalness={0} roughnessMap={floor} normalMap={normal} normalScale={[2, 2]} {...props} />}
//     </Reflector>
//   )
// }

// https://discourse.threejs.org/t/does-anyone-know-a-good-way-or-examples-of-3d-model-clipping-function-on-react-three-fiber-in-next-js-app/28933/2
// function ClippingPlane() {
//   const { gl } = useThree();
//   let plane = new THREE.Plane(new THREE.Vector3(0, -1, 0), 0.8);
//   gl.clippingPlanes = [plane];
//   gl.localClippingEnabled = true;
//   return <></>;
// }

export default function App() {
  return (
    <Canvas>
      {/* <ClippingPlane /> */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Box position={[-1.2, -1.5, 0]} />
      <Box position={[1.2, -1.5, 0]} />
      <House position={[-2, -2, 2]} />
      {/* <Planes /> */}
      {/* <Rig>
          <Triangle color="#ff2060" scale={0.009} rotation={[0, 0, Math.PI / 3]} />
          <Triangle color="cyan" scale={0.009} position={[2, 0, -2]} rotation={[0, 0, Math.PI / 3]} />
          <Triangle color="orange" scale={0.009} position={[-2, 0, -2]} rotation={[0, 0, Math.PI / 3]} />
          <Triangle color="white" scale={0.009} position={[0, 2, -10]} rotation={[0, 0, Math.PI / 3]} />
          <Ground mirror={1} blur={[500, 100]} mixBlur={12} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]} position-y={-0.8} />
        </Rig> */}
      {/* <Extrusion
            steps={10}
            bevelSegments={10}
            start={[-2, 2]}
            paths={[
              [2, 2.5, 2.0, 0, 0, -1],
              [4.0, 0, 3.0, 3.5, 5.0, 3.5],
              [3.0, 5.5, 1.0, 1.7, 1.5, 6.5]
            ]}
          /> */}
      <gridHelper
        args={[20, 20, "#4D089A", "#4D089A"]}
        position={[0, -2, 0]}
        rotation={[0, 0, 0]}
      />
      <OrbitControls makeDefault dampingFactor={0.3} />
      {/* <OrbitControls /> */}
      {/* <OrbitControls autoRotate autoRotateSpeed={1} /> */}
    </Canvas>
  );
}
