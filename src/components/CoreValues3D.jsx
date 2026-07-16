import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Torus, Html } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import './CoreValues3D.css';

// Orbital ring component
function OrbitalRing({ radius, color, rotationSpeed }) {
  const ringRef = useRef();
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.z += rotationSpeed;
    }
  });

  return (
    <Torus
      ref={ringRef}
      args={[radius, 0.02, 16, 100]}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.4}
        transparent
        opacity={0.6}
        metalness={0.8}
        roughness={0.2}
      />
    </Torus>
  );
}

// Floating value sphere on orbit - planet with surface details
function ValueOrb({ angle, radius, size, color, label, delay, orbitSpeed, isActive }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [position, setPosition] = useState([0, 0, 0]);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime * orbitSpeed + delay;
      const x = Math.cos(time + angle) * radius;
      const z = Math.sin(time + angle) * radius;
      
      // Enhanced floating animation with bounce
      const floatY = Math.sin(state.clock.elapsedTime * 0.8 + delay) * 0.4;
      const bounceY = Math.abs(Math.sin(state.clock.elapsedTime * 2 + delay)) * 0.2;
      const y = floatY + bounceY;
      
      meshRef.current.position.set(x, y, z);
      setPosition([x, y, z]);
      
      // Pop out animation when active
      if (isActive || hovered) {
        const popScale = 1 + Math.sin(state.clock.elapsedTime * 3) * 0.15 + 0.3;
        meshRef.current.scale.setScalar(popScale);
      } else {
        // Smooth scale back to normal
        const currentScale = meshRef.current.scale.x;
        meshRef.current.scale.setScalar(currentScale * 0.95 + 1 * 0.05);
      }
      
      // Slow rotation like real planets
      meshRef.current.rotation.y += 0.01;
    }
  });

  const showLabel = isActive || hovered;
  
  // Darken the base color for contrast
  const baseColor = new THREE.Color(color).multiplyScalar(0.7);
  const highlightColor = new THREE.Color(color).multiplyScalar(1.2);

  return (
    <group>
      {/* Base planet sphere */}
      <Sphere
        ref={meshRef}
        args={[size, 64, 64]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={baseColor}
          emissive={color}
          emissiveIntensity={showLabel ? 0.6 : 0.3}
          metalness={0.2}
          roughness={0.8}
        />
      </Sphere>
      
      {/* Surface detail layer 1 - continents/patterns */}
      <Sphere args={[size * 1.01, 32, 32]}>
        <meshStandardMaterial
          color={highlightColor}
          emissive={color}
          emissiveIntensity={0.4}
          transparent
          opacity={0.6}
          metalness={0.1}
          roughness={0.9}
          wireframe={false}
        />
      </Sphere>
      
      {/* Latitude/longitude lines */}
      <Sphere args={[size * 1.02, 16, 16]}>
        <meshBasicMaterial
          color={color}
          wireframe={true}
          transparent
          opacity={showLabel ? 0.4 : 0.2}
        />
      </Sphere>
      
      {/* Atmospheric glow layer */}
      <Sphere args={[size * 1.15, 32, 32]}>
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={showLabel ? 1.0 : 0.5}
          transparent
          opacity={showLabel ? 0.3 : 0.15}
          side={THREE.BackSide}
        />
      </Sphere>
      
      {/* Outer glow when active */}
      {showLabel && (
        <Sphere args={[size * 1.3, 32, 32]}>
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={1.5}
            transparent
            opacity={0.2}
            side={THREE.BackSide}
          />
        </Sphere>
      )}
      
      {showLabel && (
        <Html position={position} center distanceFactor={8}>
          <div className="planet-label">
            {label}
          </div>
        </Html>
      )}
    </group>
  );
}

// Central core sphere
function CentralCore({ label }) {
  const coreRef = useRef();
  
  useFrame((state) => {
    if (coreRef.current) {
      const pulse = Math.sin(state.clock.elapsedTime * 1.5) * 0.1 + 1;
      coreRef.current.scale.setScalar(pulse);
      coreRef.current.rotation.y += 0.005;
    }
  });

  return (
    <group ref={coreRef}>
      {/* Main core sphere */}
      <Sphere args={[1.2, 64, 64]}>
        <meshStandardMaterial
          color="#4CAF50"
          emissive="#4CAF50"
          emissiveIntensity={0.8}
          metalness={0.9}
          roughness={0.1}
        />
      </Sphere>
      
      {/* Inner glow layers */}
      <Sphere args={[1.1, 32, 32]}>
        <meshStandardMaterial
          color="#66BB6A"
          emissive="#66BB6A"
          emissiveIntensity={0.6}
          transparent
          opacity={0.4}
        />
      </Sphere>

      <Sphere args={[1.0, 32, 32]}>
        <meshStandardMaterial
          color="#81C784"
          emissive="#81C784"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </Sphere>
    </group>
  );
}

// Core Values Scene with orbital design
function CoreValuesScene({ clusterData }) {
  const [activeIndex, setActiveIndex] = useState(0);

  // Cycle through values to highlight them
  useFrame((state) => {
    const cycleTime = 2.5; // seconds per value
    const totalValues = clusterData.values.length;
    const currentIndex = Math.floor((state.clock.elapsedTime / cycleTime) % totalValues);
    setActiveIndex(currentIndex);
  });

  return (
    <>
      {/* Enhanced lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#cba641" />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#4CAF50" />
      <pointLight position={[0, 10, 0]} intensity={1.5} color="#f2e6b1" />
      <spotLight position={[0, 15, 0]} angle={0.3} penumbra={1} intensity={2} color="#cba641" />

      {/* Central core */}
      <CentralCore label={clusterData.center.label} />

      {/* Orbital rings */}
      <OrbitalRing radius={3} color="#cba641" rotationSpeed={0.002} />
      <OrbitalRing radius={4.5} color="#66BB6A" rotationSpeed={-0.0015} />
      <OrbitalRing radius={6} color="#f2e6b1" rotationSpeed={0.001} />

      {/* Orbiting value spheres */}
      {clusterData.values.map((value, index) => {
        const totalValues = clusterData.values.length;
        const angle = (index / totalValues) * Math.PI * 2;
        const orbitRadius = 3 + (index % 3) * 1.5; // Distribute across 3 orbits
        
        return (
          <ValueOrb
            key={index}
            angle={angle}
            radius={orbitRadius}
            size={0.3}
            color={value.color}
            label={value.label}
            delay={index * 0.5}
            orbitSpeed={0.3}
            isActive={index === activeIndex}
          />
        );
      })}

      {/* Orbit controls */}
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={8}
        maxDistance={20}
        autoRotate={true}
        autoRotateSpeed={0.5}
        enableDamping={true}
        dampingFactor={0.05}
      />
    </>
  );
}

// Main Core Values Component
function CoreValues3D() {
  // Define the three clusters with theme-matching colors (greens, golds, earth tones)
  const clusters = [
    {
      title: 'We Invite',
      center: { label: 'We Invite' },
      description: 'We create spaces where students embrace challenges, take meaningful risks, and develop the confidence to make their own decisions.',
      values: [
        { label: 'Challenges', color: '#D4AF37' }, // Rich Gold
        { label: 'Growth', color: '#2E7D32' }, // Forest Green
        { label: 'Success', color: '#FFC107' }, // Bright Amber
        { label: 'Decision Making', color: '#558B2F' }, // Olive Green
        { label: 'Individuality', color: '#FFB300' }, // Deep Amber
        { label: 'Risks', color: '#689F38' }, // Light Green
      ]
    },
    {
      title: 'We Give Time for',
      center: { label: 'We Give Time for' },
      description: 'Learning requires patience. We provide time for deep thinking and meaningful reflection, that comes from learning through mistakes.',
      values: [
        { label: 'Reflection', color: '#C9A961' }, // Pale Gold
        { label: 'Talk', color: '#4CAF50' }, // Medium Green
        { label: 'Understanding', color: '#F9A825' }, // Golden Yellow
        { label: 'Mistakes', color: '#7CB342' }, // Yellow Green
        { label: 'Resilience', color: '#D4AF37' }, // Rich Gold
        { label: 'Thinking', color: '#388E3C' }, // Dark Green
        { label: 'Feedback', color: '#FFD54F' }, // Light Gold
      ]
    },
    {
      title: 'We Lead with',
      center: { label: 'We Lead with' },
      description: 'Our leadership is rooted in trust, compassion, and respect. We model the values we hope to see in our students.',
      values: [
        { label: 'Trust', color: '#66BB6A' }, // Soft Green
        { label: 'Compassion', color: '#E6C068' }, // Warm Gold
        { label: 'Kindness', color: '#8BC34A' }, // Lime Green
        { label: 'Respect', color: '#CBA641' }, // Brand Gold
        { label: 'Future Mindsets', color: '#43A047' }, // Vibrant Green
        { label: 'Communication', color: '#FFB74D' }, // Peach Gold
        { label: 'Values', color: '#81C784' }, // Mint Green
      ]
    }
  ];

  return (
    <section className="core-values-section">
      <div className="core-values-container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="core-values-header"
        >
          <h2 className="core-values-title">Our Core Values</h2>
          <p className="core-values-subtitle">
            The principles that guide everything we do at Edenbridge Grammar
          </p>
        </motion.div>

        <div className="core-values-grid">
          {clusters.map((cluster, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="value-cluster-card"
            >
              <div className="cluster-content">
                <h3 className="cluster-title">{cluster.title}</h3>
                <p className="cluster-description">{cluster.description}</p>
                
                <div className="canvas-wrapper">
                  <Canvas 
                    camera={{ position: [0, 3, 12], fov: 45 }}
                    gl={{ alpha: true, antialias: true }}
                  >
                    <CoreValuesScene clusterData={cluster} />
                  </Canvas>
                </div>
                
                <div className="values-list">
                  {cluster.values.map((value, idx) => (
                    <span key={idx} className="value-tag">
                      {value.label}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoreValues3D;
