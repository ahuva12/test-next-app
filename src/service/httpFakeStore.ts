import axios from "axios";

export const http = axios.create({
    baseURL: "https://fakestoreapi.com/products",
    headers: {
        "Content-type": "application/json"
    }
});
