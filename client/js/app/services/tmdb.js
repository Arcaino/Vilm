import { API_BASE, API_KEY } from "../../../environments/environments.js"

export const getTrendingListForTheWeek = async () => {

    const response = await fetch(`${API_BASE}trending/all/week?api_key=${API_KEY}`);
    return response.json();
};

export const getTrendingMedia = async (request) => {

    const response = await fetch(`${API_BASE}trending/${request}?api_key=${API_KEY}`);
    return response.json();
};

export const getMediaById = async (id, mediaType) => {

    var response;
    if(mediaType == 'tv'){

        response = await fetch(`${API_BASE}tv/${id}?api_key=${API_KEY}&language=en-US`);
    }else if(mediaType == 'movie'){

        response = await fetch(`${API_BASE}movie/${id}?api_key=${API_KEY}&language=en-US`)
    };

    return response.json();
};

export const searchMedia = async (mediaType, query, page) => {

    var response;
    var data;
    if(mediaType == 'tv'){

        response = await fetch(`${API_BASE}search/tv?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`);
        data = setMediaType(response, mediaType);
    }else if(mediaType == 'movie'){

        response = await fetch(`${API_BASE}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`);
        data = setMediaType(response, mediaType);
    };

    return data;
};

const setMediaType = async (response, mediaType) => {

    let data = await response.json();
    data.results.forEach(result => {
        Object.assign(result, { media_type: mediaType});
    });

    return data;
};