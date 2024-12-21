import React, { useEffect, useState } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import RecipeDetails from './components/RecipeDetails'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import RecipePage from './components/RecipePage'
import axios from 'axios'
import SurpriseMeRecipe from './components/SurpriseMeRecipe'

const App = () => {
  const[recipe,setRecipes] = useState([]);
  const[surpriseRecipe,setSurpriseRecipe]=useState([]);
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_BACKEND_LINK}/api/recipe`)
    .then((response)=>{
      setRecipes(response.data);
    })
    .catch((error)=>{
      console.log("error fetching api",error)
    })
   
  },[])

  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_BACKEND_LINK}/api/surprise-recipe`)
    .then((response)=>{
      setSurpriseRecipe(response.data);
    })
    .catch((error)=>{
      console.log("error fetching api",error)
    })
   
  },[])

  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          
          <Route path='/' element={<Home recipes={recipe}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/recipes' element={<RecipePage  />}/>
          <Route path='/recipe/:id' element={<RecipeDetails recipes={recipe } surpriseRecipe={surpriseRecipe}/>}/>
          <Route path='/recipe/surprise-me' element={<SurpriseMeRecipe/>}/>

        </Routes>
        <Footer/>
    </BrowserRouter>
  )
}

export default App