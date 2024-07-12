import { ElementType } from "react";

export type TBaseComponent<T extends ElementType = "div"> = React.ComponentPropsWithRef<T>;
