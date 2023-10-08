import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div >
            <footer className="footer footer-center p-10 bg-gray-700 text-white rounded-none ">

                <aside>
                    <Link to={'/'} className="normal-case text-xl md:text-2xl font-youngSerif">Party Perfectionists</Link>
                    <p>+880 17134-3432<br />partyperfectionists@gmail.com</p>
                </aside>

                <aside className="-mt-5">
                    <p>Copyright © 2023 - All right reserved by Party Perfectionists</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;