import express from 'express'
import cors from 'cors'
import recipe from './recipe.js';
import surpriseRecipe from './surpriseRecipe.js';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.send('Servers is ready');
}); 
app.get('/api/recipe', (req, res) => {
  res.json(recipe)
});
app.get('/api/surprise-recipe', (req, res) => {
  res.json(surpriseRecipe)
});
app.get('/api/rec', (req, res) => {
    const searchQuery = req.query.search?.toLowerCase() || '';
    const filteredRecipes = recipe.filter((rec) =>
      rec.title.toLowerCase().includes(searchQuery) ||
      rec.ingredients.some((ingredient) =>
        ingredient.toLowerCase().includes(searchQuery)
      )
    );
    res.json(filteredRecipes);
  });
 
  app.get('/api/recipe/surprise-me', (req, res) => {
    const { type } = req.query;
    const recipes = surpriseRecipe.filter((recipe) => recipe.type === type);
    console.log(`length of ${type} is  ${recipes.length}`)
    
    if (recipes.length === 0) {
      return res.status(404).send({ message: 'No recipes found for the selected type' });
    }
  
    const randomRecipe = recipes[Math.floor(Math.random() * recipes.length)];
    res.json(randomRecipe);
  });
  

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
})