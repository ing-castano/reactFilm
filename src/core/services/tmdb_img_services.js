const tmdbImgServices = () => ({
    backdrop_sizes: {
        w300: "w300",
        w780: "w780",
        w1280: "w1280",
        original: "original"
    },
    logo_sizes: {
        w45: "w45",
        w92: "w92",
        w154: "w154",
        w185: "w185",
        w300: "w300",
        w500: "w500",
        original: "original",
    },
    poster_sizes: {
        w92: "w92",
        w154: "w154",
        w185: "w185",
        w342: "w342",
        w500: "w500",
        w780: "w780",
        original: "original"
    },
    profile_sizes: {
        w45: "w45",
        w185: "w185",
        h632: "h632",
        original: "original",
    },
    still_sizes: {
        w92: "w92",
        w185: "w185",
        w300: "w300",
        original: "original",
    },
});

export default tmdbImgServices;

// desestructuring
// const {backdrop_sizes:{w300}} = tmdbImgServices();

/* practicar transformar esta respuesta del /configuration API en un json u objetos de objetos
const tmdbImgServices2 = () => ({
    "backdrop_sizes": [
        "w300",
        "w780",
        "w1280",
        "original"
      ],
      "logo_sizes": [
        "w45",
        "w92",
        "w154",
        "w185",
        "w300",
        "w500",
        "original"
      ],
      "poster_sizes": [
        "w92",
        "w154",
        "w185",
        "w342",
        "w500",
        "w780",
        "original"
      ],
      "profile_sizes": [
        "w45",
        "w185",
        "h632",
        "original"
      ],
      "still_sizes": [
        "w92",
        "w185",
        "w300",
        "original"
      ]
});

const {backdrop_sizes:[s1]} = tmdbImgServices2();
console.log(s1);
*/