import { Material } from 'three';
import { GLTFResult } from './type';

interface HoneyCombProps {
  gltfResult: GLTFResult;
  material: Material;
}

export function HoneyComb({ gltfResult, material }: HoneyCombProps) {
  const { nodes, materials } = gltfResult;

  return (
    <group>
      <mesh
        geometry={nodes.HoneyCombFrame.geometry}
        material={material}
        position={[0.405, 2.052, 0.026]}
      />
      <mesh
        geometry={nodes.Paper1.geometry}
        material={materials.cardboard}
        position={[0, -1.669, 0]}
      />
      <mesh
        geometry={nodes.Paper2.geometry}
        material={materials.cardboard}
        position={[0, -1.431, 0]}
      />
      <mesh
        geometry={nodes.Paper3.geometry}
        material={materials.cardboard}
        position={[0, -1.192, 0]}
      />
      <mesh
        geometry={nodes.Paper4.geometry}
        material={materials.cardboard}
        position={[0, -0.954, 0]}
      />
      <mesh
        geometry={nodes.Paper5.geometry}
        material={materials.cardboard}
        position={[0, -0.715, 0]}
      />
      <mesh
        geometry={nodes.Paper6.geometry}
        material={materials.cardboard}
        position={[0, -0.477, 0]}
      />
      <mesh
        geometry={nodes.Paper7.geometry}
        material={materials.cardboard}
        position={[0, -0.238, 0]}
      />
      <mesh geometry={nodes.Paper8.geometry} material={materials.cardboard} />
    </group>
  );
}
