import React, { useEffect } from 'react';
import Header from './Header';
import useNowPlayingMovies from '../utils/hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../utils/hooks/usePopularMovies';
import useTopRatedMovies from '../utils/hooks/useTopRatedMovies';
import useUpcomingMovies from '../utils/hooks/useUpcoming';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';




const Browse = () => {
  const showGPTSearch=useSelector(store=>store.gpt.showGPTSearch);

  // Fetch Data From the TMDB API and update the store
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
 
  return (
    <div>
      <Header />
     { showGPTSearch ?(
      <GPTSearch/>

     ):
      <React.Fragment>
          <MainContainer/>
          <SecondaryContainer/>
      </React.Fragment> 
       }
    </div>
   
  );
};

export default Browse;
