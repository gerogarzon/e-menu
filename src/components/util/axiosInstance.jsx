import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'http://localhost:3100/api'
});

export default axiosInstance;