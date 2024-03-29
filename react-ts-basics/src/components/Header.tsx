import { type PropsWithChildren } from "react";

type ImagePropType = { src: string; alt: string };
type HeaderProps = PropsWithChildren<ImagePropType>;

export function Header({ src, alt, children }: HeaderProps) {
  return (
    <header>
      <img src={src} alt={alt} />
      {children}
    </header>
  );
}
