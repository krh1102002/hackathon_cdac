import axios from "axios";

import { config } from "./config";

export async function loadAllBlogs(){
    const url = `${config.backendUrl}/blog`
    const response = await axios.get(url , {headers: {
        token: sessionStorage.getItem('token')
    }})
    return response.data
}

export async function loadMyBlogs(){
    const url = `${config.backendUrl}/blog/user`
    const response = await axios.get(url , {headers: {
        token: sessionStorage.getItem('token')
    }})
    return response.data
}