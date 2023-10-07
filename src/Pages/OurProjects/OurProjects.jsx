import { useLoaderData } from "react-router-dom";
import ProjectCard from "./ProjectCard/ProjectCard";

const OurProjects = () => {
    const projects = useLoaderData();
    console.log(projects);
    return (
        <div>
            <div className=' py-10'>
           <h3 data-aos="fade-left" className='font-semibold text-2xl text-center text-pink-500 outline rounded py-1'>Projects we have done</h3>
           </div>
           <div className="grid grid-cols-2 gap-10 pb-10">
            {
                projects.map(project=><ProjectCard key={project.id} project={project}></ProjectCard>)
            }
           </div>
           
        </div>
    );
};

export default OurProjects;