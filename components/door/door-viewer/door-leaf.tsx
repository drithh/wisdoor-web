import { Material } from 'three';
import { GLTFResult } from './type';
import { useDoorStore } from '../store';

interface DoorLeafProps {
  gltfResult: GLTFResult;
  name: string;
  material: Material;
}

export function DoorLeaf({ gltfResult, name, material }: DoorLeafProps) {
  const { nodes } = gltfResult;
  const { keyHole } = useDoorStore();
  const getGeometry = () => {
    switch (name.toLowerCase()) {
      case 'simple':
        return [nodes.Easy.geometry, nodes.EasyHole.geometry];
      case 'intermediate':
        return [nodes.Medium.geometry, nodes.MediumHole.geometry];
      case 'expert':
        return [nodes.Hard.geometry, nodes.HardHole.geometry];
      default:
        return [nodes.Solid.geometry, nodes.SolidHole.geometry];
    }
  };
  const [doorGeometry, holeGeometry] = getGeometry();
  return (
    <group>
      <mesh geometry={doorGeometry} material={material} />
      {keyHole?.isAdded === true ? null : (
        <mesh geometry={holeGeometry} material={material} />
      )}
    </group>
  );
}
