import axios, { AxiosInstance } from 'axios';

export const axiosClient = (): AxiosInstance => {
    return axios.create({
        baseURL: process.env.REACT_APP_API_BASE_URL,
    });
};
