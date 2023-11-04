import axios, { AxiosRequestHeaders } from "axios";
import { useAuth } from "@/config/auth";
import jwt_decode from "jwt-decode";
import { Token } from "@/app/interfaces";

function logout() {
    useAuth.getState().logout()
    window.location.href = '/login'
}

const baseURL = process.env.API_URL

export const axi = axios.create({
    baseURL
});

export const authAxios = axios.create({
    baseURL,
    withCredentials: true
});

authAxios.interceptors.request.use(async (config) => {
    const token: string = useAuth.getState().access;
    config.headers = {
        Authorization: `Bearer ${token}`,
    } as AxiosRequestHeaders;

    const tokenDecoded: Token = jwt_decode(token)

    const expiration = new Date(tokenDecoded.exp * 1000);
    const now = new Date();
    const fiveMin = 1000 * 60 * 5;

    if (expiration.getTime() - now.getTime() < fiveMin) 
        try {
            const response = await axi.post('/users/refresh/', { refresh: useAuth.getState().refresh })
            useAuth.getState().setToken(response.data.access, response.data.refresh)
        } catch (err) {
            logout()
        }
        return config
});