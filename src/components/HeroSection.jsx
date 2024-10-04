"use client";
import gsap from "gsap";
import React from "react";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HeroSection = () => {
  useGSAP(() => {
    const intro = gsap.timeline()
      intro
      .from(".heading1", {
          x: -80,
          duration: 2,
          opacity: 0,
          stagger: 0.3,
          ease: "circ.out",
        }, "head")
        .from(".heading2", {
            x: 80,
            duration: 2,
            delay: 0.1,
            opacity: 0,
            ease: "circ.out",
        }, "head");
        const scrollTl = gsap.timeline({
            scrollTrigger:{
                trigger:".container",
                start: "top top",
                end: "bottom bottom",
                markers:true,
                scrub:1,
            }
        });
        scrollTl
        .to(".heading1",{
            x:100,
        },"scroll")
        .to(".heading2",{
            x:-100,
        }, "scroll")
        

  });

  return (
    <div className="text-[17vw] font-heading px-[8vw] leading-[0.7] tracking-tight h-screen flex justify-center hero  flex-col">
      <div>
        <div className="flex justify-start">
          <h1 className="heading1">APOLLINE</h1>
        </div>
        <div className="flex justify-end">
          <h1 className="heading2">ROBERT</h1>
        </div>
        <div className="flex justify-start">
          {" "}
          <h1 className="heading1">STUDIO</h1>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
