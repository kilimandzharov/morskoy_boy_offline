import React from 'react';
import './Mark.css';

function Mark(props) {
    if(props.type==='cross'){
        return (
            <div className='mark' style={{left:props.coords[0],top:props.coords[1],position:'absolute'}}>&#10006;</div>
        )
    }
    return(
        <div className='mark' style={{left:props.coords[0],top:props.coords[1],position:'absolute'}}>&#9899;</div>
        )


}

export default Mark