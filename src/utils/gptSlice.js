import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGPTSearch:false,
        movieResults: null,
        movieNames: null,
    },
    reducers:{
          toogleGPTSearchView:(state)=>{
            state.showGPTSearch=!state.showGPTSearch;
          },
          addGPTMovieResult: (state, action) => {
            const { movieNames, movieResults } = action.payload;
            state.movieNames = movieNames;
            state.movieResults = movieResults;
          }
    },
});

export const {toogleGPTSearchView,addGPTMovieResult}=gptSlice.actions;

export default gptSlice.reducer;
