import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function AIModelsVisualization() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const controlsRef = useRef(null);
  const nodeGroupRef = useRef(null);
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);
  const [expandedNode, setExpandedNode] = useState(null);
  const targetRotationRef = useRef(0);
  const isRotatingToTargetRef = useRef(false);
  
  // Define models data at component level
  const modelsData = [
    { 
      name: 'Academic Excellence', 
      color: 0x4CAF50, 
      position: [4, 2, 0],
      description: 'Rigorous academic programs designed for mastery',
      details: 'Our academic program emphasizes deep understanding and mastery of core subjects. Students are challenged to excel through structured curricula, regular assessments, and personalized support to reach their full potential.'
    },
    { 
      name: 'GCSEs & A-Levels Early', 
      color: 0x9ACD32, 
      position: [-4, 2, 0],
      description: 'Accelerated pathways to complete qualifications ahead',
      details: 'High-achieving students can complete their GCSEs and A-Levels early through our accelerated program. This allows them to pursue university-level studies, internships, or specialized projects while still in school.'
    },
    { 
      name: 'Islamic Values', 
      color: 0xf2e6b1, 
      position: [0, 2, 4],
      description: 'Foundation in Islamic principles and ethical living',
      details: 'Students develop a strong understanding of Islamic values, ethics, and principles. Through Qur\'anic studies, Hadith, and Islamic history, they learn to live with integrity, compassion, and purpose.'
    },
    { 
      name: 'Spirituality in Practice', 
      color: 0xcba641, 
      position: [0, 2, -4],
      description: 'Living faith through daily practice and reflection',
      details: 'Beyond theory, students engage in daily spiritual practices including prayer, reflection, and mindfulness. They learn to integrate their faith into everyday life, developing inner peace and moral clarity.'
    },
    { 
      name: '200+ Classical Books', 
      color: 0x4CAF50, 
      position: [3, -2, 3],
      description: 'Extensive reading program spanning classics and modern thought',
      details: 'Students engage with over 200 carefully selected books ranging from classical literature and philosophy to contemporary works on innovation and future thinking. This develops intellectual depth and critical thinking.'
    },
    { 
      name: 'Community Projects', 
      color: 0x9ACD32, 
      position: [-3, -2, 3],
      description: 'Real-world service learning and community engagement',
      details: 'Students participate in meaningful community projects that address local needs. Through service learning, they develop empathy, leadership skills, and civic responsibility while making tangible positive impact.'
    },
    { 
      name: 'Radio/Podcasting', 
      color: 0xf2e6b1, 
      position: [3, -2, -3],
      description: 'Modern media skills through radio and podcast production',
      details: 'Students learn digital communication through hands-on radio broadcasting and podcast creation. They develop public speaking, storytelling, audio production, and media literacy skills.'
    },
    { 
      name: 'Book Clubs', 
      color: 0xcba641, 
      position: [-3, -2, -3],
      description: 'Collaborative reading and intellectual discussion groups',
      details: 'Regular book club meetings foster a love of reading and intellectual discourse. Students engage in deep discussions, develop critical analysis skills, and learn to articulate their thoughts.'
    },
    { 
      name: 'Applied Learning', 
      color: 0x4CAF50, 
      position: [4, 0, 2],
      description: 'Practical, hands-on learning experiences',
      details: 'Theory meets practice through project-based learning, internships, and real-world applications. Students solve authentic problems, work with industry partners, and develop practical skills.'
    },
    { 
      name: 'Creative Expression', 
      color: 0x9ACD32, 
      position: [-4, 0, 2],
      description: 'Arts, design, and creative innovation',
      details: 'Students explore their creativity through visual arts, music, drama, design thinking, and digital media. Creative expression develops innovation, emotional intelligence, and communication skills.'
    },
    { 
      name: 'Entrepreneurship', 
      color: 0xf2e6b1, 
      position: [2, 0, -4],
      description: 'Business skills, innovation, and entrepreneurial mindset',
      details: 'Students learn entrepreneurial thinking through business planning, startup projects, and innovation challenges. They develop financial literacy, problem-solving skills, and confidence to turn ideas into reality.'
    },
    { 
      name: 'AI Tutors & Mentors', 
      color: 0xcba641, 
      position: [-2, 0, -4],
      description: 'Personalized learning combining technology and human guidance',
      details: 'Our hybrid model pairs AI-powered adaptive learning with dedicated human mentors. AI tutors provide personalized practice and instant feedback, while human mentors offer guidance and emotional support.'
    }
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x092012);
    scene.fog = new THREE.Fog(0x092012, 10, 50);
    sceneRef.current = scene;

    // Camera setup - adjust for mobile and tablets
    const isMobileOrTablet = window.innerWidth <= 1024;
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    // Zoom in more on mobile/tablet by moving camera closer
    if (isMobileOrTablet) {
      camera.position.set(0, 3, 8);
    } else {
      camera.position.set(0, 5, 15);
    }
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Controls - adjust zoom limits for mobile and tablets
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    if (isMobileOrTablet) {
      controls.minDistance = 3;
      controls.maxDistance = 15;
    } else {
      controls.minDistance = 5;
      controls.maxDistance = 30;
    }
    controlsRef.current = controls;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    scene.add(directionalLight);

    // Create AI Models Tree Structure
    createAIModelsTree(scene);

    // Animation loop
    let startTime = Date.now();
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      
      const currentTime = Date.now() - startTime;
      if (scene.userData.animate) {
        scene.userData.animate(currentTime);
      }
      
      renderer.render(scene, camera);
    };
    animate();

    // Auto-cycle through cards every 6 seconds (slower for readability)
    const cardCycleInterval = setInterval(() => {
      setActiveNodeIndex(prev => (prev + 1) % modelsData.length);
    }, 6000);

    // Mouse interaction removed - cards now auto-cycle
    // Keep hover effect for visual feedback only
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseMove = (event) => {
      if (!containerRef.current || !nodeGroupRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      
      // Get all nodes from nodeGroup
      const nodes = [];
      nodeGroupRef.current.children.forEach(child => {
        if (child instanceof THREE.Mesh && child.geometry instanceof THREE.SphereGeometry && child.userData.model) {
          nodes.push(child);
        }
      });

      const intersects = raycaster.intersectObjects(nodes);

      if (intersects.length > 0) {
        const intersectedNode = intersects[0].object;
        
        // Only highlight effect, no card change
        intersectedNode.material.emissiveIntensity = 0.6;
        containerRef.current.style.cursor = 'pointer';
      } else {
        containerRef.current.style.cursor = 'default';
        
        // Reset all nodes except active one
        nodes.forEach((node, idx) => {
          if (idx !== activeNodeIndex) {
            node.material.emissiveIntensity = node.userData.originalEmissive;
          }
        });
      }
    };

    containerRef.current.addEventListener('mousemove', onMouseMove);

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      
      // Adjust camera position on resize
      const isMobileOrTabletNow = window.innerWidth <= 1024;
      if (isMobileOrTabletNow) {
        camera.position.set(0, 3, 8);
        controls.minDistance = 3;
        controls.maxDistance = 15;
      } else {
        camera.position.set(0, 5, 15);
        controls.minDistance = 5;
        controls.maxDistance = 30;
      }
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      clearInterval(cardCycleInterval);
      window.removeEventListener('resize', handleResize);
      const container = containerRef.current;
      if (container) {
        container.removeEventListener('mousemove', onMouseMove);
      }
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const createAIModelsTree = (scene) => {
    // Central AI Hub with enhanced glow and pulse
    const centralGeometry = new THREE.SphereGeometry(1, 32, 32);
    const centralMaterial = new THREE.MeshPhongMaterial({
      color: 0xcba641,
      emissive: 0xcba641,
      emissiveIntensity: 0.5,
      shininess: 100
    });
    const centralNode = new THREE.Mesh(centralGeometry, centralMaterial);
    centralNode.position.set(0, 0, 0);
    scene.add(centralNode);

    // Add multiple glow layers for pulsing effect
    const glowLayers = [];
    for (let i = 0; i < 3; i++) {
      const glowGeometry = new THREE.SphereGeometry(1.2 + i * 0.2, 32, 32);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0xcba641,
        transparent: true,
        opacity: 0.3 - i * 0.1
      });
      const glow = new THREE.Mesh(glowGeometry, glowMaterial);
      centralNode.add(glow);
      glowLayers.push(glow);
    }

    // Add central label
    const centralCanvas = document.createElement('canvas');
    const centralContext = centralCanvas.getContext('2d');
    centralCanvas.width = 256;
    centralCanvas.height = 64;
    centralContext.fillStyle = '#ffffff';
    centralContext.font = 'Bold 28px Playfair Display';
    centralContext.textAlign = 'center';
    centralContext.fillText('Learning Hub', 128, 40);

    const centralTexture = new THREE.CanvasTexture(centralCanvas);
    const centralSpriteMaterial = new THREE.SpriteMaterial({ map: centralTexture });
    const centralSprite = new THREE.Sprite(centralSpriteMaterial);
    centralSprite.position.set(0, 1.5, 0);
    centralSprite.scale.set(2.5, 0.6, 1);
    scene.add(centralSprite);

    // AI Models as satellite nodes
    const nodeGroup = new THREE.Group();
    scene.add(nodeGroup);
    nodeGroupRef.current = nodeGroup;

    modelsData.forEach((model, index) => {
      // Create node
      const nodeGeometry = new THREE.SphereGeometry(0.5, 32, 32);
      const nodeMaterial = new THREE.MeshPhongMaterial({
        color: model.color,
        emissive: model.color,
        emissiveIntensity: 0.2
      });
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      node.position.set(...model.position);
      node.userData = { 
        model: model,
        index: index,
        originalEmissive: 0.2,
        name: model.name
      };
      nodeGroup.add(node);

      // Create connection line
      const points = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(...model.position)
      ];
      const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
      const lineMaterial = new THREE.LineBasicMaterial({
        color: model.color,
        transparent: true,
        opacity: 0.4
      });
      const line = new THREE.Line(lineGeometry, lineMaterial);
      nodeGroup.add(line);

      // Add label with enumeration
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 512;
      canvas.height = 128;
      context.fillStyle = '#ffffff';
      context.font = 'Bold 32px Playfair Display';
      context.textAlign = 'center';
      context.fillText(`${index + 1}. ${model.name}`, 256, 70);

      const texture = new THREE.CanvasTexture(canvas);
      const spriteMaterial = new THREE.SpriteMaterial({ 
        map: texture,
        transparent: true,
        opacity: 0
      });
      const sprite = new THREE.Sprite(spriteMaterial);
      sprite.position.set(model.position[0], model.position[1] + 0.8, model.position[2]);
      sprite.scale.set(3, 0.75, 1);
      nodeGroup.add(sprite);

      // Store for animation
      sprite.userData.targetOpacity = 1;
      sprite.userData.delay = index * 0.1;

      // Animate node
      node.userData.animate = (time) => {
        node.position.y = model.position[1] + Math.sin(time + model.position[0]) * 0.2;
        node.rotation.y = time * 0.5;
        
        // Fade in label with delay
        if (time > sprite.userData.delay) {
          sprite.material.opacity = Math.min(
            sprite.material.opacity + 0.02,
            sprite.userData.targetOpacity
          );
        }
      };
    });

    // Add particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const positions = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 30;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xcba641,
      size: 0.05,
      transparent: true,
      opacity: 0.6
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Animate scene
    const animateScene = (time) => {
      // Pulsing central node
      const pulseScale = 1 + Math.sin(time * 0.002) * 0.1;
      centralNode.scale.set(pulseScale, pulseScale, pulseScale);
      
      // Pulsing glow intensity
      centralMaterial.emissiveIntensity = 0.5 + Math.sin(time * 0.003) * 0.3;
      
      // Rotate glow layers
      glowLayers.forEach((glow, i) => {
        glow.rotation.y = time * 0.001 * (i + 1);
        glow.rotation.x = time * 0.0005 * (i + 1);
        glow.material.opacity = (0.3 - i * 0.1) + Math.sin(time * 0.002 + i) * 0.1;
      });
      
      // Rotate entire node group - with smooth transition to target
      if (isRotatingToTargetRef.current) {
        const currentRotation = nodeGroup.rotation.y;
        const diff = targetRotationRef.current - currentRotation;
        
        // Smooth rotation towards target
        if (Math.abs(diff) > 0.01) {
          nodeGroup.rotation.y += diff * 0.05;
        } else {
          nodeGroup.rotation.y = targetRotationRef.current;
          isRotatingToTargetRef.current = false;
        }
      } else {
        // Normal slow rotation
        nodeGroup.rotation.y = time * 0.00008;
      }
      
      // Animate individual nodes
      nodeGroup.children.forEach((child) => {
        if (child.userData.animate) {
          child.userData.animate(time * 0.001);
        }
      });

      // Rotate particles
      particles.rotation.y = time * 0.0001;
    };

    // Store animation function
    scene.userData.animate = animateScene;
  };

  useEffect(() => {
    if (!cameraRef.current || !nodeGroupRef.current || !containerRef.current) return;
    
    // Highlight active node only
    const highlightActiveNode = () => {
      const nodes = [];
      nodeGroupRef.current.children.forEach(child => {
        if (child instanceof THREE.Mesh && child.geometry instanceof THREE.SphereGeometry && child.userData.model) {
          nodes.push(child);
        }
      });
      
      // Highlight active node
      nodes.forEach((node, idx) => {
        node.material.emissiveIntensity = idx === activeNodeIndex ? 0.6 : node.userData.originalEmissive;
      });
    };
    
    highlightActiveNode();
  }, [activeNodeIndex]);

  // Function to rotate model to bring specific neuron to front
  const rotateToNeuron = (index) => {
    if (!nodeGroupRef.current) return;
    
    const neuronData = modelsData[index];
    const neuronPosition = neuronData.position;
    
    const currentAngle = Math.atan2(neuronPosition[2], neuronPosition[0]);
    targetRotationRef.current = -currentAngle - Math.PI;
    isRotatingToTargetRef.current = true;
  };

  // Function to reset camera and rotation
  const resetView = () => {
    if (!cameraRef.current || !controlsRef.current || !nodeGroupRef.current) return;
    
    // Reset camera position - adjust for mobile and tablets
    const isMobileOrTablet = window.innerWidth <= 1024;
    if (isMobileOrTablet) {
      cameraRef.current.position.set(0, 3, 8);
    } else {
      cameraRef.current.position.set(0, 5, 15);
    }
    controlsRef.current.target.set(0, 0, 0);
    controlsRef.current.update();
    
    // Reset rotation
    targetRotationRef.current = 0;
    isRotatingToTargetRef.current = true;
  };

  const activeNode = modelsData[activeNodeIndex];

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      {/* Container with border */}
      <div className="model-border-container" style={{ 
        width: '85%', 
        height: '90%', 
        border: '3px solid rgba(203, 166, 65, 0.5)',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
        position: 'relative'
      }}>
        {/* 3D Visualization Container */}
        <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
      </div>
      
      {/* Reset Button - Top Right */}
      <button
        onClick={resetView}
        style={{
          position: 'absolute',
          top: '20px',
          right: 'calc(7.5% + 20px)',
          background: 'rgba(203, 166, 65, 0.2)',
          border: '2px solid rgba(203, 166, 65, 0.6)',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          color: '#cba641',
          fontSize: '1.5rem',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          zIndex: 200,
          fontFamily: 'Arial, sans-serif',
          fontWeight: 'bold',
          pointerEvents: 'auto'
        }}
        onMouseEnter={(e) => {
          e.target.style.background = 'rgba(203, 166, 65, 0.3)';
          e.target.style.borderColor = 'rgba(203, 166, 65, 0.8)';
          e.target.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'rgba(203, 166, 65, 0.2)';
          e.target.style.borderColor = 'rgba(203, 166, 65, 0.6)';
          e.target.style.transform = 'scale(1)';
        }}
        title="Reset View"
      >
        ↻
      </button>
      
      {/* Auto-cycling Card */}
      {activeNode && !expandedNode && (
        <div
          key={activeNodeIndex}
          className="ai-model-card"
          style={{
            position: 'absolute',
            right: 'calc(7.5% + 20px)',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '210px',
            maxWidth: 'calc(100vw - 100px)',
            background: 'rgba(9, 32, 18, 0.8)',
            backdropFilter: 'blur(10px)',
            border: '2px solid rgba(203, 166, 65, 0.6)',
            borderRadius: '15px',
            padding: '15px',
            color: '#f2e6b1',
            fontFamily: 'Playfair Display, serif',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
            animation: 'slideInRight 0.5s ease-out',
            pointerEvents: 'none',
            zIndex: 100
          }}
        >
          <div style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: `#${activeNode.color.toString(16).padStart(6, '0')}`,
            marginBottom: '10px',
            boxShadow: `0 0 15px #${activeNode.color.toString(16).padStart(6, '0')}`
          }} />
          
          <div style={{
            display: 'inline-block',
            background: 'rgba(203, 166, 65, 0.2)',
            border: '1px solid rgba(203, 166, 65, 0.5)',
            borderRadius: '20px',
            padding: '3px 8px',
            fontSize: '0.65rem',
            color: '#cba641',
            marginBottom: '8px',
            fontWeight: 600
          }}>
            {activeNodeIndex + 1} of 12
          </div>
          
          <h3 style={{
            color: '#cba641',
            fontSize: '0.95rem',
            marginBottom: '8px',
            fontWeight: 600,
            lineHeight: '1.3'
          }}>
            {activeNode.name}
          </h3>
          <p style={{
            fontSize: '0.75rem',
            lineHeight: '1.6',
            marginBottom: '12px',
            fontWeight: 200,
            color: '#f2e6b1'
          }}>
            {activeNode.description}
          </p>
          
          <div style={{ display: 'flex', gap: '8px', pointerEvents: 'auto' }}>
            <button
              onClick={() => rotateToNeuron(activeNodeIndex)}
              style={{
                background: 'rgba(76, 175, 80, 0.2)',
                border: '2px solid rgba(76, 175, 80, 0.6)',
                borderRadius: '8px',
                padding: '8px 12px',
                color: '#9ACD32',
                fontFamily: 'Playfair Display, serif',
                fontSize: '0.7rem',
                fontWeight: 600,
                cursor: 'pointer',
                flex: 1,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(76, 175, 80, 0.3)';
                e.target.style.borderColor = 'rgba(76, 175, 80, 0.8)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(76, 175, 80, 0.2)';
                e.target.style.borderColor = 'rgba(76, 175, 80, 0.6)';
              }}
            >
              View in 3D →
            </button>
            
            <button
              onClick={() => setExpandedNode(activeNode)}
              style={{
                background: 'linear-gradient(135deg, #cba641, #9ACD32)',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 12px',
                color: '#092012',
                fontFamily: 'Playfair Display, serif',
                fontSize: '0.7rem',
                fontWeight: 600,
                cursor: 'pointer',
                flex: 1,
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 6px 20px rgba(203, 166, 65, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      )}

      {/* Expanded Modal */}
      {expandedNode && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(9, 32, 18, 0.9)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            animation: 'fadeIn 0.3s ease-out'
          }}
          onClick={() => setExpandedNode(null)}
        >
          <div
            style={{
              background: 'rgba(9, 32, 18, 0.95)',
              backdropFilter: 'blur(15px)',
              border: '3px solid rgba(203, 166, 65, 0.8)',
              borderRadius: '25px',
              padding: '40px',
              maxWidth: '600px',
              maxHeight: '80vh',
              overflowY: 'auto',
              color: '#f2e6b1',
              fontFamily: 'Playfair Display, serif',
              boxShadow: '0 20px 60px rgba(0, 0, 0, 0.6)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setExpandedNode(null)}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'rgba(203, 166, 65, 0.2)',
                border: '2px solid rgba(203, 166, 65, 0.5)',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                color: '#cba641',
                fontSize: '1.5rem',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ×
            </button>

            <h2 style={{
              color: '#cba641',
              fontSize: '2rem',
              marginBottom: '15px',
              fontWeight: 600
            }}>
              {expandedNode.name}
            </h2>

            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              marginBottom: '20px',
              fontWeight: 200
            }}>
              {expandedNode.description}
            </p>

            <div style={{
              background: 'rgba(203, 166, 65, 0.1)',
              borderLeft: '4px solid #cba641',
              padding: '20px',
              borderRadius: '8px',
              marginTop: '20px'
            }}>
              <h3 style={{
                color: '#9ACD32',
                fontSize: '1.3rem',
                marginBottom: '12px',
                fontWeight: 600
              }}>
                Detailed Information
              </h3>
              <p style={{
                fontSize: '1rem',
                lineHeight: '1.8',
                fontWeight: 200
              }}>
                {expandedNode.details}
              </p>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateY(-50%) translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        /* Tablets and iPads: Full width model, cards below */
        @media (max-width: 1024px) {
          .model-border-container {
            width: 100% !important;
            height: 100% !important;
            border-radius: 0 !important;
            border-left: none !important;
            border-right: none !important;
          }
          
          .ai-model-card {
            position: static !important;
            transform: none !important;
            width: 85% !important;
            max-width: 500px !important;
            margin: 1.5rem auto 0 !important;
            right: auto !important;
            top: auto !important;
          }
        }
        
        /* Mobile: Full width model, cards below */
        @media (max-width: 768px) {
          .model-border-container {
            width: 100% !important;
            height: 100% !important;
            border-radius: 0 !important;
            border-left: none !important;
            border-right: none !important;
          }
          
          .ai-model-card {
            position: static !important;
            transform: none !important;
            width: 90% !important;
            max-width: 100% !important;
            margin: 1.5rem auto 0 !important;
            right: auto !important;
            top: auto !important;
          }
        }
        
        @media (max-width: 480px) {
          .model-border-container {
            width: 100vw !important;
            height: 100% !important;
            border-radius: 0 !important;
            border: none !important;
            margin-left: calc(-50vw + 50%) !important;
          }
          
          .ai-model-card {
            width: 92% !important;
            padding: 12px !important;
            margin: 1rem auto 0 !important;
          }
        }
        
        @media (max-width: 375px) {
          .ai-model-card {
            width: 95% !important;
            padding: 10px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default AIModelsVisualization;
