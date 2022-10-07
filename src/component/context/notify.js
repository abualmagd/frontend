import { toast } from "react-toastify";



export function notifyOk(message){
    return toast.done(message);
}


export function notifyError(message){
    return toast.error(message);
}






