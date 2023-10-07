const ProjectCard = ({ project }) => {
    console.log(project);

    const { image, title, details, clientName } = project;
    return (
        <div>
            <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img
                        src={image}
                        alt="ui/ux review check"
                    />

                </div>
                <div className="p-6">
                    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        <span className="font-semibold text-pink-500">Event: </span>  {title}
                    </h4>
                    <p className="mt-3 block font-sans text-lg font-normal leading-relaxed text-gray-700 antialiased">
                        {details}
                    </p>
                </div>
                <div className="flex items-center justify-between p-6">
                    <div className="flex items-center -space-x-3">

                        <div
                            data-tooltip="author-2"
                            className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
                        >
                            Client : {clientName}
                        </div>
                    </div>
                    <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased text-violet-400">
                        {project?.date}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;