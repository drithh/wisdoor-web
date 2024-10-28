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
import { DoorWrapper } from '@/components/door/components/door-wrapper';
import { DoorButton } from '@/components/door/components/button';
import { ChooseDoor } from '@/components/door/configurator/choose';
import { SizeDoor } from '@/components/door/configurator/size';
import { FinishingVariant } from '@/components/door/configurator/finishing-variant';
import { FinishingDoor } from '@/components/door/configurator/finishing';
import { AddonDoor } from '@/components/door/configurator/addon';
import { FrameDoor } from '@/components/door/configurator/frame';
import { Wrapper } from '@/components/door/components/wrapper';
import { FinishingFrame } from '@/components/door/configurator/finishing-frame';
import { HingeDoor } from '@/components/door/configurator/hinge';
import { DetailPrice } from '@/components/door/detail-price';
import { RootWrapper } from '@/components/door/components/root-wrapper';
import { ConfiguratorWrapper } from '@/components/door/components/configurator-wrapper';
import { GrooveDoor } from '@/components/door/configurator/groove';
import { Logo } from '@/components/logo';

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
    black: {
      type: 'boolean',
      defaultValue: false,
    },
  },

  importPath: './components/navigation',
});

registerComponent(Logo, {
  name: 'Logo',
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

  importPath: './components/logo',
});

registerComponent(Hero, {
  name: 'Hero',
  props: {
    className: {
      type: 'string',
    },
    image: {
      type: 'imageUrl',
      defaultValue: '/placeholder.svg',
    },
    alt: {
      type: 'string',
      defaultValue: 'Logo Wisdoor',
    },
  },

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
    onClick: {
      type: 'eventHandler',
      argTypes: [],
    },
  },

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

  importPath: './components/single-product',
});

registerComponent(DoorWrapper, {
  name: 'DoorWrapper',
  props: {},

  importPath: './components/door/door-wrapper',
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
          modal: {
            type: 'richText',
          },
        },
      },
    },
  },

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
          defaultHeight: {
            type: 'number',
          },
          maxHeight: {
            type: 'number',
          },
          minHeight: {
            type: 'number',
          },
          defaultWidth: {
            type: 'number',
          },
          maxWidth: {
            type: 'number',
          },
          minWidth: {
            type: 'number',
          },
          defaultPrice: {
            type: 'number',
          },
          addedPriceAbove: {
            type: 'number',
          },
          addedPriceBelow: {
            type: 'number',
          },
        },
      },
    },
  },

  importPath: './components/door/configurator/size',
});

registerComponent(FinishingVariant, {
  name: 'FinishingVariant',
  props: {
    className: {
      type: 'string',
    },
  },

  importPath: './components/door/configurator/finishing-variant',
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
          name: {
            type: 'string',
          },
          price: {
            type: 'number',
          },
          modal: {
            type: 'richText',
          },
        },
      },
    },
  },

  importPath: './components/door/configurator/finishing',
});

registerComponent(GrooveDoor, {
  name: 'GrooveDoor',
  props: {
    className: {
      type: 'string',
    },
    grooves: {
      type: 'array',
      itemType: {
        type: 'object',
        fields: {
          name: {
            type: 'string',
          },
          price: {
            type: 'number',
          },
          modal: {
            type: 'richText',
          },
        },
      },
    },
  },

  importPath: './components/door/configurator/groove',
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
        cylinder: {
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
        handle: {
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
        key: {
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
        hinge: {
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

  importPath: './components/door/configurator/addon',
});

registerComponent(FrameDoor, {
  name: 'FrameDoor',
  props: {
    className: {
      type: 'string',
    },
    frames: {
      type: 'array',
      itemType: {
        type: 'object',
        fields: {
          name: {
            type: 'string',
          },
          price: {
            type: 'number',
          },
          length: {
            type: 'number',
          },
          width: {
            type: 'number',
          },
          architraveFrame: {
            type: 'boolean',
          },
        },
      },
    },
  },

  importPath: './components/door/configurator/frame',
});

registerComponent(Wrapper, {
  name: 'Wrapper',
  props: {
    className: {
      type: 'string',
    },
    children: {
      type: 'slot',
    },
  },

  importPath: './components/door/components/wrapper',
});

registerComponent(RootWrapper, {
  name: 'RootWrapper',
  props: {
    className: {
      type: 'string',
    },
    children: {
      type: 'slot',
    },
  },

  importPath: './components/door/components/root-wrapper',
});

registerComponent(ConfiguratorWrapper, {
  name: 'ConfiguratorWrapper',
  props: {
    className: {
      type: 'string',
    },
    children: {
      type: 'slot',
    },
  },

  importPath: './components/door/components/configurator-wrapper',
});

// registerComponent(FinishingFrame, {
//   name: 'FinishingFrame',
//   props: {
//     className: {
//       type: 'string',
//     },
//     finishings: {
//       type: 'array',
//       itemType: {
//         type: 'object',
//         fields: {
//           name: {
//             type: 'string',
//           },
//           price: {
//             type: 'number',
//           },
//           color: {
//             type: 'array',
//             itemType: {
//               type: 'object',
//               fields: {
//                 name: {
//                   type: 'string',
//                 },
//                 colorClass: {
//                   type: 'string',
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   },

//   importPath: './components/door/configurator/finishing-frame',
// });

// registerComponent(HingeDoor, {
//   name: 'HingeDoor',
//   props: {
//     className: {
//       type: 'string',
//     },
//     hinges: {
//       type: 'array',
//       itemType: {
//         type: 'object',
//         fields: {
//           name: {
//             type: 'string',
//           },
//           price: {
//             type: 'number',
//           },
//         },
//       },
//     },
//   },

//   importPath: './components/door/configurator/hinge',
// });

registerComponent(DetailPrice, {
  name: 'DetailPrice',
  props: {
    className: {
      type: 'string',
    },
    phone: {
      type: 'string',
    },
  },

  importPath: './components/door/detail-price',
});

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}
