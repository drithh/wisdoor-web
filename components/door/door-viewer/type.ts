import { Mesh, MeshPhysicalMaterial, MeshStandardMaterial } from 'three';
import { GLTF } from 'three-stdlib';

export const ANIMATION_SPEED = 0.1;

export interface Scale {
  width: number;
  height: number;
}

export type GLTFResult = GLTF & {
  nodes: {
    Easy: Mesh;
    EasyHole: Mesh;
    Hard: Mesh;
    HardHole: Mesh;
    Medium: Mesh;
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
    cardboard: MeshStandardMaterial;
    mdf: MeshStandardMaterial;
    tacoHpl: MeshStandardMaterial;
    tacoSheet: MeshStandardMaterial;
    inox1: MeshStandardMaterial;
    chrome2: MeshPhysicalMaterial;
  };
  animations: [];
};
