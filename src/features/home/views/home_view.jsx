import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../core/auth/hooks/use_auth';
import NavBar from '../../../core/components/NavBar';
import NewReleases from '../../../core/components/NewReleases';
import {fetchApiTMDB,  fetchApiImgTMDB } from '../../../core/datasources/remotes/tmdb/tmdb_fetch';
import { TMDB_PATHS } from '../../../core/datasources/remotes/tmdb/tmdb_paths';
import tmdbImgServices from '../../../core/services/tmdb_img_services';
import config from '../../../core/datasources/remotes/tmdb/tmdb_config';
import AppButton from '../../../core/components/app_button/app_button';
import { AppSwiper } from '../../../core/components/app_swiper/app_swiper';
import AppSwiperSlide from '../../../core/components/app_swiper/components/app_swiper_slide';
import Banner from '../../../core/components/app_banner/app_banner';
import { getTrendingMovies } from '../services/movies.services';
import { randomNumberService } from '../../../core/services/random_number_service';


const HomeView = () => {

  const {isLoggedIn, login, logout} = useAuth();
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      //const data = await fetchApiTMDB(TMDB_PATHS.test);
      //console.log(data);
      //const query = 'rocky';
      //const data2 = await fetchApiTMDB(TMDB_PATHS.search, query);
      //console.log(data2);
      const data = await getTrendingMovies();
      setTrending(data.results);
      //const data4 = await fetchApiImgTMDB(`${w300}/1E5baAaEse26fej7uHcjOgEE2t2.jpg`);
      //console.log(data3);
    }
    fetchTrendingMovies();
    //setRandomId(randomNumberService(trending.length));

  },[]);

  
  return (
    <>
      <NavBar />
      <div>
        <h1>HomeView</h1>
        {JSON.stringify(isLoggedIn)}
      </div>
      <Banner
        movies = { trending }
      />

      <NewReleases 
        movies = { trending } 
      />
      <div>
        <h1>Peliculas Mejor Puntuadas</h1>
      </div>
      <AppSwiper>
        {Array.from({length: 10}).map((_, index) => (
          <AppSwiperSlide key={index} >
              <div 
              style={{
                height:"200px",
                width:"150px",
                backgroundColor:"red",
              }}
              >
                  {index}
              </div>
          </AppSwiperSlide>
        ))}
      </AppSwiper>
      <AppButton onClick={ () => {
        alert("Hola")
      }}>
        Mostrar Alerta
      </AppButton>
      <button onClick={logout}>Logout</button>
    </>
  )
}

export default HomeView