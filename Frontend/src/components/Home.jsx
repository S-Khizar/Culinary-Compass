import React from 'react'
import HeroSection from './subcomponents/HeroSection'
import Recipe from './subcomponents/Recipe'

const Home = ({recipes}) => {
  return (
    <>
      <HeroSection/>
      <Recipe recipes={recipes}/>
    </>
  )
}

export default Home