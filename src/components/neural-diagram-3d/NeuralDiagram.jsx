import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Html } from '@react-three/drei';
import * as THREE from 'three';
import './NeuralDiagram.css';

// Individual neural node component
function NeuralNode({ position, size, color, delay, label, showLabel }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation matching the original
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.2;
    }
  });

  const isHighlighted = showLabel || hovered;

  return (
    <group>
      <Sphere 
        ref={meshRef} 
        args={[size, 32, 32]} 
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={isHighlighted ? '#f2e6b1' : color}
          emissive={isHighlighted ? '#f2e6b1' : color}
          emissiveIntensity={isHighlighted ? 1.2 : 0.6}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>
      
      {showLabel && (
        <Html position={position} center>
          <div className={`neuron-label neuron-label-animated ${color === '#cba641' ? 'neuron-label-white' : ''}`}>
            {label}
          </div>
        </Html>
      )}
      
      {hovered && !showLabel && (
        <Html position={position} center>
          <div className={`neuron-label ${color === '#cba641' ? 'neuron-label-white' : ''}`}>
            {label}
          </div>
        </Html>
      )}
    </group>
  );
}

// Connection lines between nodes
function ConnectionLine({ start, end }) {
  const points = [new THREE.Vector3(...start), new THREE.Vector3(...end)];
  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial color="#cba641" opacity={0.4} transparent linewidth={2} />
    </line>
  );
}

// Main brain/center sphere - matching original green design
function CenterBrain() {
  const brainRef = useRef();
  
  useFrame((state) => {
    if (brainRef.current) {
      // Gentle pulsing animation
      const pulse = Math.sin(state.clock.elapsedTime * 1.5) * 0.08 + 1;
      brainRef.current.scale.setScalar(pulse);
    }
  });

  return (
    <group ref={brainRef}>
      {/* Main green brain sphere - matching original */}
      <Sphere args={[1.8, 64, 64]}>
        <meshStandardMaterial
          color="#4CAF50"
          emissive="#4CAF50"
          emissiveIntensity={0.7}
          metalness={0.8}
          roughness={0.2}
        />
      </Sphere>
      
      {/* Inner glow layers - matching original design */}
      <Sphere args={[1.6, 32, 32]}>
        <meshStandardMaterial
          color="#66BB6A"
          emissive="#66BB6A"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </Sphere>

      <Sphere args={[1.4, 32, 32]}>
        <meshStandardMaterial
          color="#81C784"
          emissive="#81C784"
          emissiveIntensity={0.4}
          transparent
          opacity={0.2}
        />
      </Sphere>
    </group>
  );
}

// 3D Neural Network Scene
function NeuralScene() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Cycle through nodes in clockwise order
  useFrame((state) => {
    const cycleTime = 2; // seconds per node
    const totalNodes = 12;
    const currentIndex = Math.floor((state.clock.elapsedTime / cycleTime) % totalNodes);
    setActiveIndex(currentIndex);
  });

  // Define node positions in 3D space with labels - ordered clockwise
  const nodes = [
    // Starting from top, going clockwise
    { position: [0, 3, 0], size: 0.4, color: '#f2e6b1', delay: 0.5, label: 'Leadership' },
    { position: [3, 2, -0.5], size: 0.35, color: '#cba641', delay: 1, label: 'Autonomy' },
    { position: [4, 0.5, 0.5], size: 0.4, color: '#f2e6b1', delay: 1.5, label: 'Innovation' },
    { position: [3.5, -2.5, 0.5], size: 0.5, color: '#f2e6b1', delay: 2, label: 'Mastery' },
    { position: [1, -3, -0.5], size: 0.35, color: '#cba641', delay: 2.5, label: 'Enterprise' },
    { position: [-1, -3.2, 0], size: 0.4, color: '#f2e6b1', delay: 3, label: 'Sustainability' },
    { position: [-3.5, -2, 0.5], size: 0.5, color: '#cba641', delay: 3.5, label: 'Artificial Intelligence' },
    { position: [-2, -1.5, -1], size: 0.4, color: '#f2e6b1', delay: 1.8, label: 'Ethical Grounding' },
    { position: [-4, 0, -0.5], size: 0.35, color: '#cba641', delay: 4, label: 'Systems Thinking' },
    { position: [-2.5, 0.8, 1], size: 0.4, color: '#f2e6b1', delay: 0.8, label: 'Mentorship' },
    { position: [-3.5, 2.5, 0.5], size: 0.5, color: '#cba641', delay: 0, label: 'Applied Learning' },
    { position: [2.5, -0.5, -1], size:0.35, color: '#cba641', delay: 1.3, label: 'Purpose' },
  ];

  return (
    <>
      {/* Lighting - adjusted to match original look */}
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#cba641" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#4CAF50" />
      <pointLight position={[0, 0, 10]} intensity={1} color="#f2e6b1" />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1.5} color="#cba641" />

      {/* Center brain - green sphere matching original */}
      <CenterBrain />

      {/* Neural nodes - gold/beige matching original */}
      {nodes.map((node, index) => (
        <NeuralNode
          key={index}
          position={node.position}
          size={node.size}
          color={node.color}
          delay={node.delay}
          label={node.label}
          showLabel={index === activeIndex}
        />
      ))}

      {/* Connection lines from center to nodes */}
      {nodes.map((node, index) => (
        <ConnectionLine key={`line-${index}`} start={[0, 0, 0]} end={node.position} />
      ))}

      {/* Orbit controls for interaction */}
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={6}
        maxDistance={15}
        autoRotate={false}
        enableDamping={true}
        dampingFactor={0.05}
      />
    </>
  );
}

function NeuralDiagram() {
  return (
    <div className="neural-diagram-wrapper-3d">
      <div className="neural-canvas-container">
        <Canvas 
          camera={{ position: [0, 0, 10], fov: 50 }}
          gl={{ alpha: true, antialias: true }}
        >
          <NeuralScene />
        </Canvas>
      </div>
    </div>
  );
}

export default NeuralDiagram;
