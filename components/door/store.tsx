import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { persistNSync } from 'persist-and-sync';
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

interface KeyHole {
  isKeyHole: boolean;
  price: number;
}

interface WeatherStrip {
  amount: number;
  price: number;
}

interface Frame extends Item {
  architrave: boolean;
}

interface FrameFinishing extends Item {
  color: string;
}

export interface DoorState {
  door: Door;
  size: Size;
  type: Item;
  finishing?: Item;
  keyHole?: KeyHole;
  weatherStrip?: WeatherStrip;
  frame?: Frame;
  frameFinishing?: FrameFinishing;
  frameColor?: Item;
  hinge?: Item;

  setDoor: (door: Door) => void;
  setSize: (size: Size) => void;
  setType: (type: Item) => void;
  setFinishing: (finishing: Item) => void;
  setKeyHole: (keyHole: KeyHole) => void;
  setWeatherStrip: (weatherStrip: WeatherStrip) => void;
  setFrame: (frame: Frame) => void;
  setFrameFinishing: (frameFinishing: FrameFinishing) => void;
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
      setFrameFinishing: (frameFinishing) => set({ frameFinishing }),
      setFrameColor: (frameColor) => set({ frameColor }),
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
