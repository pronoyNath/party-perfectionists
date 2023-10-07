import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";


const ServiceDetail = () => {
    const { id } = useParams();
    const { services } = useLoaderData();

    const [service, setService] = useState([]);

    useEffect(() => {
        const findService = services.find(service => service.id == id)
        setService(findService)
    }, [id, services])
    const { image, price, title, moreDetails, servicesProvided } = service;

    return (
        
        <div data-aos="zoom-in" className="font-poppins mb-5">
            <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
                    <img className=" mx-auto"
                        src={image}
                        alt="ui/ux review check"
                    />
                    <button
                        className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-dark="true"
                    >
                    </button>
                </div>
                <div className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                        <h5 className="block font-sans text-2xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {title}
                        </h5>

                    </div>


                    <div className="mt-5">
                        <h3>We Provide:</h3>
                        <ul className="ml-10">
                            {
                                servicesProvided?.map((serviceItem, index) => (
                                    <li key={index} className="list-disc">{serviceItem}</li>
                                ))
                            }
                        </ul>
                    </div>



                    <p className="block font-sans text-base font-light leading-relaxed text-gray-700 mt-5 antialiased">
                        {moreDetails}
                    </p>
                    <h3 className="mt-5 font-semibold text-xl">Cost: {price} BDT</h3>
                </div>
                <div className="p-6 pt-3">
                <Link to={"/contact"}>
                    <button
                        className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        Reserve
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetail;