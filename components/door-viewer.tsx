import { Canvas } from '@react-three/fiber';
import {
  MeshReflectorMaterial,
  OrbitControls,
  PerspectiveCamera,
  PresentationControls,
  Stage,
} from '@react-three/drei';
import { Model } from './door/door';

export function DoorViewer() {
  return (
    <div className="flex-1 sticky top-0 md:h-screen max-h-[1080px]">
      <Canvas>
        <color attach="background" args={['#ffffff']} />{' '}
        <fog attach="fog" args={['#ffffff', 5, 15]} />{' '}
        <OrbitControls
          enableZoom={true}
          enableRotate={false} // Disable rotation
          enablePan={false} // Disable panning
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
              {/* <boxGeometry args={[1, 2.5, 0.1]} />{' '} */}
              <meshStandardMaterial roughness={0.8} metalness={0.1} />
            </mesh>
          </Stage>

          <ambientLight intensity={0.3} />
        </PresentationControls>
      </Canvas>
    </div>
  );
}
