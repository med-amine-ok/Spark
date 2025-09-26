/* GlassCursor.jsx */
import * as THREE from "three";
import { useRef, useState, useEffect } from "react";
import { Canvas, createPortal, useFrame, useThree } from "@react-three/fiber";
import { useFBO, MeshTransmissionMaterial } from "@react-three/drei";
import { easing } from "maath";

export default function GlassCursor() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none", // so it doesn't block clicks
        zIndex: 9999,
      }}
      camera={{ position: [0, 0, 20], fov: 15 }}
      gl={{ alpha: true }}
    >
      <Lens />
    </Canvas>
  );
}

function Lens({ modeProps = {} }) {
  return (
    <ModeWrapper
      followPointer
      modeProps={modeProps}
    />
  );
}

function ModeWrapper({
  followPointer = true,
  modeProps = {},
}) {
  const ref = useRef();
  const buffer = useFBO();
  const { viewport: vp } = useThree();
  const [scene] = useState(() => new THREE.Scene());
  const geometry = new THREE.CylinderGeometry(1, 1, 0.5, 32);
  const geoWidthRef = useRef(1);

  useFrame((state, delta) => {
    const { gl, viewport, pointer, camera } = state;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);

    const destX = followPointer ? (pointer.x * v.width) / 2 : 0;
    const destY = followPointer ? (pointer.y * v.height) / 2 : 0;
    easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);

    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    gl.setClearColor(0x000000, 0); // transparent
  });

  return (
    <>
      {createPortal(null, scene)}
      <mesh
        ref={ref}
        scale={0.15}
        rotation-x={Math.PI / 2}
        geometry={geometry}
      >
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={1.15}
          thickness={5}
          anisotropy={0.01}
          chromaticAberration={0.1}
          {...modeProps}
        />
      </mesh>
    </>
  );
}
