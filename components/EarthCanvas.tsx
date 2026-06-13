import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "./Loader";

type Props = {};

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={1.5} position-y={0} rotation-y={0} />
  );
};

function EarthCanvas({}: Props) {
  return (
    <Canvas
      frameloop="demand"
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{ fov: 25, near: 0.1, far: 200, position: [5, 3, 5] }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
}

export default EarthCanvas;
