import { Material } from 'three';
import { GLTFResult } from './type';

interface DoorLeafProps {
  gltfResult: GLTFResult;
  name: string;
  material: Material;
}

export function DoorLeaf({ gltfResult, name, material }: DoorLeafProps) {
  const { nodes } = gltfResult;
  switch (name) {
    case 'simple':
      return <mesh geometry={nodes.Easy.geometry} material={material} />;
    case 'intermediate':
      return (
        <group>
          <mesh geometry={nodes.MediumLeft.geometry} material={material} />
          <mesh geometry={nodes.MediumMid.geometry} material={material} />
          <mesh geometry={nodes.MediumRight.geometry} material={material} />
        </group>
      );
    case 'expert':
      return <mesh geometry={nodes.Hard.geometry} material={material} />;
    default:
      return <mesh geometry={nodes.Solid.geometry} material={material} />;
  }
}
