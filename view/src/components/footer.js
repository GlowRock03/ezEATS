import React from 'react';

import logo from '../images/ezeats logo.png';

import '../css/footer.css'

function footer() {
    return(
        <div id="footerwidth">
        <footer class="footer">
            <div class="footer-section footer-logo">
                <img id="footerlogo" src={logo} alt="Logo" />
                <p>Glad that you made it to the bottom.
                <br></br>Have a good day</p>
                <p>© ezeats.tech. All rights reserved.</p>
            </div>
            <div class="footer-section footer-josh">
                <h4>Josh Blinn</h4>
                <ul>
                    <li>github</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
            <div class="footer-section footer-felix">
                <h4>Felix</h4>
                <ul>
                    <li>github</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
            <div class="footer-section footer-thomas">
            <h4>Thomas</h4>
            <ul>
                <li>github</li>
                    <li>LinkedIn</li>
            </ul>
            </div>
            <div class="footer-section footer-alec">
            <h4>Alec</h4>
            <ul>
                <li>github</li>
                <li>LinkedIn</li>
            </ul>
            </div>
        </footer>
        </div>
    );
}

export default footer;