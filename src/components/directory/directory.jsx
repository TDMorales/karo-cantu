import React from 'react';
import MenuItem from '../menu-item/menu-item'

import tennis from '../../img/tennis-1.JPG'
import pinche from '../../img/lonely-star.jpg'

import './directory.scss'

class Directory extends React.Component {
    constructor(){
        super();
        this.state ={
            sections: [{
                title: "PHOTOGRAPHY",
                imageUrl: `${tennis}`,
                id: 1 
            },
            {
                title: "PINCHES FEELINGS",
                imageUrl: `${pinche}`,
                id: 2
            }
            ]
        }
    }

    render(){
        return(
            <div className='directory-menu'>
                {this.state.sections.map(({title, imageUrl, id}) => (
                    <MenuItem key={id} title={title} imageUrl={imageUrl}/>
                ))}
            </div>
        )
    }
}

export default Directory;