import React, { useEffect, useRef, useState } from 'react';
import { Html } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Vector3 } from 'three';
import { Icon, Maximize, Minimize } from 'lucide-react';

interface FullscreenDoorProps {
  wrapperRef: React.RefObject<HTMLDivElement>;
}

export function FullscreenDoor({ wrapperRef }: FullscreenDoorProps) {
  const [fullScreen, setFullScreen] = useState(false);
  const toggleFullscreen = () => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;
    if (wrapper.requestFullscreen) {
      if (document.fullscreenElement) {
        setFullScreen(false);
        document?.exitFullscreen();
        // @ts-ignore
        document?.webkitCancelFullScreen();
      } else {
        setFullScreen(true);
        wrapper?.requestFullscreen();
        // @ts-ignore
        wrapper?.webkitRequestFullScreen();
      }
    }
  };

  return (
    <Button
      variant={'ghost'}
      className="absolute z-[10000] right-2 bottom-2"
      onClick={toggleFullscreen}
    >
      {fullScreen ? <Minimize /> : <Maximize />}
    </Button>
  );
}
