import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { debounce } from 'lodash';

const RecipePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const debouncedFunction = useCallback(
    debounce((query) => {
      setDebouncedQuery(query);
    }, 500),
    []
  );
  useEffect(() => {
    debouncedFunction(searchQuery);
  }, [searchQuery, debouncedFunction]);
  useEffect(() => {
    const fetchRecipes = async () => {
      if (debouncedQuery.length === 0) {
        try {
          const response = await axios.get('http://localhost:3000/api/rec');
          setFilteredRecipes(response.data);
        } catch (error) {
          console.error('Error fetching all recipes:', error);
        }
      } else { 
        try {
          const response = await axios.get(`http://localhost:3000/api/rec?search=${debouncedQuery}`);
          setFilteredRecipes(response.data);
        } catch (error) {
          console.error('Error fetching filtered recipes:', error);
        }
      }
    };

    if (debouncedQuery || debouncedQuery === '') {
      fetchRecipes();
    }
  }, [debouncedQuery]);

  return (
    <article className="flex flex-col gap-9 my-9">
      <section className="mb-6 w-full flex justify-center">
        <input
          type="text"
          placeholder="Search recipes by name or ingredients"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-1/2 mx-auto p-2 border rounded-md"
        />
      </section>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(450px,1fr))] gap-10">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((element, index) => (
            <Card key={index} element={element} />
          ))
        ) : (
          <p className="text-gray-500">No recipes found for "{searchQuery}".</p>
        )}
      </section>

      <h3>Recommended Recipes</h3>
    </article>
  );
};

export default RecipePage;

// Card Component
const Card = ({ element }) => {
  return (
    <Link to={`/recipe/${element.id}`} className="no-underline">
      <div className="flex flex-col items-start">
        <img
          src={element.image}
          alt={element.title}
          className="w-full h-[260px] rounded-lg mb-5"
        />
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-black mb-2">{element.title}</h4>
          <h4 className="text-lg font-semibold text-orange-600">{element.cookingTime}</h4>
        </div>
      </div>
    </Link>
  );
};
