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

  const handleCursorMove =(e) =>{

      gsap.to(".cursor-animate",{
        opacity:1,
          left: e.screenX-400,
          top: e.screenY-350,
          duration: 0.5,
          stagger:0.1,
          ease: "power2.out",
      })
  }
  const handleMouseLeave =() =>{
        gsap.to(".cursor-animate",{
          opacity:0,
            duration: 0.5,
            stagger:0.1,
            ease: "power2.out",
        })
  }

  return (
    <div className="text-[17vw] font-heading  px-[8vw] leading-[0.7] tracking-tight h-screen   flex justify-center hero  flex-col"> 
        <div className=" w-screen text-white flex justify-center  items-center flex-col z-10  absolute h-screen  -mx-[8vw] cursor-none" onMouseLeave={handleMouseLeave}  onMouseMove={handleCursorMove}>
        <p className="   text-lg cursor-animate absolute tracking-wide" ><span className="">Hello!!</span></p>
        <p className="  text-lg cursor-animate tracking-wide absolute"><span className="relative top-6">I`m a graphic</span></p>
        <p className="  text-xl cursor-animate tracking-wide absolute" ><span className="relative top-12">designer</span></p>
        <p className=" text-xl cursor-animate tracking-wide absolute" ><span className="relative top-[72px]">based in paris</span></p>

        </div>

      <div>
        <div className="flex justify-start w-full">
          <h1 className="heading1">APOLLINE</h1>
        </div>
        <div className="flex justify-end ">
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
