import axios from 'axios';

const KEY = 'AIzaSyDXXl95HeJdO71HZuxX5doDa5U1ga7asc0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});