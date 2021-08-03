import React from 'react';
import './Ship.css';


function Ship({size,reversed,...props}) {
    var style;

    if(reversed){
        style={width: `${50 * size}px`,height: '50px'}
    } else{
        style={height: `${50 * size}px`}
    }


    return (
        <div className='ship'  style={{...style,...props.style}}/>
    )
}

export default Ship;