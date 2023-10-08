import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <>
            <div className="bg-[#eeeeee]">
                <div className="max-w-6xl mx-auto font-youngSerif ">
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                    />
                    <Header></Header>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>

        </>
    );
};

export default MainLayout;