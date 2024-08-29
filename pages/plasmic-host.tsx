import * as React from 'react';
import {
  PlasmicCanvasHost,
  registerComponent,
} from '@plasmicapp/react-web/lib/host';
import { Navigation } from '@/components/Navigation';
import { GradualSpacing } from '@/components/magicui/gradual-spacing';
import { BlurFade } from '@/components/magicui/blur-fade';
import { Hero } from '@/components/Hero';

// You can register any code components that you want to use here; see
// https://docs.plasmic.app/learn/code-components-ref/
// And configure your Plasmic project to use the host url pointing at
// the /plasmic-host page of your nextjs app (for example,
// http://localhost:3000/plasmic-host).  See
// https://docs.plasmic.app/learn/app-hosting/#set-a-plasmic-project-to-use-your-app-host

// registerComponent(...)

registerComponent(Navigation, {
  name: 'Navigation',
  props: {
    image: {
      type: 'imageUrl',
      defaultValue: '/placeholder.svg',
    },
    alt: {
      type: 'string',
      defaultValue: 'Logo Wisdoor',
    },
  },

  // Specify how generated Plasmic code should import this component;
  // path is relative to srcDir
  importPath: './components/Navigation',
});

registerComponent(Hero, {
  name: 'Hero',
  props: {
    image: {
      type: 'imageUrl',
      defaultValue: '/placeholder.svg',
    },
    alt: {
      type: 'string',
      defaultValue: 'Logo Wisdoor',
    },
  },

  // Specify how generated Plasmic code should import this component;
  // path is relative to srcDir
  importPath: './components/Hero',
});

registerComponent(GradualSpacing, {
  name: 'GradualSpacing',
  props: {
    text: {
      type: 'richText',
    },
    duration: {
      type: 'number',
      defaultValue: 0.5,
    },
    delayMultiple: {
      type: 'number',
      defaultValue: 0.04,
    },
    framerProps: {
      type: 'object',
      defaultValue: {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      },
    },
    className: {
      type: 'string',
    },
  },

  // Specify how generated Plasmic code should import this component;
  // path is relative to srcDir
  importPath: './components/magicui/gradual-spacing',
});

registerComponent(BlurFade, {
  name: 'BlurFade',
  props: {
    children: {
      type: 'slot',
    },
    className: {
      type: 'string',
    },
    variant: {
      type: 'object',
      defaultValue: {
        hidden: { y: 6, opacity: 0, filter: 'blur(6px)' },
        visible: { y: -6, opacity: 1, filter: 'blur(0px)' },
      },
    },
    duration: {
      type: 'number',
      defaultValue: 0.4,
    },
    delay: {
      type: 'number',
      defaultValue: 0,
    },
    yOffset: {
      type: 'number',
      defaultValue: 6,
    },
    inView: {
      type: 'boolean',
      defaultValue: false,
    },
    inViewMargin: {
      type: 'string',
      defaultValue: '-50px',
    },
    blur: {
      type: 'string',
      defaultValue: '6px',
    },
  },

  // Specify how generated Plasmic code should import this component;
  // path is relative to srcDir
  importPath: './components/magicui/blur-fade',
});

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
