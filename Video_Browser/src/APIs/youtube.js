import axios from 'axios';

const KEY='AIzaSyDDGpd57P_xoz2_tWPuzah51EB5OXXTOQs';

export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
});