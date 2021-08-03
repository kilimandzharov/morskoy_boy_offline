import React from 'react';
import {useDrag} from "react-dnd";
import Ship from "../Ship/Ship";
import './DragShip.css';
import {getEmptyImage} from 'react-dnd-html5-backend';

function DragShip({size, id, coords, status, reversed, evalRightClick}) {
    const [{isDragging}, drag, preview] = useDrag({
        type: 'ship',
        item: {
            size,
            id,
            reversed,
            coords,
            status

        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        })
    });
    let position = coords ? {
        left: coords.x,
        top: coords.y,
        position: 'absolute'
    } : {};
    React.useEffect(() => {
        preview(getEmptyImage(), {captureDraggingState: true});
    }, []);

    return (
        <div style={{...position, opacity: isDragging ? 0 : 1}} ref={drag}
             onContextMenu={(event) => evalRightClick ? evalRightClick(event, status, id, size):null} className='drag-ship'>
    <Ship size={size} reversed={reversed}/>
</div>
)
}

export default DragShip