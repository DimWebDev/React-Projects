import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Access Key'
    }
})
// The create method is going to create an instance of the axios 
// client with a couple of default properties. It allows us
// to customize a specific request using headers.

