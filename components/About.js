"use client";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const About = () => {
    return (
        <section id="about" className="p-5 bg-neutral-400 rounded-lg">
            <h1 className="text-center text-4xl font-extrabold font-mono">About Me</h1>
            <p className="pt-2">
                Hi, I’m Hussain Ahmed – a passionate Frontend Developer with a flair for creating visually appealing, 
                responsive, and user-friendly web applications. With a strong foundation in both design and coding, I 
                transform ideas into interactive, dynamic websites. I graduated with a CGPA of 3.93 from Varendra 
                University, and my journey in web development has been driven by continuous learning and hands-on experience.
            </p>
            <div className="py-8 flex flex-col gap-3">
                <h2 className="font-bold text-2xl">My Front-End Toolkit</h2>
                <div className="flex items-center gap-5">
                    <span className="font-semibold text-lg">Languages & Markup:</span> 
                    <div className="flex text-5xl gap-4">
                        <FaHtml5 fill="#f06529" />
                        <FaCss3Alt fill="#2965f1" />
                        <FaJs fill="#f0db4f"  />
                        <SiTypescript className="scale-[.875]" fill="#007acc" />
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <span className="font-semibold text-lg">Libraries & Frameworks:</span> 
                    <div className="flex text-5xl gap-4">
                        <FaReact fill="#61DBFB" />
                        <RiNextjsFill className="scale-[1.125]" />
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <span className="font-semibold text-lg">Styling:</span> 
                    <div className="flex text-5xl gap-4">
                        <RiTailwindCssFill fill="#06b6d4" />
                        <FaBootstrap fill="#6610f2" />
                    </div>
                </div>
                <div className="flex items-center gap-5">
                    <span className="font-semibold text-lg">Version Control:</span> 
                    <div className="flex text-5xl gap-4">
                        <FaGitAlt fill="#F1502F" />
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold">Certifications</h2>
                <p>I’m dedicated to enhancing my front-end skills, as reflected in my certifications:</p>

                <ul className="flex flex-col pt-2 list-disc gap-1 *:ms-10">
                    <li>
                        Front End Develoliment Libraries - freeCodeCamp
                    </li>
                    <li>
                        JavaScript Algorithms and Data Structures - freeCodeCamp
                    </li>
                    <li>
                        Frontend Developer (React) - Hackerrank
                    </li>
                    <li>
                        Responsive Web Design - freeCodeCamp
                    </li>
                </ul>
            </div>
        </section>
    )
}
export default About