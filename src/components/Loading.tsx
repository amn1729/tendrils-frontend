import {
  Fragment,
  ComponentPropsWithoutRef,
  ElementType,
  createElement,
  ReactNode,
} from "react";
import { Loader as DefaultLoader } from "@/components";
import { Color } from "@/types";

interface LoadingProps<C> {
  on: boolean;
  color?: Color;
  component?: C;
  Loader?: ReactNode;
  div?: boolean;
}

function Loading<C extends ElementType>({
  on,
  component,
  children,
  color,
  Loader,
  div,
  ...rest
}: LoadingProps<C> & ComponentPropsWithoutRef<C>) {
  return createElement(
    component ?? (div ? "div" : Fragment),
    div || component ? rest : {},
    on ? Loader || <DefaultLoader color={color} /> : children
  );
}

export default Loading;
