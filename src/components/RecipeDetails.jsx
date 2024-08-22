import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = ({ recipes }) => {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const filteredRecipe = recipes.find((recipe) => recipe.id === id);
      if (filteredRecipe) {
        setRecipeDetails(filteredRecipe);
      } else {
        setError('Recipe not found');
      }
    } catch (err) {
      setError('An error occurred while fetching the recipe');
    } finally {
      setLoading(false);
    }
  }, [id, recipes]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    recipeDetails && (
      <div className="recipe-details min-h-[810px] max-w-[1000px] mx-auto">
      <img src={recipeDetails.image} alt={recipeDetails.title} className="w-full h-[400px] rounded-2xl mb-5" />
      <h1 className="mb-2">{recipeDetails.title}</h1>
      <p className="mb-9 text-gray-500 text-xl">{recipeDetails.description}</p>
      <div className="flex flex-col gap-3 mb-9">
        <h3 className="text-gray-700 text-xl font-bold ">Steps:</h3>
        <ul className="flex flex-col gap-1 list-inside text-xl">
          {recipeDetails.steps && recipeDetails.steps.map((element, index) => (
            <li key={index}>{element}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-3 mb-9">
      <h3 className="text-gray-700 text-xl font-bold ">Ingredients:</h3>
      <ul className="flex flex-col gap-1 list-inside text-xl">
        {recipeDetails.ingredients && recipeDetails.ingredients.map((element, index) => (
          <li key={index}>{element}</li>
        ))}
      </ul>
      </div>
      <h5 className="text-orange-600 text-xl font-semibold mb-9">Cooking Time :  {recipeDetails.cookingTime}</h5>
    </div>
        )
    ) 
    
  
};

export default RecipeDetails;

