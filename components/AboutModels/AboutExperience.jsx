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

  return (
    <Canvas camera={{ position: [0, 4, 15], fov: 50 }}>
      <OrbitControls
        enableZoom={!isTablet} // Disable zoom on mobile
        enablePan={false}
        maxDistance={20}
        minDistance={12}
        minPolarAngle={Math.PI / 5.3}
        maxPolarAngle={Math.PI / 2.6}
      />

      {/* Room Model */}
      <directionalLight position={[0, 10, 0]} intensity={0.8} />
      <ambientLight intensity={0.7} />
      <AboutLights />
      <Particles count={100} />

      <group
        scale={isMobile ? 0.6 : isTablet ? 0.6 : isLaptop ? 0.7 : 0.8}
        position={
          isMobile
            ? [0, 3, 0]
            : isTablet
              ? [0, 2.5, 0]
              : isLaptop
                ? [-1, 3, 0]
                : [-2, 0, -1]
        }
        rotation={[0, -Math.PI / 4, 0]}
      >
        <Room />
      </group>
    </Canvas>
  );
};

export default AboutExperience;
