import React, { useEffect, useState } from 'react'
import { FavoritesContext } from './favorites_context'
import { AppStorage } from '../../base/app_store';

const FAVORITE_KEY = "reactFilmsFavorite";

const FavoritesProvider = ({children}) => {
  //uso state para favoritos porque quiero que sea una lista que cuando agrego uno se actualice y se me renderice esa porcion de pagina.
  const [favorites, setFavorites] = useState([]);

  // useEffect para comunicarse con localStorage o servidor o API y cargar los favoritos al ingresar al sitio.
  useEffect(() => {
    const initFavs = async () => {
      const results = await AppStorage.get(FAVORITE_KEY);
      if(!results) return;
      setFavorites(results);
    };

    initFavs();
  },[]);


  const addFavorite = async (movie) => {
    const newList = [...favorites, movie];
    setFavorites(newList);
    await AppStorage.save(FAVORITE_KEY, newList);

  };

  const removeFavorite = async (movie) => {
    const newList = favorites.filter((fav) => fav.id !== movie.id);
    setFavorites(newList);
    await AppStorage.save(FAVORITE_KEY, newList);
  };

  const isFavorite = (movie) => {
    return favorites.some((fav) => fav.id === movie.id);
  };

  return (
    <FavoritesContext.Provider 
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}>
        {children}
    </FavoritesContext.Provider>
  )
}

export default FavoritesProvider