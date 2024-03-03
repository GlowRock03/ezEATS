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
                    <li><a href="https://github.com/LeBlinn">github</a></li>
                    <li><a href="https://www.linkedin.com/in/josh-blinn/">LinkedIn</a></li>
                </ul>
            </div>
            <div class="footer-section footer-felix">
                <h4>Felix Allard</h4>
                <ul>
                    <li><a href="https://github.com/falla055">github</a></li>
                    <li>LinkedIn</li>
                </ul>
            </div>
            <div class="footer-section footer-thomas">
            <h4>Thomas Ford</h4>
            <ul>
                <li><a href="https://github.com/GlowRock03">github</a></li>
                <li>LinkedIn</li>
            </ul>
            </div>
            <div class="footer-section footer-alec">
            <h4>Alec Bazinet</h4>
            <ul>
                <li><a href="https://github.com/AlecBaz">github</a></li>
                <li><a href="https://www.linkedin.com/in/alec-bazinet-273536218/">LinkedIn</a></li>
            </ul>
            </div>
        </footer>
        </div>
    );
}

export default footer;