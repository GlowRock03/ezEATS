import React from 'react';

import cart from '../images/grocery cart.png'

import '../css/body1.css'

function body1() {
    return( 
        <div class="TwoSidesContainer">
            <div class="textSection">
                    <h1>EAT ez & cheaper</h1>
                    <p>Scour local grocery stores</p>
                    <p>Find cheap deals to make cheap meals</p>
                    <div class="buttons">
                </div>
            </div>
            <div class="imageSection">
            <img src={cart} alt="test logo" id="body1-img"/>
            </div>
        </div>
    );
}

export default body1;