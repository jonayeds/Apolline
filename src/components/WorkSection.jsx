"use client"
import Image from 'next/image'
import React from 'react'
import image1 from "@/assets/images/image1.jpg"
import image2 from "@/assets/images/image2.jpg"
import image3 from "@/assets/images/image3.jpg"
import image4 from "@/assets/images/image4.jpg"
import image5 from "@/assets/images/image5.jpg"
import image6 from "@/assets/images/image6.jpg"
import image7 from "@/assets/images/image7.jpg"
import image8 from "@/assets/images/image8.jpg"
import image9 from "@/assets/images/image9.jpg"
import image10 from "@/assets/images/image10.jpg"
import image11 from "@/assets/images/image11.jpg"
import image12 from "@/assets/images/image12.jpg"
const WorkSection = () => {

  return (
    <div className='min-h-screen px-[8vw] relative justify-center flex py-[8vh]'>
      <div className='fixed left-10  top-[40vh]'>
        <Image src={image1} alt='' className='w-96' />
        </div>
      <div className=' w-1/3 flex items-center '>
        
      </div>
      <div className='w-2/3 '>
      {
        [{name: "pimpan", year: "2024"},
          {name: "youki", year: "2023"},
          {name: "hammigua", year: "2023"},
          {name: "my happy dog", year: "2023"},
          {name: "save the night", year: "2023"},
          {name: "ifm", year: "2022"},
          {name: "marius aurenti", year: "2022"},
          {name: "apo", year: "2021"},
          {name: "SOUFFLEURS D`IMAGES", year: "2020"},
          {name: "STUDIO VALMY", year: "2020"},
          {name: "BOUGE TON COQ", year: "2019"},
          {name: "ARCHITECTURE FESTIVAL", year: "2015"},
        ].map((item, index)=>(
          <h1 key={index} className='uppercase cursor-pointer text-[4vw] font-heading flex justify-start gap-3 opacity-20 font-[100] shover:left-3 duration-300 pl-0 hover:pl-3 hover:opacity-100 leading-tight'>{item.name}<span className='text-[3vw]'>{item.year}</span></h1>
        ))
      }
          
      </div>
    </div>
  )
}

export default WorkSection