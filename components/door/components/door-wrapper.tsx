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
import { Suspense, useRef } from 'react';
import { useDoorStore } from '../store';
import { FullscreenDoor } from './fullscreen-door';

export function DoorWrapper() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={wrapperRef}
      className="h-[16rem] z-100 sm:w-[calc(100vw-482px)] w-dvw sm:h-dvh sm:sticky top-0 fixed bg-white "
    >
      <FullscreenDoor wrapperRef={wrapperRef} />
      <Canvas id="door-canvas" className=" bg-white">
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
