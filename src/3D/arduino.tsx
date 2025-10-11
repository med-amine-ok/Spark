import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
"use client";
type GLTFResult = GLTF & {
  nodes: {
    node_id375_Material_218_0: THREE.Mesh
    node_id364_Material_222_0: THREE.Mesh
    node_id345_Material_230_0: THREE.Mesh
    node_id304_Material_234_0: THREE.Mesh
    node_id293_Material_258_0: THREE.Mesh
    node_id294_Material_260_0: THREE.Mesh
    node_id170_Material_53_0: THREE.Mesh
    node_id170_Material_55_0: THREE.Mesh
    node_id170_Material_57_0: THREE.Mesh
    node_id170_Material_59_0: THREE.Mesh
    node_id170_Material_61_0: THREE.Mesh
    node_id170_Material_63_0: THREE.Mesh
    node_id184_Material_65_0: THREE.Mesh
    node_id184_Material_67_0: THREE.Mesh
    node_id184_Material_69_0: THREE.Mesh
    node_id184_Material_71_0: THREE.Mesh
    node_id184_Material_73_0: THREE.Mesh
    node_id184_Material_75_0: THREE.Mesh
    node_id304_Material_236_0: THREE.Mesh
    node_id304_Material_238_0: THREE.Mesh
    node_id304_Material_240_0: THREE.Mesh
    node_id304_Material_242_0: THREE.Mesh
    node_id304_Material_244_0: THREE.Mesh
    node_id304_Material_246_0: THREE.Mesh
    node_id304_Material_248_0: THREE.Mesh
    node_id304_Material_250_0: THREE.Mesh
    node_id304_Material_252_0: THREE.Mesh
    node_id304_Material_254_0: THREE.Mesh
    node_id304_Material_256_0: THREE.Mesh
    node_id345_Material_232_0: THREE.Mesh
    node_id364_Material_224_0: THREE.Mesh
    node_id364_Material_226_0: THREE.Mesh
    node_id364_Material_228_0: THREE.Mesh
    node_id375_Material_220_0: THREE.Mesh
  }
  materials: {
    Material_218: THREE.MeshStandardMaterial
    Material_222: THREE.MeshStandardMaterial
    Material_230: THREE.MeshStandardMaterial
    Material_234: THREE.MeshStandardMaterial
    Material_258: THREE.MeshStandardMaterial
    Material_260: THREE.MeshStandardMaterial
    Material_53: THREE.MeshStandardMaterial
    Material_55: THREE.MeshStandardMaterial
    Material_57: THREE.MeshStandardMaterial
    Material_59: THREE.MeshStandardMaterial
    Material_61: THREE.MeshStandardMaterial
    Material_63: THREE.MeshStandardMaterial
    Material_65: THREE.MeshStandardMaterial
    Material_67: THREE.MeshStandardMaterial
    Material_69: THREE.MeshStandardMaterial
    Material_71: THREE.MeshStandardMaterial
    Material_73: THREE.MeshStandardMaterial
    Material_75: THREE.MeshStandardMaterial
    Material_236: THREE.MeshStandardMaterial
    Material_238: THREE.MeshStandardMaterial
    Material_240: THREE.MeshStandardMaterial
    Material_242: THREE.MeshStandardMaterial
    Material_244: THREE.MeshStandardMaterial
    Material_246: THREE.MeshStandardMaterial
    Material_248: THREE.MeshStandardMaterial
    Material_250: THREE.MeshStandardMaterial
    Material_252: THREE.MeshStandardMaterial
    Material_254: THREE.MeshStandardMaterial
    Material_256: THREE.MeshStandardMaterial
    Material_232: THREE.MeshStandardMaterial
    Material_224: THREE.MeshStandardMaterial
    Material_226: THREE.MeshStandardMaterial
    Material_228: THREE.MeshStandardMaterial
    Material_220: THREE.MeshStandardMaterial
  }
}

export function Arduino(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/arduino_uno/scene.gltf') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="77baf2f0c73a4cd78f1da34b32f48983fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="RootNode">
              <group name="root">
                <group name="node_id375" position={[-1.53523529, 0.14382897, 0]} scale={0.001}>
                  <group
                    name="Object_5"
                    position={[1099.07080078, -404.52416992, 265.28839111]}
                    rotation={[-1.7e-7, 3e-7, 0]}
                    scale={[215.19552612, 179.53128052, 193.1076355]}>
                    <mesh
                      name="node_id375_Material_218_0"
                      castShadow
                      receiveShadow
                      geometry={nodes.node_id375_Material_218_0.geometry}
                      material={materials.Material_218}
                    />
                  </group>
                  <group name="node_id364">
                    <group
                      name="Object_8"
                      position={[1498.34729004, 256.84817505, 257.86352539]}
                      rotation={[-1.7e-7, 3e-7, 0]}
                      scale={[388.9887085, 42.74407196, 194.49435425]}>
                      <mesh
                        name="node_id364_Material_222_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.node_id364_Material_222_0.geometry}
                        material={materials.Material_222}
                      />
                    </group>
                    <group name="node_id345" position={[0.12487793, -106.06461334, -0.00015259]}>
                      <group
                        name="Object_11"
                        position={[1294.33435059, -285.41796875, 238.13673401]}
                        rotation={[-4.1e-7, 5.3e-7, 0]}
                        scale={[101.86284637, 101.81298828, 17.44452667]}>
                        <mesh
                          name="node_id345_Material_230_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.node_id345_Material_230_0.geometry}
                          material={materials.Material_230}
                        />
                      </group>
                      <group
                        name="node_id304"
                        position={[1255.70507813, -285.44699097, 847.43878174]}
                        rotation={[Math.PI / 2, Math.PI / 2, 0]}
                        scale={1.00000048}>
                        <group
                          name="Object_14"
                          position={[329.73471069, -579.81048584, 799.55822754]}
                          rotation={[Math.PI, 0.54514532, -Math.PI]}
                          scale={[0.11278676, 0.4010787, 0.15354602]}>
                          <mesh
                            name="node_id304_Material_234_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id304_Material_234_0.geometry}
                            material={materials.Material_234}
                          />
                        </group>
                        <group
                          name="node_id109"
                          position={[-190.82244873, -961.5279541, 293.18875122]}
                          rotation={[-Math.PI / 2, 0.00000107, -Math.PI / 2]}
                          scale={[1, 0.99999988, 0.99999988]}>
                          <group
                            name="node_id293"
                            position={[-35.40576172, 471.78234863, 310.81939697]}
                            rotation={[-Math.PI / 2, -0.29647514, -Math.PI]}
                            scale={[1.00000191, 1.0000006, 1.00000072]}>
                            <group
                              name="Object_18"
                              rotation={[-Math.PI / 2, 0.00000115, 2.84815465]}
                              scale={[1160.07839053, 822.75448333, 580.03900147]}>
                              <mesh
                                name="node_id293_Material_258_0"
                                castShadow
                                receiveShadow
                                geometry={nodes.node_id293_Material_258_0.geometry}
                                material={materials.Material_258}
                              />
                            </group>
                          </group>
                          <group
                            name="node_id294"
                            position={[-490.39862061, 610.77648926, 371.8739624]}
                            rotation={[-Math.PI / 2, -0.29647514, -Math.PI]}
                            scale={[1.00000191, 1.0000006, 1.00000072]}>
                            <group
                              name="Object_21"
                              rotation={[Math.PI, 0.29343685, -Math.PI]}
                              scale={[254.5344736, 183.69035339, 207.85076588]}>
                              <mesh
                                name="node_id294_Material_260_0"
                                castShadow
                                receiveShadow
                                geometry={nodes.node_id294_Material_260_0.geometry}
                                material={materials.Material_260}
                              />
                            </group>
                          </group>
                        </group>
                        <group
                          name="node_id196"
                          position={[-190.82244873, -961.5279541, 293.18875122]}
                          rotation={[-Math.PI / 2, 0.00000107, -Math.PI / 2]}
                          scale={[1, 0.99999988, 0.99999988]}>
                          <group
                            name="node_id170"
                            position={[383.2026062, 786.61309814, 283.74188232]}
                            rotation={[-1.3e-7, -0.00000113, -Math.PI / 2]}
                            scale={[0.31616104, 0.31616104, 0.31616122]}>
                            <group
                              name="Object_25"
                              position={[845.24194336, 294.94320679, 200.01074219]}
                              rotation={[Math.PI / 2, 0, 0]}
                              scale={[1, 0.16975997, 0.99999982]}>
                              <mesh
                                name="node_id170_Material_53_0"
                                castShadow
                                receiveShadow
                                geometry={nodes.node_id170_Material_53_0.geometry}
                                material={materials.Material_53}
                              />
                            </group>
                            <group name="node_id170_1">
                              <group
                                name="Object_28"
                                position={[747.41278076, 297.87231445, 200.01074219]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={[1, 0.16975997, 0.99999982]}>
                                <mesh
                                  name="node_id170_Material_55_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.node_id170_Material_55_0.geometry}
                                  material={materials.Material_55}
                                />
                              </group>
                            </group>
                            <group name="node_id170_2">
                              <group
                                name="Object_31"
                                position={[942.99230957, 292.03839111, 200.01074219]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={[1, 0.16975997, 0.99999982]}>
                                <mesh
                                  name="node_id170_Material_57_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.node_id170_Material_57_0.geometry}
                                  material={materials.Material_57}
                                />
                              </group>
                            </group>
                            <group name="node_id170_3">
                              <group
                                name="Object_34"
                                position={[745.46862793, 387.86633301, 200.01075745]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={[1, 0.16975996, 0.99999976]}>
                                <mesh
                                  name="node_id170_Material_59_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.node_id170_Material_59_0.geometry}
                                  material={materials.Material_59}
                                />
                              </group>
                            </group>
                            <group name="node_id170_4">
                              <group
                                name="Object_37"
                                position={[843.29779053, 384.93722534, 200.01075745]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={[1, 0.16975996, 0.99999976]}>
                                <mesh
                                  name="node_id170_Material_61_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.node_id170_Material_61_0.geometry}
                                  material={materials.Material_61}
                                />
                              </group>
                            </group>
                            <group name="node_id170_5">
                              <group
                                name="Object_40"
                                position={[941.04815674, 382.03240967, 200.01075745]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={[1, 0.16975996, 0.99999976]}>
                                <mesh
                                  name="node_id170_Material_63_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.node_id170_Material_63_0.geometry}
                                  material={materials.Material_63}
                                />
                              </group>
                            </group>
                          </group>
                          <group
                            name="node_id184"
                            position={[-513.49487305, 655.96746826, 283.74179077]}
                            rotation={[7.3e-7, -7.8e-7, -1e-8]}
                            scale={[0.31616116, 0.31616116, 0.31616122]}>
                            <group
                              name="Object_43"
                              position={[845.24194336, 294.94320679, 200.01074219]}
                              rotation={[Math.PI / 2, 0, 0]}
                              scale={[1, 0.16975997, 0.99999982]}>
                              <mesh
                                name="node_id184_Material_65_0"
                                castShadow
                                receiveShadow
                                geometry={nodes.node_id184_Material_65_0.geometry}
                                material={materials.Material_65}
                              />
                            </group>
                            <group name="node_id184_1">
                              <group
                                name="Object_46"
                                position={[843.29779053, 384.93722534, 200.01075745]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={[1, 0.16975996, 0.99999976]}>
                                <mesh
                                  name="node_id184_Material_67_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.node_id184_Material_67_0.geometry}
                                  material={materials.Material_67}
                                />
                              </group>
                            </group>
                            <group name="node_id184_2">
                              <group
                                name="Object_49"
                                position={[747.41278076, 297.87231445, 200.01074219]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={[1, 0.16975997, 0.99999982]}>
                                <mesh
                                  name="node_id184_Material_69_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.node_id184_Material_69_0.geometry}
                                  material={materials.Material_69}
                                />
                              </group>
                            </group>
                            <group name="node_id184_3">
                              <group
                                name="Object_52"
                                position={[745.46862793, 387.86633301, 200.01075745]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={[1, 0.16975996, 0.99999976]}>
                                <mesh
                                  name="node_id184_Material_71_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.node_id184_Material_71_0.geometry}
                                  material={materials.Material_71}
                                />
                              </group>
                            </group>
                            <group name="node_id184_4">
                              <group
                                name="Object_55"
                                position={[942.99230957, 292.03839111, 200.01074219]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={[1, 0.16975997, 0.99999982]}>
                                <mesh
                                  name="node_id184_Material_73_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.node_id184_Material_73_0.geometry}
                                  material={materials.Material_73}
                                />
                              </group>
                            </group>
                            <group name="node_id184_5">
                              <group
                                name="Object_58"
                                position={[941.04815674, 382.03240967, 200.01075745]}
                                rotation={[Math.PI / 2, 0, 0]}
                                scale={[1, 0.16975996, 0.99999976]}>
                                <mesh
                                  name="node_id184_Material_75_0"
                                  castShadow
                                  receiveShadow
                                  geometry={nodes.node_id184_Material_75_0.geometry}
                                  material={materials.Material_75}
                                />
                              </group>
                            </group>
                          </group>
                        </group>
                        <group name="node_id304_1">
                          <group
                            name="Object_61"
                            position={[361.04455566, -579.81054688, 800.63757324]}
                            rotation={[Math.PI, 0.54514532, -Math.PI]}
                            scale={[0.11278676, 0.40107864, 0.15354602]}>
                            <mesh
                              name="node_id304_Material_236_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.node_id304_Material_236_0.geometry}
                              material={materials.Material_236}
                            />
                          </group>
                        </group>
                        <group name="node_id304_2">
                          <group
                            name="Object_64"
                            position={[292.43218994, -579.8104248, 800.15771484]}
                            rotation={[Math.PI, 0.54514531, -Math.PI]}
                            scale={[0.11278675, 0.40107873, 0.15354604]}>
                            <mesh
                              name="node_id304_Material_238_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.node_id304_Material_238_0.geometry}
                              material={materials.Material_238}
                            />
                          </group>
                        </group>
                        <group name="node_id304_3">
                          <group
                            name="Object_67"
                            position={[294.92929077, -579.81048584, 769.52679443]}
                            rotation={[Math.PI, 0.54514535, -Math.PI]}
                            scale={[0.11278669, 0.40107873, 0.15354604]}>
                            <mesh
                              name="node_id304_Material_240_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.node_id304_Material_240_0.geometry}
                              material={materials.Material_240}
                            />
                          </group>
                        </group>
                        <group name="node_id304_4">
                          <group
                            name="Object_70"
                            position={[332.23181152, -579.81054688, 768.92730713]}
                            rotation={[Math.PI, 0.5451453, -Math.PI]}
                            scale={[0.1127868, 0.4010787, 0.15354606]}>
                            <mesh
                              name="node_id304_Material_242_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.node_id304_Material_242_0.geometry}
                              material={materials.Material_242}
                            />
                          </group>
                        </group>
                        <group name="node_id304_5">
                          <group
                            name="Object_73"
                            position={[360.2906189, -579.81054688, 770.7645874]}
                            rotation={[Math.PI, 0.54514534, -Math.PI]}
                            scale={[0.11278682, 0.40107864, 0.1535461]}>
                            <mesh
                              name="node_id304_Material_244_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.node_id304_Material_244_0.geometry}
                              material={materials.Material_244}
                            />
                          </group>
                        </group>
                        <group name="node_id304_6">
                          <group
                            name="Object_76"
                            position={[556.46020508, -579.81054688, 14.29779053]}
                            rotation={[-Math.PI, 0.54514534, Math.PI]}
                            scale={[0.1127867, 0.40107873, 0.15354604]}>
                            <mesh
                              name="node_id304_Material_246_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.node_id304_Material_246_0.geometry}
                              material={materials.Material_246}
                            />
                          </group>
                        </group>
                        <group name="node_id304_7">
                          <group
                            name="Object_79"
                            position={[588.37268066, -579.81054688, 14.70831394]}
                            rotation={[Math.PI, 0.54514525, -Math.PI]}
                            scale={[0.11278683, 0.4010787, 0.15354607]}>
                            <mesh
                              name="node_id304_Material_248_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.node_id304_Material_248_0.geometry}
                              material={materials.Material_248}
                            />
                          </group>
                        </group>
                        <group name="node_id304_8">
                          <group
                            name="Object_82"
                            position={[588.32116699, -579.81054688, 45.32763672]}
                            rotation={[Math.PI, 0.54514525, -Math.PI]}
                            scale={[0.11278683, 0.4010787, 0.15354607]}>
                            <mesh
                              name="node_id304_Material_250_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.node_id304_Material_250_0.geometry}
                              material={materials.Material_250}
                            />
                          </group>
                        </group>
                        <group name="node_id304_9">
                          <group
                            name="Object_85"
                            position={[557.88684082, -579.81054688, 46.92944336]}
                            rotation={[-Math.PI, 0.54514532, Math.PI]}
                            scale={[0.11278673, 0.40107873, 0.15354604]}>
                            <mesh
                              name="node_id304_Material_252_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.node_id304_Material_252_0.geometry}
                              material={materials.Material_252}
                            />
                          </group>
                        </group>
                        <group name="node_id304_10">
                          <group
                            name="Object_88"
                            position={[557.37597656, -579.80957031, 77.72875977]}
                            rotation={[-Math.PI, 0.54514532, Math.PI]}
                            scale={[0.11278673, 0.40107873, 0.15354606]}>
                            <mesh
                              name="node_id304_Material_254_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.node_id304_Material_254_0.geometry}
                              material={materials.Material_254}
                            />
                          </group>
                        </group>
                        <group name="node_id304_11">
                          <group
                            name="Object_91"
                            position={[587.95220947, -579.81048584, 75.41758728]}
                            rotation={[Math.PI, 0.54514531, -Math.PI]}
                            scale={[0.11278675, 0.40107873, 0.15354606]}>
                            <mesh
                              name="node_id304_Material_256_0"
                              castShadow
                              receiveShadow
                              geometry={nodes.node_id304_Material_256_0.geometry}
                              material={materials.Material_256}
                            />
                          </group>
                        </group>
                      </group>
                      <group name="node_id345_1">
                        <group
                          name="Object_94"
                          position={[1406.60961914, -281.3840332, 227.39453125]}
                          rotation={[-4.1e-7, 5.3e-7, 0]}
                          scale={[100.32237244, 98.90319061, 37.00323486]}>
                          <mesh
                            name="node_id345_Material_232_0"
                            castShadow
                            receiveShadow
                            geometry={nodes.node_id345_Material_232_0.geometry}
                            material={materials.Material_232}
                          />
                        </group>
                      </group>
                    </group>
                    <group name="node_id364_1">
                      <group
                        name="Object_97"
                        position={[1873.73059082, 261.88296509, 258.63430786]}
                        rotation={[-1.7e-7, 3e-7, 0]}
                        scale={[317.2081604, 42.41776657, 161.39295959]}>
                        <mesh
                          name="node_id364_Material_224_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.node_id364_Material_224_0.geometry}
                          material={materials.Material_224}
                        />
                      </group>
                    </group>
                    <group name="node_id364_2">
                      <group
                        name="Object_100"
                        position={[1911.0970459, -476.15447998, 256.20507813]}
                        rotation={[-1.7e-7, 3e-7, 0.00303727]}
                        scale={[244.83815019, 42.51714862, 113.51139069]}>
                        <mesh
                          name="node_id364_Material_226_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.node_id364_Material_226_0.geometry}
                          material={materials.Material_226}
                        />
                      </group>
                    </group>
                    <group name="node_id364_3">
                      <group
                        name="Object_103"
                        position={[1601.09289551, -475.27383423, 258.05371094]}
                        rotation={[-1.7e-7, 3e-7, 0]}
                        scale={[319.46353149, 43.43875122, 158.38023376]}>
                        <mesh
                          name="node_id364_Material_228_0"
                          castShadow
                          receiveShadow
                          geometry={nodes.node_id364_Material_228_0.geometry}
                          material={materials.Material_228}
                        />
                      </group>
                    </group>
                  </group>
                  <group name="node_id375_1">
                    <group
                      name="Object_106"
                      position={[1750.57409668, -271.01852417, 229.30249023]}
                      rotation={[-1.7e-7, 3e-7, 0]}
                      scale={[567.28326416, 137.72846985, 263.34448242]}>
                      <mesh
                        name="node_id375_Material_220_0"
                        castShadow
                        receiveShadow
                        geometry={nodes.node_id375_Material_220_0.geometry}
                        material={materials.Material_220}
                      />
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/arduino_uno/scene.gltf')
