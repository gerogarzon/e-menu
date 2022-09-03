import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: 'https://emenuback.herokuapp.com'
});

export default axiosInstance;