import express from 'express'
import cors from 'cors'
import recipe from './recipe.js';
const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.send('Servers is ready');
}); 
app.get('/api/recipe', (req, res) => {
  res.send(recipe)
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
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serve at http://localhost:${port}`)
})