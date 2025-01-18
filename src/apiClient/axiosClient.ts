import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://be.azseo.net',
    headers: {
        Accept: '*/*',
        Authorization:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZFVzZXIiOiIxYzc1NTdkYS1lNGE4LTRjMmYtYTZjNC05MzE5ZmZiNDJhOTciLCJlbWFpbCI6Im5ndXllbmRpbmhoYW8yMDAzM0BnbWFpbC5jb20iLCJyb2xlIjoibWFuYWdlciIsImlhdCI6MTczNzE2MzQ2MywiZXhwIjoxNzM3MjQ5ODYzfQ.4udG1VqOIUTMZpx9_kaFZLyxllCnxSYyYL3NKSyTZNY',
    },
    timeout: 10000,
});

axiosClient.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosClient.interceptors.response.use(
    (response) => {
        return response.data;
    },
    (error) => {
        return Promise.reject(error.response?.data || error.message);
    }
);

export default axiosClient;
