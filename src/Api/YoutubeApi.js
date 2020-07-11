import axois from 'axios';
let Api_Key= `AIzaSyBFAfZ3LksKzgHbn4mp_j1s2v9VaQrnJ7o`;

export const baseParams = {
    part:"snippet",
    maxResults: 10,
    key: Api_Key
}
let YoutubeApi=axois.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    
});

export default YoutubeApi;
