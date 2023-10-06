import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto font-youngSerif">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;