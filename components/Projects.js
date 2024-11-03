"use client";

import Calculator from "./projects/Calculator";

const Projects = () => {
    return (
        <section id="projects" className="p-3">
            <h1 className="text-center text-4xl font-bold">Projects</h1>
            <h3>this are my projects i{"'"}ve worked on</h3>

            <div className="grid grid-cols-3">
                <div className="flex flex-col items-center">
                    <Calculator />
                </div>
            </div>
        </section>
    )
}
export default Projects