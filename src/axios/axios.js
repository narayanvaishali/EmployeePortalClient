import axios from 'axios';
 
const instance = axios.create({
    baseURL: 'http://localhost:52429/api/',
    headers: {
        headerType: 'example header type'
    }
});
 
export default instance;