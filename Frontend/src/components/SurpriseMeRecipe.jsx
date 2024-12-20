import React from 'react';
import { useNavigate } from 'react-router-dom';

const SurpriseMeRecipe = () => {
    const navigate = useNavigate();

    const handleSurpriseMe = async (type) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_BACKEND_LINK}/api/recipe/surprise-me?type=${type}`);

            if (response.ok) {

                const recipe = await response.json();


                navigate(`/recipe/${recipe.id}`);
            } else {
                alert('No recipe found for the selected type.');
            }
        } catch (error) {
            console.error('Error fetching surprise recipe:', error);
            alert('An error occurred while fetching the recipe.');
        }
    };


    return (
        <div className="flex flex-wrap min-h-screen w-full justify-between items-center gap-5 md:flex-nowrap mb-6">
            <div className="flex flex-col justify-between w-full bg-white p-4 border-2 border-black h-96">
                <h3 className="text-center text-2xl font-bold">Non-Veg Recipes</h3>
                <p>
                    Indulge in the rich, savory delights of non-vegetarian dishes with our Non-Veg Surprise section. Click and discover a hidden gem—a juicy kebab, a tender curry, or a smoky grilled dish that will tantalize your taste buds. Perfect for those seeking bold flavors and culinary adventure.
                </p>
                <button
                    className="bg-red-800 p-2 hover:bg-red-400"
                    onClick={() => handleSurpriseMe('non-veg')}
                >
                    Surprise Me
                </button>
            </div>
            <div className="flex flex-col justify-between w-full bg-white border-2 p-4 border-black h-96">
                <h3 className="text-center text-2xl font-bold">Veg Recipes</h3>
                <p>
                    Unlock the vibrant world of vegetarian cuisine with a simple click. Our Veg Surprise section brings you unexpected, delicious plant-based recipes, from bold curries and savory stir-fries to fresh, zesty salads. Each dish is crafted to inspire creativity and flavor, ensuring your next meal is a delightful surprise.
                </p>
                <button
                    className="bg-green-800 p-2 hover:bg-green-400"
                    onClick={() => handleSurpriseMe('veg')}
                >
                    Surprise Me
                </button>
            </div>
            <div className="flex flex-col justify-between w-full bg-white border-2 border-black p-4 h-96">
                <h3 className="text-center text-2xl font-bold">Vegan Recipes</h3>
                <p>
                    Embrace the plant-powered goodness of vegan cuisine with our Vegan Surprise section. With just one click, uncover a nourishing recipe—be it a vibrant bowl, a hearty stew, or a flavorful stir-fry—that will surprise and satisfy, proving that vegan food can be both delicious and exciting.
                </p>
                <button
                    className="bg-yellow-400 p-2 hover:bg-yellow-200"
                    onClick={() => handleSurpriseMe('vegan')}
                >
                    Surprise Me
                </button>
            </div>
        </div>
    );
};

export default SurpriseMeRecipe;
