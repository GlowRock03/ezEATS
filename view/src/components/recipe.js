import React from 'react';

import '../css/recipe.css';

function Recipe(props) {
    // Check if ingredients exist and is an array before trying to join
    const ingredientsList = props.ingredients ? props.ingredients.join(" • ") : 'No ingredients';

    return ( 
        <div className="recipe-border">
            <div className="recipe-header">
                <img src={props.img} alt="recipe image" />
                <h2>{props.name}</h2>
            </div>
            <div className="ingredients">
                {ingredientsList}
            </div>
            <div className="prices">
                Money saved: <div className="saved">{props.moneySaved}$</div>
            </div>
        </div>
    );
}

export default Recipe;
