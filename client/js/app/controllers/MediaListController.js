import { getTrendingMedia } from "../services/tmdb.js";
import MediaList from "../models/MediaList.js";
import Midia from "../models/Midia.js";
import Movie from "../models/Movie.js";
import Tv from "../models/Tv.js";
import MediaFactory from "../services/MediaFactory.js";

export default class MediaListController{

    async createMediaList(request){

        //tipar aqui
        const {results} = await getTrendingMedia(request);

        let mediaList = [];
        results.forEach(item => {

            mediaList.push(MediaFactory.build(item));      
        });

        return new MediaList(mediaList);
    };
};