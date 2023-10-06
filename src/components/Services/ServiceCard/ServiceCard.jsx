import { Link } from "react-router-dom";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const ServiceCard = ({ service }) => {
    const {id, image, price, title, details, } = service;
    
    return (
        <div data-aos="fade-up-left">
            <div>
            <div className="relative flex h-[450px] flex-col  bg-white bg-clip-border text-gray-700 shadow-xl">
                <div className="relative m-0 overflow-hidden rounded-none bg-transparent bg-clip-border text-gray-700 shadow-none">
                    <img className="h-52 w-full object-contain"
                        src={image}
                        alt="ui/ux review check"
                    />
                </div>
                <div className="p-6 ">
                    <h4 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-pink-500 mb-1">
                        {title}
                    </h4>
                    <p className=" block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased ">
                        {details}
                    </p>

                    <div className="flex justify-between items-center mt-5">
                    <h4 className="block font-sans text-lg font-bold leading-snug tracking-normal text-blue-gray-900 antialiased font">
                       Cost: {price} BDT.
                    </h4>
                    
                   <Link to={`/service/${id}`}>
                   <button  className="btn btn-warning btn-sm text-white font-normal text-xs">View Detail</button>
                   </Link>
                    </div>

                </div>
            </div>
            </div>
        </div>
    );
};

export default ServiceCard;