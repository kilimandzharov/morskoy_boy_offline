import Ship from "../Ship/Ship";
import {usePreview} from 'react-dnd-preview';
import React from "react";



function Preview(props) {

    const {display, item, style} = usePreview();
    if (!display) {
        return null;
    }


    return (

            <div style={style}>
                <Ship size={item.size} reversed={item.reversed} />
            </div>


    )

}

export default Preview;