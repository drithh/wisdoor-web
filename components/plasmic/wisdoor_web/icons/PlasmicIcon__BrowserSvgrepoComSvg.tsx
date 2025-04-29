/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BrowserSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BrowserSvgrepoComSvgIcon(props: BrowserSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 192 192"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <circle
        cx={"96"}
        cy={"96"}
        r={"74"}
        stroke={"currentColor"}
        strokeWidth={"12"}
      ></circle>

      <ellipse
        cx={"96"}
        cy={"96"}
        stroke={"currentColor"}
        strokeWidth={"12"}
        rx={"30"}
        ry={"74"}
      ></ellipse>

      <path
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"12"}
        d={"M28 72h136M28 120h136"}
      ></path>
    </svg>
  );
}

export default BrowserSvgrepoComSvgIcon;
/* prettier-ignore-end */
