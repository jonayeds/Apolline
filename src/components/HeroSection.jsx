"use client"
import gsap from 'gsap'
import React from 'react'
import {useGSAP} from "@gsap/react"

const HeroSection = () => {
    useGSAP(()=>{
        gsap.from(".heading1",{
            x:-80,
            duration:2,
            opacity:0,
            stagger:0.3,
            ease: "circ.out",
        },"head")
        gsap.from(".heading2",{
            x:80,
            duration:2,
            delay:0.1,
            opacity:0,
            ease: "circ.out",
        }, "head")
    })
  return (
    <div className='text-[17vw] font-heading px-[8vw] leading-[0.7] h-screen flex justify-center  flex-col' >
        <div>
        <div className='flex justify-start'><h1 className='heading1'>APOLLINE</h1></div>
        <div className='flex justify-end'><h1 className='heading2'>ROBERT</h1></div>
        <div className='flex justify-start'> <h1 className='heading1'>STUDIO</h1></div>
        </div>
    </div>
  )
}

export default HeroSection