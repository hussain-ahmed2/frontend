"use client";

import Link from "next/link";
import { FaLinkedin, FaGithub, FaHandPointRight } from "react-icons/fa";
import { PiReadCvLogo } from "react-icons/pi";
import { FaRegFaceSmile } from "react-icons/fa6";

const Index = () => {
  return (
    <section id="home" className="px-3 flex items-center min-h-[calc(100vh-3rem)] justify-center md:justify-between flex-col md:flex-row gap-16">
      <FaRegFaceSmile className="text-[192px] mx-auto animate-wiggle animate-infinite" />
      <div className="text-center md:text-left md:w-1/2">
        <h2 className="font-bold text-4xl">Hi here</h2>
        <h1 className="font-bold text-5xl">I{"'"}m Hussain</h1>
        <h3 className="font-semibold text-2xl">want to be a frontend developer</h3>
        <div className="flex items-center justify-center md:justify-start text-3xl pt-2 gap-2">
          <FaHandPointRight className="animate-shake animate-infinite animate-duration-700 me-4" />
          <Link href={'https://www.linkedin.com/in/hussainahmed2/'} target="_blank" className="hover:text-white hover:bg-black rounded"><FaLinkedin /></Link>
          <Link href={'https://github.com/hussain-ahmed2'} target="_blank" className="hover:text-white hover:bg-black rounded-full"><FaGithub /></Link>
          <Link href={'#'} className="flex items-center ms-5 border-2 border-black rounded px-1 hover:text-white hover:bg-black hover:border-white transition-all duration-300">
            <span className="text-sm font-medium ">Download CV</span>
            <PiReadCvLogo className="animate-pulse" />
          </Link>
        </div>
      </div>
    </section>
  )
}
export default Index