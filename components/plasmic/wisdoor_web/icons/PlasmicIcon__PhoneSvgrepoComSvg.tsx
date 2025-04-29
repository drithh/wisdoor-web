/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PhoneSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PhoneSvgrepoComSvgIcon(props: PhoneSvgrepoComSvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      fill={"none"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M9.502 4.257A2 2 0 007.646 3H4.895A1.895 1.895 0 003 4.895C3 13.789 10.21 21 19.105 21A1.895 1.895 0 0021 19.105v-2.751a2 2 0 00-1.257-1.857l-2.636-1.054a2 2 0 00-2.023.32l-.68.568a2.001 2.001 0 01-2.696-.122L9.792 12.29a2 2 0 01-.123-2.694l.567-.68a2 2 0 00.322-2.024L9.502 4.257z"
        }
        stroke={"currentColor"}
        strokeWidth={"2"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
      ></path>
    </svg>
  );
}

export default PhoneSvgrepoComSvgIcon;
/* prettier-ignore-end */
