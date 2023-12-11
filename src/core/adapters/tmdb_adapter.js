import config from  '../datasources/remotes/tmdb/tmdb_config';
import { TMDB_PATHS } from '../datasources/remotes/tmdb/tmdb_paths';


export const tmdbAdpater = (response) => {
    const {results} = response;
    return results.map((item)=>({
        id: item.id,
        title: item.title || item.name,
        poster: `${config.API_IMG_URL}${TMDB_PATHS.images.poster.sizes.w342}${item.poster_path}`,
        backdrop: `${config.API_IMG_URL}${TMDB_PATHS.images.backdrop.sizes.w1280}${item.backdrop_path}`,
        description: item.overview,
        rating: item.vote_average,
        video: item.video,
        date: item?.first_air_date ? item?.first_air_date  : item.release_date ,
    }))
};

export const tmdbTrailerAdapter = (response) => {
    const {results} = response;
    return results.map((item)=>({
        id: item.id,
        key: item.key,
        type: item.type,
        site: (item.site == "Youtube") ? "https://www.youtube.com/watch?v=" : item.site,
    })).filter((item)=>(item.type == 'Trailer' || item.type == 'Clip') );

};