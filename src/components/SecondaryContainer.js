import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const { nowPlayingMovies, popularMovies, topRatedMovies, upcomingMovies } = useSelector(store => store.movies);

  if (nowPlayingMovies && popularMovies && topRatedMovies && upcomingMovies) {
    return (
      <div className='bg-black'>
        <div className='mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20'>
          <MovieList title={"Now Playing Movies"} movies={nowPlayingMovies}/>
          <MovieList title={"Top Rated Movies"} movies={topRatedMovies}/>
          <MovieList title={"Upcoming Movies"} movies={upcomingMovies}/>
          <MovieList title={"Popular"} movies={popularMovies}/>
        </div>
      </div>
    );
  } else {
    return null; // or a loading indicator
  }
};

export default SecondaryContainer;
