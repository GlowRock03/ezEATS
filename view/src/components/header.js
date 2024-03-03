import React from 'react';

import logo from '../images/ezeats logo.png';

import '../css/header.css'

function header() {
    return( 
        <div id="navbarwidth">
        <nav class="navbar">
        <div class="logo">
          <img src={logo} alt="ezEATS"/>
        </div>
        <div class="nav-buttons">
          <button class="button button-signin">Sign in</button>
          <button class="button button-signup">Sign up</button>
        </div>
        </nav>
        </div>
    );
}

export default header;