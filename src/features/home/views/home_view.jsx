import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../core/auth/hooks/use_auth';
import NavBar from '../../../core/components/NavBar';
import NewReleases from '../../../core/components/NewReleases';
import { TMDB_PATHS } from '../../../core/datasources/remotes/tmdb/tmdb_paths';
import tmdbImgServices from '../../../core/services/tmdb_img_services';
import AppButton from '../../../core/components/app_button/app_button';
import { AppSwiper } from '../../../core/components/app_swiper/app_swiper';
import AppSwiperSlide from '../../../core/components/app_swiper/components/app_swiper_slide';
import Banner from '../../../core/components/app_banner/app_banner';
import { getAiringTv, getPopularTv, getTopRatedMovies, getTopRatedTv, getTrendingMovies, getUpcomingMovies } from '../services/movies.services';
import { randomNumberService } from '../../../core/services/random_number_service';
import { tmdbAdpater } from '../../../core/adapters/tmdb_adapter';
import useFetch from '../../../core/hooks/useFetch';
import Carousel from '../../../core/components/app_carousel_section/app_carousel_section';
import AppCarousel from '../../../core/components/app_carousel_section/app_carousel_section';
import AppCard from '../../../core/components/app_card/app_card';
import AppModal from '../../../core/components/app_modal/app_modal';
import { useModal } from '../../../core/components/app_modal/hook/use_modal';
import {  Modal,   ModalContent,   ModalHeader,   ModalBody,   ModalFooter, useDisclosure, Button} from "@nextui-org/react";
import AppNextuiModal from '../../../core/components/app_nextui_modal/app_nextui_modal';


const HomeView = () => {

  const {isLoggedIn, login, logout} = useAuth();
  const { data: trendingM, error: trendingMError, isLoading: trendingMIsLoading, fetchData: fetchTrendingMovies } = useFetch(getTrendingMovies);
  const { data: topRatedM, error: topRatedMError, isLoading: topRatedMIsLoading, fetchData: fetchTopRatedMovies } = useFetch(getTopRatedMovies);
  const { data: upComingM, error: upComingMError, isLoading: upComingMIsLoading, fetchData: fetchUpComingMovies } = useFetch(getUpcomingMovies);
  const { data: popularT, error: popularTError, isLoading: popularTIsLoading, fetchData: fetchPopularTV } = useFetch(getPopularTv);
  const { data: topRatedT, error: topRatedTError, isLoading: topRatedTIsLoading, fetchData: fetchTopRatedTV } = useFetch(getTopRatedTv);
  // const {isOpen, openModal, closeModal} = useModal(); // Modal a Mano

  

  useEffect(() => {
    fetchTrendingMovies(); 
    fetchTopRatedMovies();
    fetchUpComingMovies();
    fetchPopularTV();
    fetchTopRatedTV();

  }, []);

  
  return (
    <>
      <NavBar />
      
      <Banner movies = { trendingM } />

      <NewReleases
        title = {"Next Upcoming..."} 
        data = { upComingM } 
      />
      
      <AppCarousel
        title = {"Top Rated Movies"} 
        data = {topRatedM}
        content = {'movie'}
      />

      <AppCarousel
        title = {"Trending Movies"} 
        data = {trendingM}
        content = {'movie'}
      />

      <AppCarousel
        title = {"Popular Tv Shows"} 
        data = {popularT}
        content = {'tv'}
      />

      <AppCarousel
        title = {"Top Rated Tv Shows"} 
        data = {topRatedT}
        content = {'tv'}
      />

      { /* //Diseño de Componente Propio pasando props
      <AppButton onClick={ () => {
        alert("Hola")
      }}>
        Mostrar Alerta
      </AppButton>
      */
      }
      {/* // Modal a Mano
      <button onClick={openModal}>Abrir Modal</button>
      <AppModal 
        open={isOpen}
        onClickedOut={closeModal}
      >
        <div 
          style={{
          height: '300px',
          width: '300px',
          backgroundColor: 'white',
          color: 'red',
        }}>
            hola, soy un modal. podes cerrarme haciendo click afuera o en el boton.
            <br></br>
            <button onClick={closeModal}>Cerrar aca!</button>
        </div>
      </AppModal>
      */}

      

    </>
  )
}

export default HomeView