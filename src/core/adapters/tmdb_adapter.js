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
    }))
};