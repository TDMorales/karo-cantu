import React from 'react';
import karo from '../../img/karo.jpg'

import './about.scss';

const AboutSection = () => (
    <div className='about'>
        <img className='about-image' src={karo} alt='hero'/>
        <h1>KARO CANTÚ</h1>
        <p>"Photography is my main medium. I draw, too. But my drawings are more like my diary. A big inspiration for my work has always been a vulnerability and my own community. 
        <br/>I grew up in Mexico and permanently moved to the States when I was 17 years old, so the culture shock was real. I seriously thought my life would be a Lizzie McGuire episode until it wasn’t. It was hard to fit in. Getting used to it was hard. 
        <br/>This country made me a very emotional person, and I found myself constantly comparing myself to others instead of just creating. Bottling up my feelings and insecurities was getting old. Embracing that I am (and will never be) perfect made me grow as a creative.</p>
        <p>One of the first things my photography professor told us was that “art is nothing without a community” and it stuck with me. I love collaborating with people, and I love getting to know people even more. A lot of my photos have been taken at my house, and there’s always a bonding session behind them. I rarely work with models, so most of the people I photograph tend to be shy in front of the camera. It’s very rewarding to get to bond with them, make them feel comfortable and seeing them feel confident after they see the results. I also work a lot with musicians. Like I said before, I love music very much. Sadly, I am not musically talented so taking part in their projects by photographing them for promotional purposes is always an honor. The most important thing I want people to take away from my work is that I am here to create, I am here to help, and I am here to have fun."</p>
    </div>
)

export default AboutSection;