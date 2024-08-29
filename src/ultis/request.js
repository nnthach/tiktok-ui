import axios from 'axios';

//https://tiktok.fullstack.edu.vn/api/
//process.env.REACT_BASE_URL

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options)
    return response.data
};

export default request;
