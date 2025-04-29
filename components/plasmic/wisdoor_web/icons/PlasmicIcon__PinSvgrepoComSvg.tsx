/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PinSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PinSvgrepoComSvgIcon(props: PinSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 32 32"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M16.001 5c-4.216 0-7.714 3.418-7.634 7.634.029 1.578.719 2.824 1.351 4.024.242.461 6.264 10.332 6.264 10.332V27l.001-.007.002.007v-.01l6.531-10.377c.407-.703.793-1.771.793-1.771A7.631 7.631 0 0016.001 5zM16 16.019a3.895 3.895 0 01-3.896-3.897A3.898 3.898 0 1116 16.019z"
        }
      ></path>
    </svg>
  );
}

export default PinSvgrepoComSvgIcon;
/* prettier-ignore-end */
