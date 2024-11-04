import axios from "axios";

export const http = axios.create({
    baseURL: "/api/books",
    headers: {
        "Content-type": "application/json",
    }
});
