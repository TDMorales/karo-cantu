import React from 'react';
import MenuItem from '../menu-item/menu-item'

import tennis from '../../img/tennis-1.JPG'
import pinche from '../../img/lonely-star.jpg'
import karo from '../../img/karo.jpg'


import './directory.scss'

class Directory extends React.Component {
    constructor(){
        super();
        this.state ={
            sections: [{
                title: "photography",
                imageUrl: `${tennis}`,
                id: 1,
                linkUrl: 'photography'
            },
            {
                title: "pinches feelings",
                imageUrl: `${pinche}`,
                id: 2,
                linkUrl: ''
            },
            {
                title: "karo cantú",
                imageUrl: `${karo}`,
                id: 3,
                linkUrl: ''
            }
            ]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({id, ...otherSectionProps }) => (
                    <MenuItem key={id} {...otherSectionProps}/>
                ))}
            </div>
        )
    }
}

export default Directory;