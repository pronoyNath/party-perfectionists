import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Services from "../../components/Services/Services";
// aos animation added 
import AOS from 'aos';
import 'aos/dist/aos.css';
import Gallery from "../../components/Gallery/Gallery";
AOS.init();
const Home = () => {
    const {services} = useLoaderData();
    
    return (
        <div>
            <Banner></Banner>
            <Services services={services}></Services>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;