import "react";

declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "tool-tip": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        inert?: boolean;
        role?: AriaRole;
      };
    }
  }
}
