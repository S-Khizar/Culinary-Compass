import React, { useEffect, useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Recipe from './components/subcomponents/Recipe'
import RecipeDetails from './components/RecipeDetails'
import data from './recipes.json'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RecipePage from './components/RecipePage'

const App = () => {
  const[recipe,setRecipes] = useState([]);
  useEffect(()=>{
    setRecipes(data);
  },[])
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home recipes={recipe}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/recipes' element={<RecipePage recipes={recipe} />}/>
          <Route path='/recipe/:id' element={<RecipeDetails recipes={recipe}/>}/>

        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App