import { useGLTF } from '@react-three/drei'

export default function Arduino(props) {
  const { nodes, materials } = useGLTF('/e3a5d3e564a64fb0ab39665f44632520/scene.gltf')
  
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes['C#_C#_0'].geometry}
          material={materials.material}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/e3a5d3e564a64fb0ab39665f44632520/scene.gltf')