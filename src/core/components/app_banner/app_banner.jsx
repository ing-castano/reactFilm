import React, { useState } from 'react'
import { randomNumberService } from '../../services/random_number_service';
import { TMDB_PATHS } from '../../datasources/remotes/tmdb/tmdb_paths';
import config from '../../datasources/remotes/tmdb/tmdb_config';
import NavBar from '../../../core/components/NavBar';



const Banner = ({movies}) => {

 const id = randomNumberService(movies.length);

  return (

    <>
      {
      movies.length ? 
        <div 
          style={{backgroundImage: `url(${movies[id].backdrop})`}}
          className={"w-full h-[720px] mb-24 flex flex-col bg-cover bg-center border-cyan-200 border-2] border-2"}>
          <NavBar />
          <div className='flex flex-col grow border-2 '>
            <div id="NSeries" className='flex grow-0 items-center h-14 border-2'>
              <p>N Series</p>
            </div>
            <div className='flex grow flex-col justify-center border-2'>
              <div id="title" className='md:w-1/3 p-3 border-2'>
                <h1 className=' font-sans text-lg' > {movies[id].title} </h1>
              </div>
              <div id="description" className='md:w-1/2 lg:w-1/3 p-3'>
                <h1 className=' font-sans text-lg' > {movies[id].description} </h1>
              </div>
              <div 
                id="buttons"
                className='flex w-1/4 p-3 justify-evenly border-2'>
                <div id="btnPlay" className='border-2'>
                  <button>Play</button>
                </div>
                <div id="btnMoreInfo" className="border-2">
                  <button>More Info</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        : ""   
      }
    </>
  )
}

export default Banner