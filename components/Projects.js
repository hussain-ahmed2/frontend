import Project from './project';
import projects from '../data/projects-data.js'

const Projects = () => {
    return (
        <section id="projects" className="p-3">
            <h1 className="text-center text-4xl font-bold">Projects</h1>
            <h3 className='text-center'>This are my projects i{"'"}ve worked on</h3>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-5 gap-3">
                {
                    projects.map(project => <Project key={project.id} {...project} />)
                }
            </div>
        </section>
    )
}
export default Projects
