import axios from "axios";
import toast from "react-hot-toast";

const api = axios.create({
    baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
})


api.interceptors.request.use((config)=>{

    const token = sessionStorage.getItem('User_token')
    config.headers.Authorization = `Bearer ${token}`

    return config
})


api.interceptors.response.use((response)=>{
    return response
},
(error)=>{

    try {
        const { response } = error;
        if(response.status === 401){
            sessionStorage.removeItem('User_token')
        }

    } catch (error) {
        toast.error(error)
    }

    throw error;
})


export default api;
