import React, { useEffect, useState } from 'react';
import image1 from '../images/1599184077492.jpeg'
import image2 from '../images/Jambalaya-IMAGE-3.jpg'
import image3 from '../images/Smoky-Spanish-Chickpeas-Rice.jpg'
import image4 from '../images/Mexican-Chicken-and-Rice-Soup-5-scaled.jpeg.webp'
import image5 from '../images/7278539-438587d79d664eedacf8b2eefdc3e1dc.webp'
import { db } from '../firebase';

import Recipe from './recipe';

import '../css/recipeContainer.css'

function recipeContainer() {
    
    /*
    useEffect(() => {
        db.collection('Recipes').limit(10).get().then((querySnapshot) => {
          const data = querySnapshot.docs.map(doc => doc.data());
          console.log(data); // Do something with the data
        });
      }, []);
      */
    
      const recipes = [
        {
          id: 1,
          name: 'Stuffed Summer Tomatoes',
          url: image1,
          ingredients: ['Olive Oil', 'Pesto', 'Courgette', 'Mushroom', 'Tomato'],
          moneySaved: 4.56,
        },
        {
          id: 2,
          name: 'Creole-Cajun Jambalaya',
          url: image2,
          ingredients: ['Vegetable Oil', 'Chicken Leg', 'Andouille Sausage', 'Yellow Onion', 'Green Bell Pepper', 'Celery Rib', 'Garlic', 'Chicken or Vegetable Stock', 'Worcestershire Sauce'],
          moneySaved: 2.37,
        },
        {
          id: 3,
          name: 'Smoky Spanish Rice',
          url: image3,
          ingredients: ['Long Grain Rice', 'Can Diced Tomato', 'Canned Green Chile', 'Taco Seasoning', 'Water'],
          moneySaved: 1.56,
        },
        {
          id: 4,
          name: 'Mexican Chicken & Wild Rice Soup',
          url: image4,
          ingredients: ['Olive Oil', 'Onion', 'Green Pepper', 'Sweetcorn', 'Chipotle Paste', 'Can Black Beans', 'Low Sodium Chicken Stock', 'Skinless Chicken Breasts', 'Coriander'],
          moneySaved: 1.27,
        },
        {
          id: 5,
          name: 'Slow-Cooker Chicken & Rice Bowls',
          url: image5,
          ingredients: ['Skinless Chicken Thigh', 'Cumin', 'Coriander', 'Kosher Salt', 'Unsalted Chicken Stock', 'Brown Rice', 'Low Sodium Chicken Stock', 'Skinless Chicken Breasts', 'Can Black Beans'],
          moneySaved: 1.27,
        },
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