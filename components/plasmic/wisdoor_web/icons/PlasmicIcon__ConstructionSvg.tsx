/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ConstructionSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ConstructionSvgIcon(props: ConstructionSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.0"}
      viewBox={"0 0 512 512"}
      preserveAspectRatio={"xMidYMid meet"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M118 52c-2 2-2 3.3-2 204s0 202 2 204c1.9 1.9 3.3 2 21.5 2s19.6-.1 21.5-2c2-2 2-3.3 2-182.5V97h186v180.5c0 179.2 0 180.5 2 182.5 1.9 1.9 3.3 2 21.5 2s19.6-.1 21.5-2c2-2 2-3.3 2-204s0-202-2-204-3.3-2-138-2-136 0-138 2zm252.8 12.7c-.1.5-4.4 4.7-9.4 9.5l-9 8.8H159.6l-9-8.8c-5-4.8-9.2-9-9.4-9.5-.2-.4 51.5-.7 114.8-.7s115 .3 114.8.7zM140.3 83.8l8.7 8.7V448h-19V261.5c0-102.6.3-186.5.8-186.5.4 0 4.7 3.9 9.5 8.8zM382 261.5V448h-19V92.5l8.7-8.7c4.8-4.9 9.1-8.8 9.5-8.8.5 0 .8 83.9.8 186.5z"
        }
        fill={"currentColor"}
        stroke={"none"}
      ></path>
    </svg>
  );
}

export default ConstructionSvgIcon;
/* prettier-ignore-end */
