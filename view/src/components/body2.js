import React from 'react';

import logo from '../images/ezeats logo.png';

import '../css/body2.css'

function body2() {
    return( 
        <div class="TwoSidesContainer">
            <div class="imageSection">
            <img src={logo} alt="test logo" id="body2-img"/>
            </div>
            <div class="textSection">
                    <h1>Meet The Team</h1>
                    <p>Josh, Felix, Thomas, Alec</p>
                    <p>Hackathon 6 - 2024</p>
            </div>
        </div>
    );
}

export default body2;