import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AiFillGoogleCircle } from "react-icons/ai";
import { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const {signIn,googleSignIn} = useContext(AuthContext);

    const location = useLocation();
    // console.log(location);
    const navigate = useNavigate();
    const [loginError, setLoginError] = useState('');

    const handleLogin = e =>{
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')

        //clear error
        setLoginError('')


        // log in 
        signIn(email,password)
        .then(result=>{
            console.log(result);

            
            
            navigate(location?.state ? location.state : '/');
        })
        .catch(err=>{
            console.log(err.message);
            setLoginError(err.message)
           
        })

    }

    //login by google
    const handleGoogle = ()=>{
       googleSignIn()
       .then(re =>{
        console.log(re);
        navigate(location?.state ? location.state : '/');
       })
       .catch(err=>{
        console.log(err);
       })
    }

    

    return (
        <div className=" py-10">
           

            <div className="w-full max-w-sm p-4 drop-shadow-2xl  bg-white border border-gray-200 sm:p-6 md:p-8 dark:bg-violet-800 dark:border-gray-700 mx-auto">
                <form onSubmit={handleLogin} className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white text-center">Login to our platform</h5>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="name@gmail.com" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " required />

                        <p className="text-center text-red-500  pt-1">{loginError}</p>
                    </div>
                    <div className='border-b mx-auto'>
                        <h3 className=' text-white text-center'>Or,</h3>
                       <div className='flex justify-center'>
                       <button onClick={handleGoogle} className="btn btn-md mt-5 btn-outline btn-warning mb-5"> 
                        <span className='text-2xl'><AiFillGoogleCircle></AiFillGoogleCircle></span> Login with gmail</button>
                       </div>
                    </div>

                    <button type="submit" className="w-full text-black font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-300 dark:hover:bg-yellow-500 ">Login your account</button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <Link to={'/register'} href="#" className="text-blue-700 hover:underline dark:text-blue-500 text-xl">Create account</Link>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Login;