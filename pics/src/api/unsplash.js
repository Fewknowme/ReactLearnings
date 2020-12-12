import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID MdGTo-ePs9SeF1LAuWe4Dl0a8GmaoOoKrsM-1UTc7XQ' 
    }
});