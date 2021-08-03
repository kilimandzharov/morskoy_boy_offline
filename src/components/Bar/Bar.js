import React from 'react';
import './Bar.css';
import {useDrop} from 'react-dnd';



function Bar(props) {

    const value = props.children.filter(e => e).length;
    const [, drop] = useDrop({
        accept: 'ship',
        drop: (item, monitor) => {
            props.setShips(prevState => {
                const object = prevState.find((element) => element.id === item.id);
                object.status = 'Bar';
                object.coords = null;
                object.reversed = false;
                return prevState.map(element => element.id === item.id ? object : element);
            })
        }
    })
    return (
        <div className='bar' ref={drop} style={{backgroundColor: !value ? 'gray' : null, opacity: !value ? 0.2 : null}}>
            {props.children}
        </div>
    )
}

export default Bar