import axios from "axios";

const axiosOpen = axios.create({
    baseURL:'http://localhost:5050'
})

const useAxiosOpen = () => {
    return axiosOpen
};

export default useAxiosOpen;