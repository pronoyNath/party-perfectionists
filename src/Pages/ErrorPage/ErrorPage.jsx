import { FaAnglesDown } from "react-icons/fa6";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (

        <div>
            <div className="relative flex w-full py-28 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                
                <div className="p-6">
                    <div className="mb-3 flex items-center justify-center">
                        <h5 className=" font-sans text-7xl font-medium  text-blue-gray-900 mb-5">
                        Error 404
                        </h5>
                        
                    </div>
                    <p className="block font-sans text-2xl text-center  font-bold text-red-400">
                        This Page is not Found
                    </p>
                    <h3 className="">
                        <FaAnglesDown className="w-full mx-auto text-5xl my-4"></FaAnglesDown>
                    </h3>
                </div>
                <div className="p-6 pt-3">
                <Link to={'/'}>
                    <button
                        className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        data-ripple-light="true"
                    >
                        Go Back to Home
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;