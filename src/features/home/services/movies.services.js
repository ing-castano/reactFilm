import { tmdbAdpater, tmdbTrailerAdapter } from "../../../core/adapters/tmdb_adapter";
import { TMDB_PATHS } from "../../../core/datasources/remotes/tmdb/tmdb_paths";
import { TMDB_API } from "../../../core/datasources/remotes/tmdb/tmdb_api";

export const getTrendingMovies = async (query) => {

    const response = await TMDB_API.get(TMDB_PATHS.movies.trending, {
        params: {
            query: query,
        }
    });
    const data = await response.data;
    return  tmdbAdpater(data);
};

export const getPopularMovies = async (query) => {

    const response = await TMDB_API.get(TMDB_PATHS.movies.popular, {
        params: {
            query: query,
        }
    });
    const data = await response.data;
    return  tmdbAdpater(data);
};

export const getTopRatedMovies = async (query) => {

    const response = await TMDB_API.get(TMDB_PATHS.movies.top_rated, {
        params: {
            query: query,
        }
    });
    const data = await response.data;
    return  tmdbAdpater(data);
};

export const getUpcomingMovies = async (query) => {

    const response = await TMDB_API.get(TMDB_PATHS.movies.upcoming, {
        params: {
            query: query,
        }
    });
    const data = await response.data;
    return  tmdbAdpater(data);
};


export const getPopularTv = async (query) => {

    const response = await TMDB_API.get(TMDB_PATHS.tv.popular, {
        params: {
            query: query,
        }
    });
    const data = await response.data;
    return  tmdbAdpater(data);
};

export const getTopRatedTv = async (query) => {

    const response = await TMDB_API.get(TMDB_PATHS.tv.top_rated, {
        params: {
            query: query,
        }
    });
    const data = await response.data;
    return  tmdbAdpater(data);
};

export const getAiringTv = async (query) => {

    const response = await TMDB_API.get(TMDB_PATHS.tv.airing_today, {
        params: {
            query: query,
        }
    });
    const data = await response.data;
    return  tmdbAdpater(data);
};

export const getTrailer = async (movie_id, content) => {

    if( content == 'movie') {
        var url = `${TMDB_PATHS.movies.video}/${movie_id}/videos`;
    }
    else if (content == 'tv') {
        var url = `${TMDB_PATHS.tv.video}/${movie_id}/videos`;
    }

    const response = await TMDB_API.get(url, {
        params: {
            language: 'en-US',
        }
    });
    const data = await response.data;
    return tmdbTrailerAdapter(data);
};