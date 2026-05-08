"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Individual Cube Component with Premium Textures
const SmallCube = ({ position, color }: { position: [number, number, number], color: string }) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  // Mastermind Logic: Rotate each small cube slightly for a cinematic feel
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = Math.sin(t / 2) * 0.1;
    meshRef.current.rotation.y = Math.cos(t / 2) * 0.1;
  });

  return (
    <mesh position={position} ref={meshRef} castShadow>
      <boxGeometry args={[0.95, 0.95, 0.95]} />
      {/* High-Level Metallic Finish with Neon Violet Glow */}
      <meshStandardMaterial 
        color={color}
        metalness={0.9}
        roughness={0.1}
        emissive={new THREE.Color("#8B5CF6")}
        emissiveIntensity={0.2}
      />
    </mesh>
  );
};

// Main RubicQube Component
const RubicQube = () => {
  // Creating a 3x3x3 Master Structure
  const cubes = useMemo(() => {
    const temp = [];
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        for (let z = -1; z <= 1; z++) {
          // Logic: Apply colors based on position for a premium look
          const color = (x + y + z) % 2 === 0 ? "#1A1A1A" : "#8B5CF6";
          temp.push({ position: [x, y, z] as [number, number, number], color });
        }
      }
    }
    return temp;
  }, []);

  const groupRef = useRef<THREE.Group>(null!);

  // Cinematic Auto-Rotation (Antigravity Feel)
  useFrame((state) => {
    groupRef.current.rotation.y += 0.005;
    groupRef.current.rotation.z += 0.005;
  });

  return (
    <group ref={groupRef}>
      {cubes.map((cube, i) => (
        <SmallCube key={i} position={cube.position} color={cube.color} />
      ))}
    </group>
  );
};

// Final Export with Global Lighting & Perspective
export default function RubicQubeCanvas() {
  return (
    <div className="w-full h-screen bg-transparent">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[5, 5, 5]} fov={50} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        
        {/* Cinematic Lighting Engine */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#A78BFA" castShadow />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#8B5CF6" />

        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
          <RubicQube />
        </Float>
      </Canvas>
    </div>
  );
}
