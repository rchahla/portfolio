import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Room } from "./Room";
import { useMediaQuery } from "react-responsive";
import About from "../About";
import AboutLights from "./AboutLights";
import Particles from "./Particles";

const AboutExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 425px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 768px)" });
  const isLaptop = useMediaQuery({ query: "(max-width: 1024px)" });
  // Covers the 1025–1439px gap that the other breakpoints miss
  const isDesktop = useMediaQuery({ query: "(min-width: 1025px)" });
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1440px)" });

  return (
    // Closer camera (13 vs 15) + tighter FOV (45 vs 50) → model appears ~30% larger
    <Canvas camera={{ position: [0, 4, 13], fov: 45 }}>
      {/*
        target=[0, 1.5, 0] — orients the camera toward the room's visual midpoint
        (floor at Y=0, ceiling ~Y=3 → center ≈ Y=1.5).
        Previously the target defaulted to Y=0 (floor level), which rendered the
        room in the upper half of the canvas with empty space below.
      */}
      <OrbitControls
        target={[0, 1.5, 0]}
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 5.3}
        maxPolarAngle={Math.PI / 2.6}
      />

      {/* Room Model */}
      <directionalLight position={[0, 10, 0]} intensity={0.8} />
      <ambientLight intensity={0.7} />
      <AboutLights />
      <Particles count={100} />

      <group
        scale={
          isMobile
            ? 1.05
            : isTablet
              ? 1.0
              : isLaptop
                ? 0.95
                : isLargeScreen
                  ? 1.1
                  : isDesktop
                    ? 0.92
                    : 0.92
        }
        position={
          // Y = target (1.5) - scale × model-space-center (3.89)
          // Canvas at 1440px+ starts at top-[90px] (below header), so no header offset needed
          isMobile
            ? [0, -2.6, 0]
            : isTablet
              ? [0, -2.4, 0]
              : isLaptop
                ? [-0.3, -2.2, 0]
                : isLargeScreen
                  ? [-2, -2.8, 0]
                  : isDesktop
                    ? [-0.5, -2.1, 0]
                    : [-0.5, -2.1, 0]
        }
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Room />
      </group>
    </Canvas>
  );
};

export default AboutExperience;
