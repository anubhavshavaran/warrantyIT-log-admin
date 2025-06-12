import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://3.7.252.241:6002/api/",
    timeout: 0,
    // headers: {'X-Custom-Header': 'foobar'},
    validateStatus: function () {
        return true;
    }
});

export default axiosInstance;