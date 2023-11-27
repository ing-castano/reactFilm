import { fetchApiTMDB } from "../../../core/datasources/remotes/tmdb/tmdb_fetch";
import { TMDB_PATHS } from "../../../core/datasources/remotes/tmdb/tmdb_paths";

export const getTrendingMovies = async () => {
    const data = await fetchApiTMDB(TMDB_PATHS.movies.trending);
    return data;
};