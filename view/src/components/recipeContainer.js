import React from 'react';
import Recipe from './recipe';

import '../css/recipeContainer.css'

function recipeContainer() {
    const recipes = [
        {
          id: 1,
          name: 'Recipe 1',
          url: 'urlsir',
          ingredients: ['Low Sodium', 'Vegetarian', 'Gluten Free'],
          moneySaved: 2
        },
        {
          id: 2,
          name: 'Recipe 2',
          url: 'urlsir',
          ingredients: ['Pescatarian', 'Egg Free', 'Soy Free', 'Low Sodium', 'Vegetarian', 'Gluten Free','Pescatarian', 'Egg Free', 'Soy Free', 'Low Sodium', 'Vegetarian', 'Gluten Free', 'Pescatarian', 'Egg Free', 'Soy Free', 'Low Sodium', 'Vegetarian', 'Gluten Free','Pescatarian', 'Egg Free', 'Soy Free', 'Low Sodium', 'Vegetarian', 'Gluten Free', 'Pescatarian', 'Egg Free', 'Soy Free', 'Low Sodium', 'Vegetarian', 'Gluten Free','Pescatarian', 'Egg Free', 'Soy Free', 'Low Sodium', 'Vegetarian', 'Gluten Free', 'Pescatarian', 'Egg Free', 'Soy Free', 'Low Sodium', 'Vegetarian', 'Gluten Free','Pescatarian', 'Egg Free', 'Soy Free', 'Low Sodium', 'Vegetarian', 'Gluten Free', 'Pescatarian', 'Egg Free', 'Soy Free', 'Low Sodium', 'Vegetarian', 'Gluten Free','Pescatarian', 'Egg Free', 'Soy Free', 'Low Sodium', 'Vegetarian', 'Gluten Free', 'Pescatarian', 'Egg Free', 'Soy Free', 'Low Sodium', 'Vegetarian', 'Gluten Free','Pescatarian', 'Egg Free', 'Soy Free', 'Low Sodium', 'Vegetarian', 'Gluten Free'],
          moneySaved: 3
        },
        {
            id: 3,
            name: 'Recipe 3',
            url: 'urlsir',
            ingredients: ['Pescatarian', 'Egg Free', 'Soy Free'],
            moneySaved: 3
        },
        {
            id: 4,
            name: 'Recipe 4',
            url: 'urlsir',
            ingredients: ['Pescatarian', 'Egg Free', 'Soy Free'],
            moneySaved: 3
        },
        {
            id: 5,
            name: 'Recipe 5',
            url: 'urlsir',
            ingredients: ['Pescatarian', 'Egg Free', 'Soy Free'],
            moneySaved: 3
        },
        {
            id: 6,
            name: 'Recipe 6',
            url: 'urlsir',
            ingredients: ['Pescatarian', 'Egg Free', 'Soy Free'],
            moneySaved: 3
        },
        {
            id: 7,
            name: 'Recipe 7',
            url: 'urlsir',
            ingredients: ['Pescatarian', 'Egg Free', 'Soy Free'],
            moneySaved: 3
        },
        {
            id: 8,
            name: 'Recipe 8',
            url: 'urlsir',
            ingredients: ['Pescatarian', 'Egg Free', 'Soy Free'],
            moneySaved: 3
        },
        // ... add as many recipes as you want
      ];


    return( 
        <div className="recipeContainer">
            {recipes.map((recipeItem) => (
            <Recipe
            key={recipeItem.id}
            name={recipeItem.name}
            img={recipeItem.url}
            ingredients={recipeItem.ingredients}
            moneySaved={recipeItem.moneySaved}
        />
      ))}
        </div>
    );
}

export default recipeContainer;