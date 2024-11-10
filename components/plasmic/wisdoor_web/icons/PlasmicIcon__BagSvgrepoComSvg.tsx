// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type BagSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function BagSvgrepoComSvgIcon(props: BagSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"-5.5 0 32 32"}
      version={"1.1"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M21.25 12.063v3.75c-2.969 1.094-6.656 1.719-10.625 1.719S2.969 16.907 0 15.813v-3.75c0-.688.563-1.25 1.25-1.25h5.156v-.938c0-1.438 1.188-2.656 2.656-2.656h3.125c1.469 0 2.656 1.219 2.656 2.656v.938h5.156c.688 0 1.25.563 1.25 1.25zM7.969 9.875v.938h5.313v-.938c0-.594-.5-1.094-1.094-1.094H9.063c-.594 0-1.094.5-1.094 1.094zm1.094 5.719v.625c0 .188.125.313.313.313h2.5c.188 0 .313-.125.313-.313v-.625c0-.188-.125-.313-.313-.313h-2.5c-.188 0-.313.125-.313.313zM0 23.969v-6.813c3 1.031 6.656 1.625 10.625 1.625s7.625-.594 10.625-1.625v6.813c0 .688-.563 1.25-1.25 1.25H1.25c-.688 0-1.25-.563-1.25-1.25zm12.188-3.219v-.625c0-.188-.125-.313-.313-.313h-2.5c-.188 0-.313.125-.313.313v.625c0 .188.125.313.313.313h2.5c.188 0 .313-.125.313-.313z"
        }
      ></path>
    </svg>
  );
}

export default BagSvgrepoComSvgIcon;
/* prettier-ignore-end */
