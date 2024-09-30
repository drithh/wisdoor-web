import { BufferGeometry, Material, NormalBufferAttributes } from 'three';
import { GLTFResult } from './type';
import { useDoorStore } from '../store';

interface DoorLeafProps {
  gltfResult: GLTFResult;
  name: string;
  material: Material;
}

export function DoorLeaf({ gltfResult, name, material }: DoorLeafProps) {
  const { nodes, materials } = gltfResult;
  const { keyHole } = useDoorStore();
  const getGeometry = (): [
    BufferGeometry<NormalBufferAttributes>,
    BufferGeometry<NormalBufferAttributes> | null
  ] => {
    switch (name.toLowerCase()) {
      case 'simple':
        return [nodes.Easy_1.geometry, nodes.Easy_2.geometry];
      case 'intermediate':
        return [nodes.Medium_1.geometry, nodes.Medium_2.geometry];
      case 'expert':
        return [nodes.Hard_1.geometry, nodes.Hard_2.geometry];
      default:
        return [nodes.Solid.geometry, null];
    }
  };
  const [door1Geometry, door2Geometry] = getGeometry();
  return (
    <group>
      <mesh geometry={door1Geometry} material={material} />
      {door2Geometry !== null ? (
        <mesh geometry={door2Geometry} material={materials.ducoBlack} />
      ) : null}
      {keyHole?.isAdded === true ? null : (
        <mesh geometry={nodes.Hole.geometry} material={material} />
      )}
    </group>
  );
}
