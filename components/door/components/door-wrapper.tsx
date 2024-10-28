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
import { Model } from '../door-viewer';
// import { Model } from '@/components/door/door';
import { Suspense } from 'react';
import { useDoorStore } from '../store';

export function DoorWrapper() {
  return (
    <div className="flex-1 z-100 top-0 sm:sticky max-h-screen bg-white ">
      <Canvas className="!h-[16rem] sm:!h-screen">
        <Suspense fallback={<Center>Loading...</Center>}>
          <OrbitControls
            enableRotate={false}
            enablePan={false}
            enableZoom={true}
            minZoom={0.5}
            maxZoom={0.6}
            maxPolarAngle={Math.PI}
            minPolarAngle={0}
          />
          <PresentationControls
            speed={1.5}
            config={{ mass: 1, tension: 170, friction: 26 }}
            global
            polar={[-Math.PI / 4, Math.PI / 4]}
            rotation={[0, Math.PI / 4, 0]}
          >
            <Stage shadows={false}>
              <mesh position={[0, 0, 0]}>
                <Model />
              </mesh>
              <ambientLight intensity={1.5} />
            </Stage>
          </PresentationControls>
        </Suspense>
      </Canvas>
    </div>
  );
}
