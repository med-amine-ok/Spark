import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail } from 'lucide-react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const OrreryBackground = () => {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);

    useEffect(() => {
      if (!containerRef.current) return;

      let scene, camera, renderer, clock, controls;
      let star, orrery, starLight, ambientLight, blueLight, purpleLight, metalMaterial, ringMaterial;
      let planets = [];
      let particleSystems = [];
      let animationId;    const currentThemeIndex = 0;
    const themes = [
      {
        name: 'Inferno',
        starColors: { color1: 0xffffff, color2: 0xffcc00 },
        planetData: [
          { baseColor: [0.8, 0.2, 0.1], accentColor: [1, 0.6, 0.2], trailColor: 0xff4400 },
          { baseColor: [0.6, 0.1, 0.1], accentColor: [1, 0.4, 0.1], trailColor: 0xff8800 },
          { baseColor: [0.9, 0.3, 0], accentColor: [1, 0.8, 0.3], trailColor: 0xffaa33 }
        ],
        ambientLightColor: 0x401008,
        starLightColor: 0xffcc88,
        directionalLights: { color1: 0xff6600, color2: 0xdd3300 },
        metalMaterialColor: 0x332222,
        ringColor: 0xff8866
      }
    ];

    const init = () => {
      scene = new THREE.Scene();
      clock = new THREE.Clock();
      
      camera = new THREE.PerspectiveCamera(
        55,
        containerRef.current.clientWidth / containerRef.current.clientHeight,
        0.1,
        3000
      );
      camera.position.set(25, 20, 25);

      // Create renderer first
      renderer = new THREE.WebGLRenderer({ 
        antialias: true, 
        alpha: true,
        powerPreference: "high-performance" 
      });
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.2;
      containerRef.current.appendChild(renderer.domElement);

      // Create controls after renderer
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.05;
      controls.minDistance = 8;
      controls.maxDistance = 150;
      controls.autoRotate = true;
      controls.enablePan = true;
      controls.enableZoom = true;
      controls.enableRotate = true;
      controls.rotateSpeed = 0.5;
      controls.target.set(0, 0, 0);

      setupLighting();
      createOrrery();
      createEnvironment();
      
      sceneRef.current = { scene, camera, renderer, controls, clock, planets, orrery, star };
    };

    const setupLighting = () => {
      ambientLight = new THREE.AmbientLight(themes[currentThemeIndex].ambientLightColor, 0.8);
      scene.add(ambientLight);

      starLight = new THREE.PointLight(themes[currentThemeIndex].starLightColor, 3, 120, 1.8);
      scene.add(starLight);

      blueLight = new THREE.DirectionalLight(themes[currentThemeIndex].directionalLights.color1, 0.5);
      blueLight.position.set(-50, 30, -30);
      scene.add(blueLight);

      purpleLight = new THREE.DirectionalLight(themes[currentThemeIndex].directionalLights.color2, 0.3);
      purpleLight.position.set(30, -20, 50);
      scene.add(purpleLight);
    };

    const createOrrery = () => {
      orrery = new THREE.Group();
      scene.add(orrery);

      metalMaterial = new THREE.MeshStandardMaterial({
        color: themes[currentThemeIndex].metalMaterialColor,
        metalness: 0.95,
        roughness: 0.2,
        emissive: 0x1a2540,
        emissiveIntensity: 0.4
      });

      ringMaterial = new THREE.MeshBasicMaterial({
        color: themes[currentThemeIndex].ringColor,
        wireframe: true,
        transparent: true,
        opacity: 0.4
      });

      // Star
      const starGeo = new THREE.IcosahedronGeometry(2.2, 2);
      const starMaterial = new THREE.MeshStandardMaterial({
        color: themes[currentThemeIndex].starColors.color1,
        emissive: themes[currentThemeIndex].starColors.color2,
        emissiveIntensity: 2
      });
      star = new THREE.Mesh(starGeo, starMaterial);
      orrery.add(star);

      // Gears
      for (let i = 0; i < 7; i++) {
        const gearGeo = new THREE.TorusGeometry(2.8 + i * 0.5, 0.18, 12, 64);
        const gear = new THREE.Mesh(gearGeo, metalMaterial);
        gear.rotation.x = Math.PI / 2;
        gear.position.y = -2 - i * 0.25;
        gear.userData.rotationSpeed = (i % 2 === 0 ? 1 : -1) * (0.08 + i * 0.04);
        orrery.add(gear);
      }

      // Planets
      const planetGeometries = [
        new THREE.OctahedronGeometry(0.6, 1),
        new THREE.DodecahedronGeometry(0.9, 1),
        new THREE.IcosahedronGeometry(0.7, 1)
      ];
      const planetBaseData = [
        { size: 0.6, distance: 8, speed: 0.6 },
        { size: 0.9, distance: 14, speed: 0.35 },
        { size: 0.7, distance: 22, speed: 0.25 }
      ];

      planetBaseData.forEach((data, i) => {
        const planetGroup = new THREE.Group();
        planetGroup.userData.orbitSpeed = data.speed;
        planetGroup.rotation.y = Math.random() * Math.PI * 2;
        orrery.add(planetGroup);

        const ringGeo = new THREE.TorusGeometry(data.distance, 0.08, 20, 128);
        const ring = new THREE.Mesh(ringGeo, ringMaterial);
        ring.rotation.x = Math.PI / 2;
        planetGroup.add(ring);

        const planetMaterial = new THREE.MeshStandardMaterial({
          color: new THREE.Color(...themes[currentThemeIndex].planetData[i].baseColor),
          emissive: new THREE.Color(...themes[currentThemeIndex].planetData[i].accentColor),
          emissiveIntensity: 0.3
        });

        const planet = new THREE.Mesh(planetGeometries[i], planetMaterial);
        planet.position.x = data.distance;
        planet.userData.selfRotation = 0.6;
        planetGroup.add(planet);

        createParticleTrail(planet, themes[currentThemeIndex].planetData[i].trailColor, data.distance, planetGroup);
        planets.push({ group: planetGroup, body: planet });
      });
    };

    const createParticleTrail = (planet, color, radius, parentGroup) => {
      const count = 50;
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const c = new THREE.Color(color);

      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        positions[i * 3] = Math.cos(angle) * radius;
        positions[i * 3 + 1] = 0;
        positions[i * 3 + 2] = Math.sin(angle) * radius;
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
      }

      const geom = new THREE.BufferGeometry();
      geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

      const mat = new THREE.PointsMaterial({
        size: 0.3,
        vertexColors: true,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
      });

      const points = new THREE.Points(geom, mat);
      parentGroup.add(points);
      particleSystems.push({ system: points });
    };

    const createEnvironment = () => {
      const layers = [
        { count: 2000, distance: [600, 1000], size: [0.8, 1.5], color: 0x6688bb },
        { count: 1500, distance: [1000, 1500], size: [1, 2], color: 0x88aadd }
      ];

      layers.forEach(layer => {
        const positions = new Float32Array(layer.count * 3);
        const colors = new Float32Array(layer.count * 3);
        const c = new THREE.Color(layer.color);

        for (let i = 0; i < layer.count; i++) {
          const u = Math.random(), v = Math.random();
          const theta = 2 * Math.PI * u;
          const phi = Math.acos(2 * v - 1);
          const r = layer.distance[0] + Math.random() * (layer.distance[1] - layer.distance[0]);
          
          positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
          positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
          positions[i * 3 + 2] = r * Math.cos(phi);
          colors[i * 3] = c.r;
          colors[i * 3 + 1] = c.g;
          colors[i * 3 + 2] = c.b;
        }

        const geom = new THREE.BufferGeometry();
        geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geom.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        const mat = new THREE.PointsMaterial({
          size: 2,
          vertexColors: true,
          transparent: true,
          opacity: 0.8
        });

        const stars = new THREE.Points(geom, mat);
        scene.add(stars);
      });
    };

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (star) {
        star.rotation.y += delta * 0.3;
        star.rotation.x += delta * 0.15;
      }

      if (orrery) {
        orrery.children.forEach(c => {
          if (c.userData.rotationSpeed) {
            c.rotation.z += delta * c.userData.rotationSpeed;
          }
        });
      }

      planets.forEach(p => {
        p.group.rotation.y += delta * p.group.userData.orbitSpeed;
        p.body.rotation.y += delta * p.body.userData.selfRotation;
        p.body.rotation.z += delta * p.body.userData.selfRotation * 0.3;
      });

    controls.update();

      renderer.render(scene, camera);
    };

    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    init();
    animate();
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      
      window.removeEventListener('resize', handleResize);
      
      if (controls) controls.dispose();
      
      if (renderer) {
        containerRef.current?.removeChild(renderer.domElement);
        renderer.dispose();
      }
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0" />;
};

const ActionButton = ({ children, variant = "primary", className = "", ...props }) => {
  const baseClasses = "relative overflow-hidden font-semibold rounded-2xl px-8 py-4 transition-all duration-500 group backdrop-blur-2xl border";
  
  const variants = {
    primary: "text-white border-white/30 shadow-2xl hover:bg-white/20 hover:border-white/40",
    glass: "backdrop-blur-3xl text-white border-white/25 shadow-xl hover:bg-white/15 hover:border-white/35"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      style={{
        background: variant === 'primary' 
          ? 'linear-gradient(135deg, rgba(255,107,53,0.3) 0%, rgba(247,147,30,0.2) 50%, rgba(255,255,255,0.1) 100%)'
          : 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,107,53,0.1) 100%)',
        boxShadow: '0 8px 32px rgba(255,107,53,0.2), inset 0 1px 0 rgba(255,255,255,0.3)'
      }}
      {...props}
    >
      <span className="relative flex items-center justify-center">
        {children}
      </span>
    </motion.button>
  );
};

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden "
    >
      <OrreryBackground />

      
    </section>
  );
};

export default Hero;