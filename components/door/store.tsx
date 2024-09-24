import { create } from 'zustand';
import { persist } from 'zustand/middleware';
interface Item {
  name: string;
  price: number;
}

interface Door {
  id: string;
  name: string;
}

interface Size extends Item {
  width: number;
  length: number;
}

interface IsAdded {
  isAdded: boolean;
  price: number;
}

interface Frame extends Item {
  architrave: boolean;
}

export interface DoorState {
  door: Door;
  size: Size;
  finishing?: Item;
  groove?: Item;
  frame?: Frame;
  keyHole?: IsAdded;
  cylinder?: IsAdded;
  handle?: IsAdded;
  key?: IsAdded;
  hinge?: IsAdded;

  setDoor: (door: Door) => void;
  setSize: (size: Size) => void;
  setFinishing: (finishing: Item) => void;
  setGroove: (groove: Item) => void;
  setFrame: (frame: Frame) => void;
  setKeyHole: (keyHole: IsAdded) => void;
  setCylinder: (cylinder: IsAdded) => void;
  setHandle: (handle: IsAdded) => void;
  setKey: (key: IsAdded) => void;
  setHinge: (hinge: IsAdded) => void;
}

export const useDoorStore = create(
  persist<DoorState>(
    (set) => ({
      door: { id: 'utama', name: 'Pintu Utama' },
      size: { name: '', price: 0, width: 83, length: 210 },
      setDoor: (door) => set({ door }),
      setSize: (size) => set({ size }),
      setFinishing: (finishing) => set({ finishing }),
      setGroove: (groove) => set({ groove }),
      setFrame: (frame) => set({ frame }),
      setKeyHole: (keyHole) => set({ keyHole }),
      setCylinder: (cylinder) => set({ cylinder }),
      setHandle: (handle) => set({ handle }),
      setKey: (key) => set({ key }),
      setHinge: (hinge) => set({ hinge }),
    }),
    {
      name: 'door-configuration',
      merge: (persistedState, currentState) => ({
        ...currentState,
        ...(persistedState as DoorState),
      }),
    }
  )
);
