// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: t5hn1zAmdmxJoKmkXG4dPV
// Component: rd8xUc-BnZoZ

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { DoorViewer } from "../../door-viewer"; // plasmic-import: SH_PqjJ_I-5G/codeComponent
import { ChooseDoor } from "../../door/configurator/choose"; // plasmic-import: LMn0cgg59gxw/codeComponent
import { SizeDoor } from "../../door/configurator/size"; // plasmic-import: 7H1b44gqct0K/codeComponent
import { TypeDoor } from "../../door/configurator/type"; // plasmic-import: CKXkj02X-GEJ/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic.module.css"; // plasmic-import: t5hn1zAmdmxJoKmkXG4dPV/projectcss
import sty from "./PlasmicDoor.module.css"; // plasmic-import: rd8xUc-BnZoZ/css

createPlasmicElementProxy;

export type PlasmicDoor__VariantMembers = {};
export type PlasmicDoor__VariantsArgs = {};
type VariantPropType = keyof PlasmicDoor__VariantsArgs;
export const PlasmicDoor__VariantProps = new Array<VariantPropType>();

export type PlasmicDoor__ArgsType = {};
type ArgPropType = keyof PlasmicDoor__ArgsType;
export const PlasmicDoor__ArgProps = new Array<ArgPropType>();

export type PlasmicDoor__OverridesType = {
  root?: Flex__<"div">;
  doorViewer?: Flex__<typeof DoorViewer>;
  section?: Flex__<"section">;
  chooseDoor?: Flex__<typeof ChooseDoor>;
  sizeDoor?: Flex__<typeof SizeDoor>;
  bahanPintu?: Flex__<"div">;
  typeDoor?: Flex__<typeof TypeDoor>;
};

export interface DefaultDoorProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicDoor__RenderFunc(props: {
  variants: PlasmicDoor__VariantsArgs;
  args: PlasmicDoor__ArgsType;
  overrides: PlasmicDoor__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "jenisPintu",
        type: "private",
        variableType: "number",
        initFunc: ({ $props, $state, $queries, $ctx }) => 0
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <Stack__
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__e2Glv)}
          >
            <DoorViewer
              data-plasmic-name={"doorViewer"}
              data-plasmic-override={overrides.doorViewer}
              className={classNames("__wab_instance", sty.doorViewer)}
            />

            <section
              data-plasmic-name={"section"}
              data-plasmic-override={overrides.section}
              className={classNames(projectcss.all, sty.section)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__k7FLs
                )}
              >
                {"Kustom Pintu"}
              </div>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__lwiwG)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___0Na67
                  )}
                >
                  {"Jenis Pintu"}
                </div>
                <ChooseDoor
                  data-plasmic-name={"chooseDoor"}
                  data-plasmic-override={overrides.chooseDoor}
                  className={classNames("__wab_instance", sty.chooseDoor)}
                  doorNames={(() => {
                    const __composite = [
                      { id: null, name: null },
                      { id: null, name: null }
                    ];
                    __composite["0"]["id"] = "utama";
                    __composite["0"]["name"] = "Pintu Utama";
                    __composite["1"]["id"] = "kamar";
                    __composite["1"]["name"] = "Pintu Kamar (Rangka 3.6)";
                    return __composite;
                  })()}
                />
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__vjeMy)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text___1DgB
                  )}
                >
                  {"Ukuran Pintu"}
                </div>
                <SizeDoor
                  data-plasmic-name={"sizeDoor"}
                  data-plasmic-override={overrides.sizeDoor}
                  className={classNames("__wab_instance", sty.sizeDoor)}
                  sizes={(() => {
                    const __composite = [
                      {
                        idDoor: null,
                        length: null,
                        width: null,
                        price: null,
                        priceBelowDefaultWidth: null,
                        priceAboveDefaultWidth: null
                      },
                      {
                        idDoor: null,
                        length: null,
                        width: null,
                        price: null,
                        priceBelowDefaultWidth: null,
                        priceAboveDefaultWidth: null
                      }
                    ];
                    __composite["0"]["idDoor"] = "utama";
                    __composite["0"]["length"] = 210;
                    __composite["0"]["width"] = 83;
                    __composite["0"]["price"] = 560000;
                    __composite["0"]["priceBelowDefaultWidth"] = 100000;
                    __composite["0"]["priceAboveDefaultWidth"] = 200000;
                    __composite["1"]["idDoor"] = "kamar";
                    __composite["1"]["length"] = 210;
                    __composite["1"]["width"] = 83;
                    __composite["1"]["price"] = 660000;
                    __composite["1"]["priceBelowDefaultWidth"] = 100000;
                    __composite["1"]["priceAboveDefaultWidth"] = 200000;
                    return __composite;
                  })()}
                />
              </Stack__>
              <Stack__
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__mt4El)}
              >
                <div
                  data-plasmic-name={"bahanPintu"}
                  data-plasmic-override={overrides.bahanPintu}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.bahanPintu
                  )}
                >
                  {"Bahan Pintu"}
                </div>
              </Stack__>
              <TypeDoor
                data-plasmic-name={"typeDoor"}
                data-plasmic-override={overrides.typeDoor}
                className={classNames("__wab_instance", sty.typeDoor)}
                types={(() => {
                  const __composite = [
                    { image: null, type: null, price: null },
                    { type: null, image: null, price: null }
                  ];
                  __composite["0"]["image"] =
                    "https://site-assets.plasmic.app/ec7615efd9eec59506460977dde021a8.jpg";
                  __composite["0"]["type"] = "HMR (3mm)";
                  __composite["0"]["price"] = 240000;
                  __composite["1"]["type"] = "Plywood Meranti (3mm)";
                  __composite["1"]["image"] =
                    "https://site-assets.plasmic.app/843daac37ed39e5c0fd4392b69506628.jpg";
                  __composite["1"]["price"] = 240000;
                  return __composite;
                })()}
              />
            </section>
          </Stack__>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "doorViewer",
    "section",
    "chooseDoor",
    "sizeDoor",
    "bahanPintu",
    "typeDoor"
  ],
  doorViewer: ["doorViewer"],
  section: ["section", "chooseDoor", "sizeDoor", "bahanPintu", "typeDoor"],
  chooseDoor: ["chooseDoor"],
  sizeDoor: ["sizeDoor"],
  bahanPintu: ["bahanPintu"],
  typeDoor: ["typeDoor"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  doorViewer: typeof DoorViewer;
  section: "section";
  chooseDoor: typeof ChooseDoor;
  sizeDoor: typeof SizeDoor;
  bahanPintu: "div";
  typeDoor: typeof TypeDoor;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicDoor__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicDoor__VariantsArgs;
    args?: PlasmicDoor__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicDoor__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicDoor__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicDoor__ArgProps,
          internalVariantPropNames: PlasmicDoor__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicDoor__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicDoor";
  } else {
    func.displayName = `PlasmicDoor.${nodeName}`;
  }
  return func;
}

export const PlasmicDoor = Object.assign(
  // Top-level PlasmicDoor renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    doorViewer: makeNodeComponent("doorViewer"),
    section: makeNodeComponent("section"),
    chooseDoor: makeNodeComponent("chooseDoor"),
    sizeDoor: makeNodeComponent("sizeDoor"),
    bahanPintu: makeNodeComponent("bahanPintu"),
    typeDoor: makeNodeComponent("typeDoor"),

    // Metadata about props expected for PlasmicDoor
    internalVariantProps: PlasmicDoor__VariantProps,
    internalArgProps: PlasmicDoor__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicDoor;
/* prettier-ignore-end */
