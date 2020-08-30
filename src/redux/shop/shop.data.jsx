import tennis from '../../img/liveShows/tennis.JPG'
import tame_impala_1 from '../../img/liveShows/tame_impala_1.jpg'
import orville_peck_1 from '../../img/liveShows/orville_peck_1.jpg'
import beach_fossils_1 from '../../img/liveShows/beach_fossils_1.jpg'
import not_normal from '../../img/pinchesFeelings/not_normal.jpg'
import i_just_wanna_hug_my_friends from '../../img/pinchesFeelings/i_just_wanna_hug_my_friends.jpg'
import not_here_to_please_you from '../../img/pinchesFeelings/not_here_to_please_you.jpg'
import worst_of_myself from '../../img/pinchesFeelings/worst-of-myself.jpg'

const SHOP_DATA = {
    photography: {
        id: 1,
        title: 'Photography',
        routeName: 'photography',
        items: [
            {
                id: 1,
                name: "Tennis",
                imageUrl: `${tennis}`,
                size: '15 x 30',
                price: 25
            },
            {
                id: 2,
                name: "Tame Impala",
                imageUrl: `${tame_impala_1}`,
                size: '15 x 30',
                price: 25
            },
            {
                id: 3,
                name: "Orville Peck",
                imageUrl: `${orville_peck_1}`,
                size: '15 x 30',
                price: 25
            },
            {
                id: 4,
                name: "Beach Fossils",
                imageUrl: `${beach_fossils_1}`,
                size: '15 x 30',
                price: 25
            }
        ]
    },
    pinchesfeelings: {
        id: 2,
        title: "Pinches Feelings",
        routeName: 'pinches-feelings',
        items: [
            {
                id: 5,
                name: "Not Normal",
                imageUrl: `${not_normal}`,
                size: '15 x 30',
                price: 25
            },
            {
                id: 6,
                name: "I Just Wanna Hug My Friends",
                imageUrl: `${i_just_wanna_hug_my_friends}`,
                size: '15 x 30',
                price: 25
            },
            {
                id: 7,
                name: "Not Here To Please You",
                imageUrl: `${not_here_to_please_you}`,
                size: '15 x 30',
                price: 25
            },
            {
                id: 8,
                name: "Worst Of Myself",
                imageUrl: `${worst_of_myself}`,
                size: '15 x 30',
                price: 25
            },
        ]
    }
};

 export default SHOP_DATA;