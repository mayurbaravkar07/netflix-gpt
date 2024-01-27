import React, { useEffect } from 'react';
import Header from './Header';
import useNowPlayingMovies from '../utils/hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';




const Browse = () => {

  // Fetch Data From the TMDB API and update the store
  useNowPlayingMovies();

 
  return (
    <div>
      <Header />
      <MainContainer/>
    </div>
   
  );
};

export default Browse;
