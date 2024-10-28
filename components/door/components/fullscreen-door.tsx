import React, { useEffect, useRef, useState } from 'react';
import { Html } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Vector3 } from 'three';

interface FullscreenDoorProps {
  wrapperRef: React.RefObject<HTMLDivElement>;
}

export function FullscreenDoor({ wrapperRef }: FullscreenDoorProps) {
  const [text, setText] = useState('Fullscreen');
  const toggleFullscreen = () => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    if (wrapper.requestFullscreen) {
      if (document.fullscreenElement) {
        setText('Fullscreen');
        document.exitFullscreen();
      } else {
        setText('Exit');
        wrapper.requestFullscreen();
      }
    }
  };

  return (
    <Button
      className="absolute z-[10000] right-2 bottom-2"
      onClick={toggleFullscreen}
    >
      {text}
    </Button>
  );
}
