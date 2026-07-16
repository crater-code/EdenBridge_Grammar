import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Individual Neuron component with hover effect
function Neuron({ position, size, color, emissiveColor, index }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const baseScale = useRef(1);
  
  useFrame((state) => {
    if (meshRef.current) {
      if (hovered) {
        // When hovered, smoothly transition to fixed larger scale
        const targetScale = 1.5;
        const currentScale = meshRef.current.scale.x;
        const newScale = currentScale + (targetScale - currentScale) * 0.1;
        meshRef.current.scale.setScalar(newScale);
      } else {
        // Normal pulsing animation when not hovered
        const pulse = Math.sin(state.clock.elapsedTime * 2 + index * 0.5) * 0.15 + 1;
        baseScale.current = pulse;
        meshRef.current.scale.setScalar(pulse);
      }
    }
  });

  return (
    <Sphere 
      ref={meshRef}
      args={[size, 16, 16]} 
      position={position}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <meshStandardMaterial
        color={hovered ? "#ffffff" : color}
        emissive={hovered ? "#ffffff" : emissiveColor}
        emissiveIntensity={hovered ? 2.5 : 0.9}
      />
    </Sphere>
  );
}

// Enhanced AI Brain with detailed neural network
function AIBrain({ position, scrollProgress }) {
  const groupRef = useRef();
  const [modelHovered, setModelHovered] = useState(false);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
      
      const scrollValue = scrollProgress?.get() || 0;
      groupRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.3 - scrollValue * 2;
      
      // Pulsing effect
      const pulse = Math.sin(state.clock.elapsedTime * 1.5) * 0.08 + 1;
      groupRef.current.scale.setScalar(pulse);
    }
  });

  // Create neuron positions in a brain-like structure
  const neurons = [];
  const layers = 4;
  const neuronsPerLayer = 12;
  
  for (let layer = 0; layer < layers; layer++) {
    for (let i = 0; i < neuronsPerLayer; i++) {
      const angle = (i / neuronsPerLayer) * Math.PI * 2;
      const radius = 1.5 + layer * 0.3;
      const height = (layer - layers / 2) * 0.5;
      
      neurons.push({
        position: [
          Math.cos(angle) * radius,
          height + Math.sin(angle * 2) * 0.3,
          Math.sin(angle) * radius
        ],
        size: 0.12 + Math.random() * 0.08,
        colorIndex: i % 3
      });
    }
  }

  const getColor = (index) => {
    if (index === 0) return { color: "#f2e6b1", emissive: "#f2e6b1" };
    if (index === 1) return { color: "#cba641", emissive: "#cba641" };
    return { color: "#233e2b", emissive: "#233e2b" };
  };

  return (
    <group 
      ref={groupRef} 
      position={position}
      onPointerOver={() => setModelHovered(true)}
      onPointerOut={() => setModelHovered(false)}
    >
      {/* Central brain core with distortion - NUCLEUS that glows golden on hover */}
      <Sphere args={[1.2, 64, 64]}>
        <MeshDistortMaterial
          color="#cba641"
          roughness={0.2}
          metalness={0.8}
          emissive="#cba641"
          emissiveIntensity={modelHovered ? 2.5 : 0.6}
          distort={0.3}
          speed={2}
        />
      </Sphere>
      
      {/* Inner glow sphere - also glows more golden */}
      <Sphere args={[1.1, 32, 32]}>
        <meshStandardMaterial
          color="#f2e6b1"
          emissive="#f2e6b1"
          emissiveIntensity={modelHovered ? 1.5 : 0.4}
          transparent
          opacity={modelHovered ? 0.5 : 0.3}
        />
      </Sphere>
      
      {/* Neural nodes/neurons with hover effect */}
      {neurons.map((neuron, i) => {
        const colors = getColor(neuron.colorIndex);
        return (
          <Neuron
            key={i}
            position={neuron.position}
            size={neuron.size}
            color={colors.color}
            emissiveColor={colors.emissive}
            index={i}
          />
        );
      })}
      
      {/* Neural connections (synapses) */}
      {neurons.slice(0, 20).map((start, i) => {
        const end = neurons[(i + 5) % neurons.length];
        const points = [
          new THREE.Vector3(...start.position),
          new THREE.Vector3(...end.position)
        ];
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        
        return (
          <line key={`connection-${i}`} geometry={geometry}>
            <lineBasicMaterial 
              color="#cba641" 
              opacity={0.4} 
              transparent 
              linewidth={2}
            />
          </line>
        );
      })}
      
      {/* Outer energy field */}
      <Sphere args={[2.2, 32, 32]}>
        <meshStandardMaterial
          color="#233e2b"
          emissive="#233e2b"
          emissiveIntensity={0.3}
          transparent
          opacity={0.15}
          wireframe
        />
      </Sphere>
    </group>
  );
}

function Scene3D({ mousePosition, scrollProgress }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 45 }}
      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#cba641" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#233e2b" />
      <pointLight position={[0, -10, 5]} intensity={1} color="#f2e6b1" />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1.5} color="#cba641" />
      <spotLight position={[5, 0, 5]} angle={0.4} penumbra={1} intensity={1} color="#f2e6b1" />
      
      {/* Single enhanced AI Brain */}
      <AIBrain position={[0, 0, 0]} scrollProgress={scrollProgress} />
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.2}
        maxPolarAngle={Math.PI / 1.5}
        minPolarAngle={Math.PI / 3}
      />
    </Canvas>
  );
}

export default Scene3D;
