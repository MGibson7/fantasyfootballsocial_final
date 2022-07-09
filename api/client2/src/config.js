import axios from "axios"

export const axiosInstance = axios.create({
    baseURL : "https://fantasyfootballsocial.herokuapp.com/api/"
})