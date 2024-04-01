import { type ElementType } from "react";

type ContainerProps = {
  // ElementType is the element identifier like button, div, etc
  as: ElementType;
};

export default function Container({ as: Component }: ContainerProps) {
  return <Component />;
}
