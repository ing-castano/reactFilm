import React, { useState } from 'react'
import { randomNumberService } from '../../services/random_number_service';
import { TMDB_PATHS } from '../../datasources/remotes/tmdb/tmdb_paths';
import config from '../../datasources/remotes/tmdb/tmdb_config';


const Banner = ({movies}) => {

 const id = randomNumberService(movies.length);

  return (
    <>
        <div>AppBanner</div>
        <div>
            <h1>{movies.length ? movies[id].title : ""}</h1>
            <img src={ movies.length ? `${config.API_IMG_URL}${TMDB_PATHS.images.backdrop.sizes.w1280}${movies[id].backdrop_path}` : ""  } />
        </div>    
    </>
  )
}

export default Banner