import { Mesh, MeshPhysicalMaterial, MeshStandardMaterial } from 'three';
import { GLTF } from 'three-stdlib';

export type GLTFResult = GLTF & {
  nodes: {
    Paper1: Mesh;
    Paper2: Mesh;
    Paper3: Mesh;
    Paper4: Mesh;
    Paper5: Mesh;
    Paper6: Mesh;
    Paper7: Mesh;
    Paper8: Mesh;
    Cube004: Mesh;
    Cube004_1: Mesh;
    Cube004_2: Mesh;
    Cube004_3: Mesh;
    Handle: Mesh;
    Handle_1: Mesh;
    Hinge: Mesh;
    Horizontal2Stripe: Mesh;
    Horizontal3Stripe: Mesh;
    Solid: Mesh;
    Vertical3Stripe: Mesh;
    ArchFrontLeft: Mesh;
    ArchFrontRight: Mesh;
    ArchFrontTop: Mesh;
    ArchBackLeft: Mesh;
    ArchBackRight: Mesh;
    ArchBackTop: Mesh;
    FrameLeft: Mesh;
    FrameRight: Mesh;
    FrameTop: Mesh;
  };
  materials: {
    cardboard: MeshStandardMaterial;
    chrome2: MeshPhysicalMaterial;
    chrome1: MeshStandardMaterial;
    plywood: MeshStandardMaterial;
    tacoHpl: MeshStandardMaterial;
    ducoBlack: MeshStandardMaterial;
    ducoWhite: MeshStandardMaterial;
    tacoSheet: MeshStandardMaterial;
    mdf: MeshStandardMaterial;
    melamin: MeshStandardMaterial;
  };
  animations: [];
};
