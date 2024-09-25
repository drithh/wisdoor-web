import { Group, Material } from 'three';
import { ANIMATION_SPEED, GLTFResult, Scale } from './type';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

interface HingeProps {
  gltfResult: GLTFResult;
  DOOR_SCALE: Scale;
}

export function Hinge({ gltfResult, DOOR_SCALE }: HingeProps) {
  const { nodes, materials } = gltfResult;
  const TOTAL_HINGES = 3;
  const distance = 0.2;
  const gap = (2.034 - distance * 2) / (TOTAL_HINGES - 1);

  const ref = useRef<Group>(null);

  useFrame(() => {
    if (ref.current) {
      ref.current?.position.lerp(
        {
          x: 0.81 + 0.81 * (DOOR_SCALE.width - 1),
          y: 1 * (DOOR_SCALE.height - 1),
          z: 0.001,
        },
        ANIMATION_SPEED
      );
    }
  });
  return (
    <group ref={ref}>
      {Array.from({ length: TOTAL_HINGES }).map((_, index) => (
        <mesh
          key={index}
          geometry={nodes.Hinge.geometry}
          material={materials.chrome2}
          position={[0, distance + index * gap, 0]}
        />
      ))}
      {/* <mesh
        geometry={nodes.Hinge.geometry}
        material={materials.chrome2}
        position={[0.809, 2.034, 0]}
      /> */}
    </group>
  );
}
