import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";


const ServiceDetail = () => {
    const { id } = useParams();
    const { services } = useLoaderData();

    const [service, setService] = useState([]);

    useEffect(() => {
        const findService = services.find(x => x.id == id)
        setService(findService)
    }, [id, services])
    const { image, price, title, moreDetails, servicesProvided } = service;
    
    return (
        <div data-aos="flip-right" className="space-y-7 mt-2 pt-3 pb-10">
            <h5 className="text-center text-2xl font-youngSerif ">{title} Event Details </h5>
            <img src={image} className="mx-auto" alt="" />
            <h3 className="text-center text-3xl font-semibold text-pink-500 rounded outline outline-pink-300 py-1">{title}</h3>
            <div className="font-poppins">
                <h3 className="text-2xl font-semibold">Services we provided: </h3>
                <ul className="ml-10">
                    {
                        servicesProvided?.map((serviceItem, index) => (
                            <li key={index} className="list-disc">{serviceItem}</li>
                        ))
                    }
                </ul>
                <h2 className="text-lg font-poppins font-semibold mt-5"><span className="text-pink-500 font-youngSerif mr-2">Total Cost: </span>{price} BDT.</h2>

                <Link to={"/contact"}>
                    <button className="btn mt-5 btn-outline btn-sm btn-secondary">Contact us</button>
                </Link>

                <p className="font-poppins mt-5">{moreDetails}</p>
            </div>
        </div>
    );
};

export default ServiceDetail;