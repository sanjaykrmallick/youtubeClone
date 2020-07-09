import axois from 'axios';
import Axios from 'axios';

let Api_Key= `AIzaSyBFAfZ3LksKzgHbn4mp_j1s2v9VaQrnJ7o`;

let YoutubeApi=axois.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    headers:{},
    params: {
        part:'snippet',
        maxResult:10,
        key: Api_Key,
    },
});

export default YoutubeApi
