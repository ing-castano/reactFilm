import axios from 'axios'
import {API_URL, API_KEY, API_VERSION, API_IMG_URL} from '../tmdb/tmdb_config'

export const TMDB_API = axios.create({
    baseURL: `${API_URL}${API_VERSION}`,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
    },
    params: {
        language: 'es-AR',
    }
})

export const TMDB_IMG_API = axios.create({
    baseURL: `${API_IMG_URL}`,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`,
    },
    params: {
        language: 'es-AR',
    }
})

