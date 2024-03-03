import React from 'react';

import teampic from '../images/teampic.jpg';

import '../css/body2.css'

function body2() {
    return( 
        <div class="TwoSidesContainer">
            <div class="imageSection2">
            <img src={teampic} alt="team pic" class="imgbody2"/>
            </div>
            <div class="textSection2">
                    <h1>Meet The Team</h1>
                    <p>Josh, Felix, Thomas, Alec</p>
                    <p>Hackathon 6 - 2024</p>
            </div>
        </div>
    );
}

export default body2;