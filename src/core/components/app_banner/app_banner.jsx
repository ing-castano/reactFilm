import React, { useState } from 'react'
import { randomNumberService } from '../../services/random_number_service';
import { TMDB_PATHS } from '../../datasources/remotes/tmdb/tmdb_paths';
import config from '../../datasources/remotes/tmdb/tmdb_config';
import NavBar from '../../../core/components/NavBar';
import { Button } from '@nextui-org/react';
import AppTrailerModal from '../app_trailer_modal/app_trailer_modal';
import { Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter, useDisclosure } from "@nextui-org/react";
import useFetch from '../../hooks/useFetch';
import { getTrailer } from '../../../features/home/services/movies.services';
import AppInfoModal from '../app_info_modal/app_info_modal';




const Banner = ({movies}) => {

 const [index, setIndex] = useState(randomNumberService(movies.length));
 const [trailerIsOpen, SetTrailerIsOpen] = useState(false);
 const {isOpen: isOpenTrailer, onOpen: onOpenTrailer, onOpenChange: onOpenChangeTrailer} = useDisclosure();
 const {isOpen: isOpenBannerInfo, onOpen: onOpenBannerInfo, onOpenChange: onOpenChangeBannerInfo} = useDisclosure();
 const { data: trailer, error: trailerError, isLoading: trailerIsLoading, fetchData: fetchGetTrailer } = useFetch(getTrailer, movies[index]?.id, 'movie');



  return (

    <>
      {
      movies.length ? 
        <div 
          style={{backgroundImage: `url(${movies[index].backdrop})`}}
          className={"w-full h-[720px] mb-24 flex flex-col bg-cover bg-center brightness-75"}>
          
          <div className='mt-24 flex flex-col grow filter-none'>
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
                <h1 className=' font-sans text-lg text-white' > {movies[index].title} </h1>
              </div>
              <div id="description" className='md:w-1/2 lg:w-1/3 p-3'>
                <h1 className=' font-sans text-lg text-white' > {movies[index].description} </h1>
              </div>
              <div 
                id="buttons"
                className='flex w-1/4 p-3 justify-evenly '>
                <div id="btnPlay" className=''>
                  <Button size="lg" onPress={()=>{onOpenTrailer();fetchGetTrailer();}} >Play Trailer</Button>
                    <AppTrailerModal isOpen={isOpenTrailer} onOpenChange={onOpenChangeTrailer} trailerKey={trailer[0]?.key}/>
                </div>
                <div id="btnMoreInfo" className="">
                  <Button size="lg" onPress={onOpenBannerInfo}>More Info</Button>
                    <AppInfoModal isOpen={isOpenBannerInfo} onOpenChange={onOpenChangeBannerInfo} backdrop={movies[index]?.backdrop} title={movies[index]?.title} rating={movies[index]?.rating} date={movies[index]?.date} description={movies[index]?.description}/>
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