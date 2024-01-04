import gsap from "gsap";

export function fadeIn(section: HTMLElement, h2: HTMLElement, p: HTMLElement, img: HTMLElement) {
  const tl = gsap.timeline({ defaults: { duration: 0.4, delay: 0, ease: "power3.inOut" } });
  tl.to(section, { autoAlpha: 1 }).to(h2, { opacity: 1, y: 0 }).to(p, { opacity: 1, y: 0 }).to(img, { opacity: 1, y: 0 });
}
