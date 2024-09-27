import { Mesh, MeshPhysicalMaterial, MeshStandardMaterial } from 'three';
import { GLTF } from 'three-stdlib';

export const ANIMATION_SPEED = 0.1;

export interface Scale {
  width: number;
  height: number;
}

export type GLTFResult = GLTF & {
  nodes: {
    Easy_1: Mesh;
    Easy_2: Mesh;
    EasyHole: Mesh;
    Hard_1: Mesh;
    Hard_2: Mesh;
    HardHole: Mesh;
    Medium_1: Mesh;
    Medium_2: Mesh;
    MediumHole: Mesh;
    Solid: Mesh;
    SolidHole: Mesh;
    Paper1: Mesh;
    Paper2: Mesh;
    Paper3: Mesh;
    Paper4: Mesh;
    Paper5: Mesh;
    Paper6: Mesh;
    Paper7: Mesh;
    Paper8: Mesh;
    HoneyCombFrame: Mesh;
    BackTopFrame: Mesh;
    FrontTopFrame: Mesh;
    BackLeftFrame: Mesh;
    FrontLeftFrame: Mesh;
    DoorHandle: Mesh;
    DoorKey: Mesh;
    DoorLock: Mesh;
    BackRightFrame: Mesh;
    FrontRightFrame: Mesh;
    BackLeftArch: Mesh;
    FrontLeftArch: Mesh;
    BackRightArch: Mesh;
    FrontRightArch: Mesh;
    BackTopArch: Mesh;
    FrontTopArch: Mesh;
    Hinge: Mesh;
  };
  materials: {
    melamine: MeshStandardMaterial;
    ducoBlack: MeshStandardMaterial;
    cardboard: MeshStandardMaterial;
    mdf: MeshStandardMaterial;
    tacoHpl: MeshStandardMaterial;
    chrome2: MeshPhysicalMaterial;
    tacoSheet: MeshStandardMaterial;
  };
  animations: [];
};
