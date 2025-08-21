import axios from "axios";

export type APIResponse<T = undefined> = {
    message: string;
    data?: T;
}

export const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: import.meta.env.VITE_TIMEOUT,
    headers: {
        "Content-Type": "application/json",
    },
});