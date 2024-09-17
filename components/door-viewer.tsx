import { Canvas } from '@react-three/fiber';
import {
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
  Stage,
} from '@react-three/drei';
import { Model } from './door/door';
import { Suspense } from 'react';
import { useDoorStore } from './door/store';

export function DoorViewer() {
  return (
    <div className="flex-1 sticky top-0  max-h-[1080px]">
      <Canvas>
        <Suspense>
          <color attach="background" args={['#ffffff']} />
          <fog attach="fog" args={['#ffffff', 5, 15]} />
          <OrbitControls
            enableZoom={true}
            // enableRotate={false}
            // enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={0}
          />
          <PresentationControls
            speed={1.5}
            global
            polar={[-Math.PI / 4, Math.PI / 4]}
            rotation={[0, Math.PI / 4, 0]}
          >
            <Stage environment="forest" intensity={0.4}>
              <mesh position={[0, 2, 0]}>
                <Model />
                <meshStandardMaterial roughness={0.8} metalness={0.1} />
              </mesh>
            </Stage>
            <ambientLight intensity={0.3} />
          </PresentationControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
