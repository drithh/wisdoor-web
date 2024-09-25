/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.0 public/models/models/door.gltf --t --o components/door/door.tsx 
*/

import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { ANIMATION_SPEED, GLTFResult, Scale } from './type';
import { useDoorStore } from '../store';
import { Group, Mesh, Object3DEventMap } from 'three';
import { useFrame } from '@react-three/fiber';
import { HoneyComb } from './honeycomb';
import { DoorLeaf } from './door-leaf';
import { Hinge } from './hinge';
import { Frame } from './frame';
import { Architrave } from './architrave';
// import { Scale } from 'lucide-react';

export function Model(props: JSX.IntrinsicElements['group']) {
  const result = useGLTF('/models/door.gltf') as GLTFResult;
  const { nodes, materials } = result;
  const storage = useDoorStore();
  const DOOR_SCALE: Scale = {
    width: storage.size.width / 83,
    height: storage.size.height / 210,
  };

  const honeyCombMaterial = materials.mdf;

  const getDoorFinishingMaterial = () => {
    if (storage.finishing?.name === 'HPL Std') {
      return materials.tacoSheet;
    }
    if (storage.finishing?.name === 'PVC Sheet') {
      return materials.tacoHpl;
    }
    return honeyCombMaterial;
  };
  const doorFinishingMaterial = getDoorFinishingMaterial();

  const doorGroupRef = React.useRef<Group<Object3DEventMap> | null>(null);

  useFrame(() => {
    if (doorGroupRef.current) {
      const y =
        DOOR_SCALE.height < 1 ? DOOR_SCALE.height : DOOR_SCALE.height * 1.005;

      doorGroupRef.current.scale.lerp(
        { x: DOOR_SCALE.width, y: y, z: 1 },
        ANIMATION_SPEED
      );
    }
  });

  return (
    <group {...props} dispose={null}>
      <group ref={doorGroupRef}>
        {storage.finishing ? (
          <DoorLeaf
            gltfResult={result}
            name={storage.groove?.name ?? ''}
            material={doorFinishingMaterial}
          />
        ) : (
          <HoneyComb gltfResult={result} material={honeyCombMaterial} />
        )}
      </group>
      <Hinge gltfResult={result} DOOR_SCALE={DOOR_SCALE} />
      <Frame
        gltfResult={result}
        material={doorFinishingMaterial}
        DOOR_SCALE={DOOR_SCALE}
      />
      <Architrave
        gltfResult={result}
        material={doorFinishingMaterial}
        DOOR_SCALE={DOOR_SCALE}
      />
      {storage.keyHole?.isAdded && (
        <mesh geometry={nodes.Hole.geometry} visible={false} />
      )}
    </group>
  );
}

useGLTF.preload('/models/door.gltf');
