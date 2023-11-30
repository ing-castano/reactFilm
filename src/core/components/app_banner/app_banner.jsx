import React, { useState } from 'react'
import { randomNumberService } from '../../services/random_number_service';
import { TMDB_PATHS } from '../../datasources/remotes/tmdb/tmdb_paths';
import config from '../../datasources/remotes/tmdb/tmdb_config';
import NavBar from '../../../core/components/NavBar';
import { Button } from '@nextui-org/react';



const Banner = ({movies}) => {

 const id = randomNumberService(movies.length);

  return (

    <>
      {
      movies.length ? 
        <div 
          style={{backgroundImage: `url(${movies[id].backdrop})`}}
          className={"w-full h-[720px] mb-24 flex flex-col bg-cover bg-center brightness-75"}>
          <NavBar>
          </NavBar>
          <div className='flex flex-col grow filter-none'>
            <div className='flex'>
              <div id="NSeries" className='flex grow-0 text-red-700 text-8xl font-bold items-center'>
                <p>N</p>
              </div>
              <div id="NSeries" className='flex grow-0 text-white items-end pb-2 text-xl'>
                <p>Series</p>
              </div>
            </div>
            <div className='flex grow flex-col justify-center '>
              <div id="title" className='md:w-1/3 p-3'>
                <h1 className=' font-sans text-lg text-white' > {movies[id].title} </h1>
              </div>
              <div id="description" className='md:w-1/2 lg:w-1/3 p-3'>
                <h1 className=' font-sans text-lg text-white' > {movies[id].description} </h1>
              </div>
              <div 
                id="buttons"
                className='flex w-1/4 p-3 justify-evenly '>
                <div id="btnPlay" className=''>
                  <Button size="lg" >Play Trailer</Button>
                </div>
                <div id="btnMoreInfo" className="">
                  <Button size="lg">More Info</Button>
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