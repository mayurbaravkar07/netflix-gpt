import React from 'react'
import GPTSearchBar from './GPTSearchBar'
import GPTMovieSuggestions from './GPTMovieSuggestions'
import { BACKGORUND_LOGO } from '../utils/constants'

const GPTSearch = () => {
  return (
    <>
    <div className="fixed -z-10">
      <img className="h-screen object-cover" src={BACKGORUND_LOGO} alt="logo" />
    </div>
    <div className="">
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
  </>
  )
}

export default GPTSearch