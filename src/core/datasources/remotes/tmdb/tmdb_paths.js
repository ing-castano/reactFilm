export const TMDB_PATHS = {
    movies: {
        test: '/movie/11',
        search: '/search/movie',
        discover: '/discover/movie',
        trending: '/trending/movie/week',
        action: '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=Action',
        popular: '/movie/popular',
        top_rated: '/movie/top_rated',
        upcoming: '/movie/upcoming',
    },
    tv: {
        popular: '/tv/popular',
        top_rated: '/tv/top_rated',
        airing_today: '/tv/airing_today',
    },
    images: {
        poster: {
            sizes: {
                w92: "w92",
                w154: "w154",
                w185: "w185",
                w342: "w342",
                w500: "w500",
                w780: "w780",
                original: "original"
            },
            url: 'http://image.tmdb.org/t/p/',
        },
        backdrop: {
            sizes: {
                w300: "w300",
                w780: "w780",
                w1280: "w1280",
                original: "original"
            },
            url: 'http://image.tmdb.org/t/p/',
        },
    },
    
};