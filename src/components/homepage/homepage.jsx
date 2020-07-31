import React from 'react';
import Directory from '../../components/directory/directory'

import './homepage.scss'

const HomePage = () => (
    <div className='homepage'>
        <header className="header">
            <div className="header__text-box">
                <div className="heading-primary">
                    <span className="heading-primary--main">Karo</span>
                    <span className="heading-primary--sub">Cantú</span>
                </div>
            </div>
        </header>
        <Directory/>
    </div>
)

export default HomePage;