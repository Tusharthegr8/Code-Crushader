import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

const TempleModel = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);

  return (
    <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <OrbitControls enableZoom={true} />
      <primitive object={scene} scale={1.5} />
    </Canvas>
  );
};

export default TempleModel;
