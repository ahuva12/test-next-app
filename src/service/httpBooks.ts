import axios from "axios";

export const http = axios.create({
    baseURL: "http://localhost:3000/api/books",
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
});
