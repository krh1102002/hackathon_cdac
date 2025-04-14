import axios from "axios";
import { config } from "./config";

export async function loginUser(email , password){
    const url = `${config.backendUrl}/user/login`
    const body = {
        email: email,
        password: password
    }

    const response = await axios.post(url , body)
    return response.data
}

export async function registerUser(full_name , email , password , phone_no){
    const url = `${config.backendUrl}/user/signup`
    const body = {
        full_name: full_name,
        email: email,
        password: password,
        phone_no: phone_no
    }

    const response = await axios.post(url , body)
    return response.data
}