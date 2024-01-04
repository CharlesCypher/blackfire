"use client";

import React, { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "@/components/home/navbar";
import TopBanner from "@/components/home/top-banner";
import Hero from "@/components/home/hero";
import Reviews from "@/components/home/reviews";
import Vision from "@/components/home/vision";
import Character1 from "@/components/home/character1";
import Character2 from "@/components/home/character2";
import Character3 from "@/components/home/character3";
import Character4 from "@/components/home/character4";
import gsap from "gsap";

export default function Home() {
  useLayoutEffect(() => {
    const section = document.querySelectorAll(".sect");
    const sections = gsap.utils.toArray(section);
    const title = document.querySelectorAll("[data-title-text]");
    const titles = gsap.utils.toArray(title);
    const image = document.querySelectorAll("[data-sect-img]");
    const images = gsap.utils.toArray(image);

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      sections.forEach((section: any) => {
        const h2 = section.querySelector("[data-title-text]");
        const img = section.querySelector("[data-sect-img]");
        ScrollTrigger.create({
          trigger: section,
          start: "-100px",
          end: "bottom bottom",
          onEnter: () => {
            const tl = gsap.timeline({ defaults: { duration: 1, delay: 0, ease: "power3.inOut" } });
            tl.to(section, { autoAlpha: 1 })
              .fromTo(h2, { opacity: 0, y: 25 }, { opacity: 1, y: 0 })
              .fromTo(img, { opacity: 0, y: 25 }, { opacity: 1, y: 0 });
          },
          toggleActions: "play none reverse none",
          once: true,
        });
      });
    }, sections);

    return () => ctx.revert();
  }, []);
  return (
    <div>
      <TopBanner />
      <Navbar />
      <Hero />
      <Reviews />
      <Vision />
      <Character1 />
      <Character2 />
      <Character3 />
      <Character4 />
    </div>
  );
}
