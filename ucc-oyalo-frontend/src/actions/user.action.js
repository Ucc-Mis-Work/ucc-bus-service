import api from "../../axios-client"
import { useAuth } from '@clerk/clerk-react';



// Get user from data base with clerk Id
export const getUserByClerkId= async()=>{

    const {userId} = useAuth()
    try {
        const {data} = await api.get(`getuser/${userId}`)
        return data
    } catch (error) {
        console.log(error);
    }
}