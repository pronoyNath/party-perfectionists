import { Link, NavLink } from "react-router-dom";
import userDefaultPic from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);

    const handleLogOut =()=>{
        logOut()
    }

    const links = <>
        <li className="">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Home
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/projects"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Our projects
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/contact"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Contact
            </NavLink>
        </li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

                            {links}

                        </ul>
                    </div>
                    <Link to={'/'} className="normal-case text-2xl font-youngSerif">Party Perfectionists</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                        {links}

                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="mr-1 text-xs">
                        <p>{user?.displayName}</p>
                        <p>{user?.email}</p>
                    </div>
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2">
                        <div className="w-10 rounded-full">
                            <img src={user ? 
                            user?.photoURL ? user?.photoURL : userDefaultPic 
                            : userDefaultPic
                                 } />
                        </div>
                    </label>
                    {
                        user ? <Link onClick={handleLogOut} className="py-2 px-6 text-white  rounded-none btn-neutral">Logout</Link> :
                        <Link to={'/login'} className="py-2 px-6 text-white rounded-none btn-neutral">login</Link>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Navbar;