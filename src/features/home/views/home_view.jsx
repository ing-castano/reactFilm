import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../core/auth/hooks/use_auth';
import NavBar from '../../../core/components/NavBar';
import NewReleases from '../../../core/components/NewReleases';
import { TMDB_PATHS } from '../../../core/datasources/remotes/tmdb/tmdb_paths';
import tmdbImgServices from '../../../core/services/tmdb_img_services';
import config from '../../../core/datasources/remotes/tmdb/tmdb_config';
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


const HomeView = () => {

  const {isLoggedIn, login, logout} = useAuth();
  const { data: trendingM, error: trendingMError, isLoading: trendingMIsLoading, fetchData: fetchTrendingMovies } = useFetch(getTrendingMovies);
  const { data: topRatedM, error: topRatedMError, isLoading: topRatedMIsLoading, fetchData: fetchTopRatedMovies } = useFetch(getTopRatedMovies);
  const { data: upComingM, error: upComingMError, isLoading: upComingMIsLoading, fetchData: fetchUpComingMovies } = useFetch(getUpcomingMovies);
  const { data: popularT, error: popularTError, isLoading: popularTIsLoadig, fetchData: fetchPopularTV } = useFetch(getPopularTv);
  const { data: topRatedT, error: topRatedTError, isLoading: topRatedTIsLoading, fetchData: fetchTopRatedTV } = useFetch(getTopRatedTv);


  useEffect(() => {
    fetchTrendingMovies(); 
    fetchTopRatedMovies();
    fetchUpComingMovies();
    fetchPopularTV();
    fetchTopRatedTV();

  }, []);

  
  return (
    <>
      <Banner
        movies = { trendingM }
      />

      <NewReleases
        title = {"Next Upcoming..."} 
        data = { upComingM } 
      />
      
      <AppCarousel
        title = {"Top Rated Movies"} 
        data = {topRatedM}
      />

      <AppCarousel
        title = {"Trending Movies"} 
        data = {trendingM}
      />

      <AppCarousel
        title = {"Popular Tv Shows"} 
        data = {popularT}
      />

      <AppCarousel
        title = {"Top Rated Tv Shows"} 
        data = {topRatedT}
      />


      <AppButton onClick={ () => {
        alert("Hola")
      }}>
        Mostrar Alerta
      </AppButton>
      <button onClick={logout}>Logout</button>

      
      <AppCard
      config = {{
        image: {
          show: true,
          src: `https://picsum.photos/150/200`,
          alt: `hola`,
        },
        width: '150px',
        height: '200px',
      }}>
        <AppCard.Header />
        <AppCard.Body />
        <AppCard.Footer>
            <p className='text-center'>Play Trailer</p>
        </AppCard.Footer>
      </AppCard>
    </>
  )
}

export default HomeView