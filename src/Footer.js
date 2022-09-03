import './App.css';
import './Footer.css';

import logo1 from './image/youtube.png'
import logo2 from './image/twitter.png'
import logo3 from './image/instargram.png'

function Footer() {
    return (
        <div class="footerType">
            <div class="footer__inner">
                <div class="footer__imglogo">
                    <img class="img1" src={logo1} alt="imege1"/>
                    <img class="img2" src={logo2} alt="imege2"/>
                    <img class="img3" src={logo3} alt="imege3"/>
                </div>

                <div class="footer__about">
                <p class="famous_saying">Manners Make Man</p>
                <p class="team_name">Team name : Data Shredder</p>
                <p class="copy">Data Shredder© Copyright 2022,<br/>All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
} 

export default Footer;