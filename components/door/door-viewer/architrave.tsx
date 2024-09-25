import { Group, Material, Mesh, Vector3 } from 'three';
import { ANIMATION_SPEED, GLTFResult, Scale } from './type';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useDoorStore } from '../store';

interface ArchitraveProps {
  gltfResult: GLTFResult;
  material: Material;
  DOOR_SCALE: Scale;
}

export function Architrave({
  gltfResult,
  material,
  DOOR_SCALE,
}: ArchitraveProps) {
  const { nodes, materials } = gltfResult;
  const topArchitraveRef = useRef<Group>(null);
  const rightArchitraveRef = useRef<Group>(null);
  const leftArchitraveRef = useRef<Group>(null);

  const storage = useDoorStore();
  useFrame(() => {
    if (rightArchitraveRef.current) {
      rightArchitraveRef.current.position.lerp(
        { x: 0.8 * (DOOR_SCALE.width - 1), y: 0, z: 0 },
        ANIMATION_SPEED
      );
      rightArchitraveRef.current.scale.lerp(
        { x: 1, y: DOOR_SCALE.height, z: 1 },
        ANIMATION_SPEED
      );
    }
    if (leftArchitraveRef.current) {
      leftArchitraveRef.current.scale.lerp(
        {
          x: 1,
          y: DOOR_SCALE.height,
          z: 1,
        },
        ANIMATION_SPEED
      );
    }
    if (topArchitraveRef.current) {
      const x =
        DOOR_SCALE.width > 1 ? DOOR_SCALE.width : DOOR_SCALE.width * 1.015;
      topArchitraveRef.current.scale.lerp(
        { x: x, y: 1, z: 1 },
        ANIMATION_SPEED
      );
      topArchitraveRef.current.position.lerp(
        { x: -0.014, y: 2.137 + 2.16 * (DOOR_SCALE.height - 1), z: 0 },
        ANIMATION_SPEED
      );
    }
  });
  if (storage.frame?.architrave !== undefined && !storage.frame?.architrave) {
    return null;
  }
  return (
    <group>
      <group position={[-0.014, 2.137, 0]} ref={topArchitraveRef}>
        <mesh geometry={nodes.BackTopArch.geometry} material={material} />
        <mesh
          geometry={nodes.FrontTopArch.geometry}
          material={material}
          position={[0, 0, 0.04]}
        />
      </group>
      <group ref={leftArchitraveRef}>
        <mesh geometry={nodes.BackLeftArch.geometry} material={material} />
        <mesh
          geometry={nodes.FrontLeftArch.geometry}
          material={material}
          position={[0, 0, 0.04]}
        />
      </group>
      <group ref={rightArchitraveRef}>
        <mesh geometry={nodes.BackRightArch.geometry} material={material} />
        <mesh
          geometry={nodes.FrontRightArch.geometry}
          material={material}
          position={[0, 0, 0.04]}
        />
      </group>
    </group>
  );
}
