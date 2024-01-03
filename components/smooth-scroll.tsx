"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenis = useLenis(({ scroll }) => {});
  lenis.options.lerp = 0.1;
  return <ReactLenis root>{children}</ReactLenis>;
}
