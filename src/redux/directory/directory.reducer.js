import tennis from '../../img/tennis-1.JPG'
import pinche from '../../img/lonely-star.jpg'
import karo from '../../img/karo.jpg'

const INITIAL_STATE =  {
    sections: [{
        title: "photography",
        imageUrl: `${tennis}`,
        id: 1,
        linkUrl: 'shop/photography'
    },
    {
        title: "pinches feelings",
        imageUrl: `${pinche}`,
        id: 2,
        linkUrl: 'shop/pinchesfeelings'
    },
    {
        title: "karo cantú",
        imageUrl: `${karo}`,
        id: 3,
        linkUrl: 'about'
    }
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        default:
            return state;
    }
};

export default directoryReducer;