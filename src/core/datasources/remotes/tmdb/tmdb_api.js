import axios from 'axios'
import config from './tmdb_config'

export const TMDB_API = axios.create({
    baseURL: `${config.API_URL}/${config.API_VERSION}`,
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_APP_TMDB_API_TOKEN}`
    },
    params: {
        language: 'es-AR',
    }
})

export const TMDB_IMG_API = axios.create({
    baseURL: `${config.API_IMG_URL}`,
    headers: {
        Authorization: `Bearer ${config.API_KEY}`
    },
    params: {
        language: 'es-AR',
    }
})

