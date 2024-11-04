import axios from "axios";

export const http = axios.create({
    baseURL: "http://localhost:3000/api/books",
    headers: {
        "Content-type": "application/json",
        "access-controlallow-origin": "*"
    }
});
