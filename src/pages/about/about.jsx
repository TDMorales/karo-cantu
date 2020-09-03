import React from 'react';
import karo from '../../img/karo.jpg'

import './about.scss';

const AboutSection = () => (
    <div className='about'>
        <img className='about-image' src={karo} alt='hero'/>
        <h1>KARO CANTÚ</h1>
        <p>Photography is my main medium. I draw, too. But my drawings are more like my diary. A big inspiration for my work has always been a vulnerability and my own community. I grew up in Mexico and permanently moved to the States when I was 17 years old, so the culture shock was real. I seriously thought my life would be a Lizzie McGuire episode until it wasn’t. It was hard to fit in. Getting used to it was hard. This country made me a very emotional person, and I found myself constantly comparing myself to others instead of just creating. Bottling up my feelings and insecurities was getting old. Embracing that I am (and will never be) perfect made me grow as a creative.</p>
    </div>
)

export default AboutSection;