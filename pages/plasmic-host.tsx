import * as React from 'react';
import {
  PlasmicCanvasHost,
  registerComponent,
} from '@plasmicapp/react-web/lib/host';
import { Navigation } from '@/components/navigation';
import { GradualSpacing } from '@/components/magicui/gradual-spacing';
import { BlurFade } from '@/components/magicui/blur-fade';
import { Hero } from '@/components/hero';
import { PulsatingButton } from '@/components/magicui/pulsating-button';
import { TiptapTextViewer } from '@/components/rich-text';
import { ImageGradient } from '@/components/image-gradient';
import { MultipleProduct } from '@/components/multiple-product';
import { SingleProductText } from '@/components/single-product';
import BoxReveal from '@/components/magicui/box-reveal';
import { DoorViewer } from '@/components/door-viewer';
import { DoorButton } from '@/components/door/components/button';
import { ChooseDoor } from '@/components/door/configurator/choose';
import { SizeDoor } from '@/components/door/configurator/size';
import { TypeDoor } from '@/components/door/configurator/type';
import { FinishingDoor } from '@/components/door/configurator/finishing';
import { AddonDoor } from '@/components/door/configurator/addon';

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
  importPath: './components/navigation',
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
  importPath: './components/hero',
});

registerComponent(TiptapTextViewer, {
  name: 'TiptapTextViewer',
  props: {
    content: {
      type: 'richText',
    },
  },
  importPath: './components/rich-text',
});

registerComponent(ImageGradient, {
  name: 'ImageGradient',
  props: {
    image: {
      type: 'imageUrl',
      defaultValue: '/placeholder.svg',
    },
    alt: {
      type: 'string',
      defaultValue: 'Logo Wisdoor',
    },
    gradientTopWhite: {
      type: 'boolean',
      defaultValue: false,
    },
    gradientBottomBlack: {
      type: 'boolean',
      defaultValue: false,
    },
  },
  importPath: './components/image-gradient',
});

registerComponent(MultipleProduct, {
  name: 'MultipleProduct',
  props: {
    products: {
      type: 'array',
      itemType: {
        type: 'object',
        fields: {
          title: {
            type: 'string',
            defaultValue: 'Product',
          },
          description: {
            type: 'string',
            defaultValue: 'Description',
          },
          image: {
            type: 'imageUrl',
            defaultValue: '/placeholder.svg',
          },
        },
      },
    },
    className: {
      type: 'string',
    },
  },
  importPath: './components/multiple-product',
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

registerComponent(BoxReveal, {
  name: 'BoxReveal',
  props: {
    children: {
      type: 'slot',
    },
    width: {
      type: 'string',
      defaultValue: 'fit-content',
    },
    boxColor: {
      type: 'string',
    },
    duration: {
      type: 'number',
    },
  },

  // Specify how generated Plasmic code should import this component;
  // path is relative to srcDir
  importPath: './components/magicui/box-reveal',
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

registerComponent(PulsatingButton, {
  name: 'PulsatingButton',
  props: {
    children: {
      type: 'slot',
    },
    className: {
      type: 'string',
    },
    pulseColor: {
      type: 'string',
      defaultValue: '#22c55e',
    },
    duration: {
      type: 'string',
      defaultValue: '1.5s',
    },
  },

  // Specify how generated Plasmic code should import this component;
  // path is relative to srcDir
  importPath: './components/magicui/pulsating-button',
});

registerComponent(SingleProductText, {
  name: 'SingleProductText',
  props: {
    title: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    className: {
      type: 'string',
    },
  },

  // Specify how generated Plasmic code should import this component;
  // path is relative to srcDir
  importPath: './components/single-product',
});

registerComponent(DoorViewer, {
  name: 'DoorViewer',
  props: {},

  // Specify how generated Plasmic code should import this component;
  // path is relative to srcDir
  importPath: './components/door-viewer',
});

registerComponent(DoorButton, {
  name: 'DoorButton',
  props: {
    children: {
      type: 'slot',
    },
    className: {
      type: 'string',
    },
    onClick: {
      type: 'eventHandler',
      argTypes: [],
    },
  },
  interactionVariants: {
    hover: {
      cssSelector: ':hover',
      displayName: 'Hover',
    },
  },
  // Specify how generated Plasmic code should import this component;
  // path is relative to srcDir
  importPath: './components/door/components/button',
});

registerComponent(ChooseDoor, {
  name: 'ChooseDoor',
  props: {
    className: {
      type: 'string',
    },
    doorNames: {
      type: 'array',
      itemType: {
        type: 'object',
        fields: {
          id: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
        },
      },
    },
  },

  // Specify how generated Plasmic code should import this component;
  // path is relative to srcDir
  importPath: './components/door/configurator/choose',
});

registerComponent(SizeDoor, {
  name: 'SizeDoor',
  props: {
    className: {
      type: 'string',
    },
    sizes: {
      type: 'array',
      itemType: {
        type: 'object',
        fields: {
          doorId: {
            type: 'string',
          },
          length: {
            type: 'number',
          },
          width: {
            type: 'number',
          },
          price: {
            type: 'number',
          },
          priceBelowDefaultWidth: {
            type: 'number',
          },
          priceAboveDefaultWidth: {
            type: 'number',
          },
        },
      },
    },
  },

  // Specify how generated Plasmic code should import this component;
  // path is relative to srcDir
  importPath: './components/door/configurator/size',
});

registerComponent(TypeDoor, {
  name: 'TypeDoor',
  props: {
    className: {
      type: 'string',
    },
    types: {
      type: 'array',
      itemType: {
        type: 'object',
        fields: {
          type: {
            type: 'string',
          },
          image: {
            type: 'imageUrl',
          },
          price: {
            type: 'number',
          },
        },
      },
    },
  },

  // Specify how generated Plasmic code should import this component;
  // path is relative to srcDir
  importPath: './components/door/configurator/type',
});

registerComponent(FinishingDoor, {
  name: 'FinishingDoor',
  props: {
    className: {
      type: 'string',
    },
    finishings: {
      type: 'array',
      itemType: {
        type: 'object',
        fields: {
          doorId: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          price: {
            type: 'number',
          },
        },
      },
    },
  },

  // Specify how generated Plasmic code should import this component;
  // path is relative to srcDir
  importPath: './components/door/configurator/finishing',
});

registerComponent(AddonDoor, {
  name: 'AddonDoor',
  props: {
    className: {
      type: 'string',
    },
    addons: {
      type: 'object',
      fields: {
        keyHole: {
          type: 'object',
          fields: {
            text: {
              type: 'string',
            },
            price: {
              type: 'number',
            },
          },
        },
        weatherStrip: {
          type: 'object',
          fields: {
            text: {
              type: 'string',
            },
            price: {
              type: 'number',
            },
          },
        },
      },
    },
  },

  // Specify how generated Plasmic code should import this component;
  // path is relative to srcDir
  importPath: './components/door/configurator/addon',
});

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
