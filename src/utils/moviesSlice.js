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
    }
  },
});

export const { addNowPlayingMovies,addTrailer } = movieSlice.actions;
export default movieSlice.reducer;