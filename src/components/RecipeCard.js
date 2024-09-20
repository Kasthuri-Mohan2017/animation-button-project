// src/components/RecipeCard.js
import React from 'react';

const RecipeCard = ({ recipe, addToOrder }) => {
  return (
    <div className="recipe-card">
      <h3>{recipe.name}</h3>
      <p>{recipe.description}</p>
      <img src={recipe.image} alt={recipe.name} className="recipe-image" />
      <button onClick={() => addToOrder(recipe)}>Order Now</button>
    </div>
  );
};

export default RecipeCard;
