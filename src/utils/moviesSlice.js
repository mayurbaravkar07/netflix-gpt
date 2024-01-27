import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null, // Set initial state as an array
    trailer:null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addTrailer:(state,action)=>{
        state.trailer=action.payload;
    },

    addPopularMovies:(state,action)=>{
      state.popularMovies=action.payload;
    },

    addTopRatedMovies:(state,action)=>{
      state.topRatedMovies=action.payload;
    },
    addUpcomingMovies:(state,action)=>{
      state.upcomingMovies=action.payload;
    }
  },
});

export const { addNowPlayingMovies,addTrailer,addPopularMovies ,addTopRatedMovies,addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;
