"use client";

import { ReactLenis, useLenis } from "@studio-freight/react-lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  //   const lenis = useLenis(({ scroll }) => {});
  return <ReactLenis root>{children}</ReactLenis>;
}
