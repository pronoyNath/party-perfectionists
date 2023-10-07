import { useLoaderData } from "react-router-dom";
import ProjectCard from "./ProjectCard/ProjectCard";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const OurProjects = () => {
    const projects = useLoaderData();
    const {user} = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <figure data-aos="fade-left" className="my-10" style={{ position: 'relative', height: '150px', width: '100%' }}>
                <img
                    style={{
                        height: '100%',
                        width: '100%',
                        borderRadius: '12px',
                        objectFit: 'cover',
                        objectPosition: 'center',
                    }}
                    src="https://i.ibb.co/PrfNjRc/pexels-flo-dnd-2122328.jpg"
                    alt="nature image"
                />
                <figcaption
                    style={{
                        position: 'absolute',
                        bottom: '1rem',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        display: 'flex',
                        width: 'calc(100% - 4rem)',
                        justifyContent: 'space-between',
                        borderRadius: '12px',
                        border: '1px solid white',
                        backgroundColor: 'rgba(255, 255, 255, 0.75)',
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.05)',
                        backdropFilter: 'blur(4px)',
                    }}
                >
                    <div className="h-14 p-2 font-poppins">
                    <div style={{ flex: '1' }}>
                        <h5 style={{ color: 'blue-gray' }}>Hello, {user?.displayName}</h5>
                        
                    </div>
                    <div>
                    <h5 style={{ color: 'blue-gray' }}>Pleae Checkout Our Projects</h5>
                    </div>
                    </div>
                </figcaption>
            </figure>


            <div className="grid grid-cols-2 gap-10 pb-10">
                {
                    projects.map(project => <ProjectCard key={project.id} project={project}></ProjectCard>)
                }
            </div>

        </div>
    );
};

export default OurProjects;