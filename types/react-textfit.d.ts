declare module "react-textfit" {
  import * as React from "react";

  export type Mode = "single" | "multi";
  export interface TextfitProps {
    mode?: Mode;
    forceSingleModeWidth?: boolean;
    min?: number;
    max?: number;
    throttle?: number;
    style?: React.CSSProperties;
    className?: string;
    children?: React.ReactNode;
  }

  export class Textfit extends React.Component<TextfitProps> {}
  export default Textfit;
}