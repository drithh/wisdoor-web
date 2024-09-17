import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

export type GLTFResult = GLTF & {
  nodes: {
    ['2_Tali_Air_Horizontal']: THREE.Mesh;
    ['3_Tali_Air_Horizontal']: THREE.Mesh;
    ['3_Tali_Air_Vertikal']: THREE.Mesh;
    Daun_Pintu_Polos: THREE.Mesh;
    Engsel_Pintu: THREE.Mesh;
    ['Handel_&_Kunci_Pintu']: THREE.Mesh;
    Rangka_Honey_Comb001: THREE.Mesh;
    ArchFrontLeft: THREE.Mesh;
    ArchFrontRight: THREE.Mesh;
    ArchFrontTop: THREE.Mesh;
    ArchBackLeft: THREE.Mesh;
    ArchBackRight: THREE.Mesh;
    ArchBackTop: THREE.Mesh;
    FrameLeft: THREE.Mesh;
    FrameRight: THREE.Mesh;
    FrameTop: THREE.Mesh;
  };
  materials: {
    melamin: THREE.MeshStandardMaterial;
    hpl: THREE.MeshStandardMaterial;
    Chrome: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    ['Melamin.001']: THREE.MeshStandardMaterial;
    plywood: THREE.MeshStandardMaterial;
    mdf: THREE.MeshStandardMaterial;
  };
  animations: [];
};
