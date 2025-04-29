import React, { useEffect, useRef, useState } from 'react';
import { Html } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { Vector3 } from 'three';
import { MaximizeIcon, MinimizeIcon } from '@/lib/icons';

interface FullscreenDoorProps {
  wrapperRef: React.RefObject<HTMLDivElement>;
}

export function FullscreenDoor({ wrapperRef }: FullscreenDoorProps) {
  const [fullScreen, setFullScreen] = useState(false);
  const width = useRef(0);
  const height = useRef(0);
  const toggleFullscreen = () => {
    const configuratorWrapper = document.getElementById('configurator-wrapper');
    const wrapper = wrapperRef.current;

    if (!configuratorWrapper) return;
    if (!wrapper) return;

    if (!fullScreen) {
      setFullScreen(true);
      width.current = wrapper.clientWidth;
      height.current = wrapper.clientHeight;

      wrapper.style.width = '100dvw';
      wrapper.style.height = '100dvh';

      configuratorWrapper.style.display = 'none';
    } else {
      setFullScreen(false);
      configuratorWrapper.style.display = 'block';

      wrapper.style.width = `${width.current}px`;
      wrapper.style.height = `${height.current}px`;
    }
  };

  return (
    <Button
      variant={'ghost'}
      className="absolute z-[10000] right-2 bottom-2"
      onClick={toggleFullscreen}
    >
      {fullScreen ? <MinimizeIcon /> : <MaximizeIcon />}
    </Button>
  );
}
