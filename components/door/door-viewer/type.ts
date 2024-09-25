import { Mesh, MeshPhysicalMaterial, MeshStandardMaterial } from 'three';
import { GLTF } from 'three-stdlib';

export const ANIMATION_SPEED = 0.1;

export interface Scale {
  width: number;
  height: number;
}

export type GLTFResult = GLTF & {
  nodes: {
    MediumLeft: Mesh;
    MediumMid: Mesh;
    MediumRight: Mesh;
    Easy: Mesh;
    Hard: Mesh;
    Solid: Mesh;
    Paper1: Mesh;
    Paper2: Mesh;
    Paper3: Mesh;
    Paper4: Mesh;
    Paper5: Mesh;
    Paper6: Mesh;
    Paper7: Mesh;
    Paper8: Mesh;
    HoneyCombFrame: Mesh;
    BackLeftFrame: Mesh;
    BackRightFrame: Mesh;
    BackTopFrame: Mesh;
    BackLeftArch: Mesh;
    BackRightArch: Mesh;
    BackTopArch: Mesh;
    FrontLeftFrame: Mesh;
    FrontRightFrame: Mesh;
    FrontTopFrame: Mesh;
    FrontLeftArch: Mesh;
    FrontRightArch: Mesh;
    FrontTopArch: Mesh;
    DoorHandle: Mesh;
    DoorKey: Mesh;
    DoorLock: Mesh;
    Hinge: Mesh;
    Hole: Mesh;
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
