"use client";

import React, { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeIn } from "@/animations/section";
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
    const section = document.querySelectorAll("[data-sect]");
    const sections = gsap.utils.toArray(section);

    const ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      sections.forEach((section: any) => {
        const h2 = section.querySelector("[data-title-text]");
        const p = section.querySelector("[data-sect-paragraph]");
        const img = section.querySelector("[data-sect-img]");
        ScrollTrigger.create({
          trigger: section,
          start: "-400px",
          end: "bottom bottom",
          onEnter: () => {
            fadeIn(section, h2, p, img);
          },
          toggleActions: "play none none none",
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
