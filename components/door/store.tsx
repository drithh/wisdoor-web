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
  limit?: boolean;
}

export interface DoorState {
  door: Door;
  size: Size;
  type: Item;
  finishing?: Item;
  keyHole?: Item;
  weatherStrip?: Item;
  frame?: Item;
  architrave?: boolean;
  frameFinishing?: Item;
  frameColor?: Item;
  hinge?: Item;

  setDoor: (door: Door) => void;
  setSize: (size: Size) => void;
  setType: (type: Item) => void;
  setFinishing: (finishing: Item) => void;
  setKeyHole: (keyHole: Item) => void;
  setWeatherStrip: (weatherStrip: Item) => void;
  setFrame: (frame: Item) => void;
  setArchitrave: (architrave: boolean) => void;
  setFrameFinishing: (frameFinishing: Item) => void;
  setFrameColor: (frameColor: Item) => void;
  setHinge: (hinge: Item) => void;
}

export const useDoorStore = create(
  persist<DoorState>(
    (set) => ({
      door: { id: '', name: '' },
      size: { name: '', price: 0, length: 0, width: 0 },
      type: { name: '', price: 0 },
      finishing: undefined,
      keyHole: undefined,
      weatherStrip: undefined,
      frame: undefined,
      architrave: false,
      frameFinishing: undefined,
      frameColor: undefined,
      hinge: undefined,
      setDoor: (door) => set({ door }),
      setSize: (size) => set({ size }),
      setType: (type) => set({ type }),
      setFinishing: (finishing) => set({ finishing }),
      setKeyHole: (keyHole) => set({ keyHole }),
      setWeatherStrip: (weatherStrip) => set({ weatherStrip }),
      setFrame: (frame) => set({ frame }),
      setArchitrave: (architrave) => set({ architrave }),
      setFrameFinishing: (frameFinishing) => set({ frameFinishing }),
      setFrameColor: (frameColor) => set({ frameColor }),
      setHinge: (hinge) => set({ hinge }),
    }),
    {
      name: 'door-configuration',
    }
  )
);
