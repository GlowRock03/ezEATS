import React from 'react';

import logo from '../images/ezeats logo.png';

import '../css/recipe.css'

function recipe(props) {

    // Check if ingredients exist and is an array before trying to join
    const ingredientsList = props.ingredients ? props.ingredients.join(" • ") : 'No ingredients';

    return( 
        <div class="recipe-border">
            <div class="recipe-header">
                <img src={logo} alt="image"/>
                <h2>{props.name}</h2>
            </div>
            <div class="ingredients">
                {ingredientsList}
            </div>
        <div class="prices">
            Money saved: <div class="saved">{props.moneySaved}$</div>
        </div>
    </div>
    );
}

export default recipe;