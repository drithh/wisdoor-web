import { Canvas } from '@react-three/fiber';
import {
  Bounds,
  Center,
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
  Stage,
} from '@react-three/drei';
import { Model } from './door/door-viewer';
import { Suspense } from 'react';
import { useDoorStore } from './door/store';

export function DoorViewer() {
  return (
    <div className="flex-1 z-[1000] sticky top-0 sm:h-screen max-h-screen">
      <Canvas className="!h-[24rem] sm:!h-screen">
        <Suspense fallback={<Center>Loading...</Center>}>
          <OrbitControls
            enableRotate={false}
            enablePan={true}
            enableZoom={true}
            minZoom={0.5}
            maxZoom={0.6}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={0}
          />
          <PresentationControls
            speed={1.5}
            config={{ mass: 1, tension: 170, friction: 26 }}
            global
            polar={[-Math.PI / 4, Math.PI / 4]}
            rotation={[0, Math.PI / 4, 0]}
          >
            <Stage environment={'city'} intensity={5}>
              <mesh position={[0, 0, 0]}>
                <Model />
              </mesh>
              <ambientLight intensity={5} />
            </Stage>
          </PresentationControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
