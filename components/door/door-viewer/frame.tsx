import { Group, Material, Mesh, Vector3 } from 'three';
import { ANIMATION_SPEED, GLTFResult, Scale } from './type';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useDoorStore } from '../store';

interface FrameProps {
  gltfResult: GLTFResult;
  material: Material;
  DOOR_SCALE: Scale;
}

export function Frame({ gltfResult, material, DOOR_SCALE }: FrameProps) {
  const { nodes, materials } = gltfResult;
  const topFrameRef = useRef<Group>(null);
  const rightFrameRef = useRef<Group>(null);
  const leftFrameRef = useRef<Group>(null);
  const frontTopFrameRef = useRef<Mesh>(null);
  const frontRightFrameRef = useRef<Mesh>(null);
  const frontLeftFrameRef = useRef<Mesh>(null);

  const storage = useDoorStore();
  const frameName = storage.frame?.name;
  useFrame(() => {
    const frameTopScale = new Vector3(1, 1, frameName === 'Kecil' ? 1 : 1.68);
    if (frontTopFrameRef.current) {
      frontTopFrameRef.current?.scale.lerp(frameTopScale, ANIMATION_SPEED);
    }
    if (frontLeftFrameRef.current) {
      frontLeftFrameRef.current?.scale.lerp(frameTopScale, ANIMATION_SPEED);
    }
    if (frontRightFrameRef.current) {
      frontRightFrameRef.current?.scale.lerp(frameTopScale, ANIMATION_SPEED);
    }
    if (rightFrameRef.current) {
      rightFrameRef.current.position.lerp(
        { x: 0.8 * (DOOR_SCALE.width - 1), y: 0, z: 0 },
        ANIMATION_SPEED
      );
      rightFrameRef.current.scale.lerp(
        { x: 1, y: DOOR_SCALE.height, z: 1 },
        ANIMATION_SPEED
      );
    }
    if (leftFrameRef.current) {
      leftFrameRef.current.scale.lerp(
        {
          x: 1,
          y: DOOR_SCALE.height,
          z: 1,
        },
        ANIMATION_SPEED
      );
    }
    if (topFrameRef.current) {
      topFrameRef.current.scale.lerp(
        { x: -1 * DOOR_SCALE.width, y: 1, z: 1 },
        ANIMATION_SPEED
      );
      topFrameRef.current.position.lerp(
        { x: 0, y: 2.1 + 2.16 * (DOOR_SCALE.height - 1), z: 0.04 },
        ANIMATION_SPEED
      );
    }
  });
  if (frameName === 'Tanpa Kusen') {
    return null;
  }
  return (
    <group>
      <group position={[0, 2.1, 0.04]} ref={topFrameRef}>
        <mesh
          geometry={nodes.BackTopFrame.geometry}
          material={material}
          position={[-0.4, -2.1, -0.04]}
        />
        <mesh
          geometry={nodes.FrontTopFrame.geometry}
          material={material}
          position={[0, 0.005, 0]}
          ref={frontTopFrameRef}
        />
      </group>
      <group ref={leftFrameRef}>
        <mesh geometry={nodes.BackLeftFrame.geometry} material={material} />
        <mesh
          geometry={nodes.FrontLeftFrame.geometry}
          material={material}
          position={[0, 1.05, 0.04]}
          ref={frontLeftFrameRef}
        />
      </group>
      <group ref={rightFrameRef}>
        <mesh geometry={nodes.BackRightFrame.geometry} material={material} />
        <mesh
          geometry={nodes.FrontRightFrame.geometry}
          material={material}
          position={[0.81, 1.055, 0.04]}
          ref={frontRightFrameRef}
        />
      </group>
    </group>
  );
}
