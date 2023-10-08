import toast, { Toaster } from "react-hot-toast";

const Toast = () => {
    toast("Hello World")
    return (
        <div>
            <div><Toaster/></div>
            <p>ok thik ache</p>
        </div>
    );
};

export default Toast;