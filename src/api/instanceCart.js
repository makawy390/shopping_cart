
import axios from 'axios';

const instanceCart = axios.create({
    baseURL : 'https://dummyjson.com'
})
export default instanceCart;