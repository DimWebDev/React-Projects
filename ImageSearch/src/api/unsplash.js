import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 1eCNV_wIi_6nQb8BiHBi_0qqEH6jF4KwKlRMx7dZeP4'
    }
})
// The create method is going to create an instance of the axios 
// client with a couple of default properties. It allows us
// to customize a specific request using headers.

