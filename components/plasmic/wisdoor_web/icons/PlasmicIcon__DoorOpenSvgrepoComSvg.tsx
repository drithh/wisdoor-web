// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DoorOpenSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DoorOpenSvgrepoComSvgIcon(
  props: DoorOpenSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 53.25 53.25"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M43.375 0h-33.5c-.101 0-.199.011-.295.03h-.004a1.49 1.49 0 00-.307.1c-.025.011-.047.026-.071.039-.071.036-.14.076-.204.123-.012.008-.025.012-.035.021-.02.014-.034.034-.053.05a1.474 1.474 0 00-.337.413c-.018.032-.037.063-.052.096-.032.07-.057.143-.078.218-.008.028-.02.055-.026.084a1.468 1.468 0 00-.038.326v43.378c0 .156.031.303.075.444.008.025.014.05.023.074.05.134.117.258.201.371.015.02.031.038.047.057.093.113.198.217.32.299l.004.002c.125.083.265.142.412.185.014.004.024.014.038.017l26.199 6.872a1.495 1.495 0 001.297-.264 1.5 1.5 0 00.583-1.188V8.372a1.5 1.5 0 00-1.12-1.451L21.505 3h20.37v41.878a1.5 1.5 0 103 0V1.5a1.5 1.5 0 00-1.5-1.5zM23.933 28.838a1.502 1.502 0 011.855-1.03l7 2a1.5 1.5 0 01-.824 2.884l-7-2a1.5 1.5 0 01-1.031-1.854z"
        }
      ></path>
    </svg>
  );
}

export default DoorOpenSvgrepoComSvgIcon;
/* prettier-ignore-end */
