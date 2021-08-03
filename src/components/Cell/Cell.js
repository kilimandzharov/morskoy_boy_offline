import React from 'react';
import './Cell.css';

let Cell =React.memo( function ({ident}) {
    console.log('render');
    let style, value, element;
    let letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', "I", 'J'];
    let numbers = new Array(10).fill(0).map((el, i) => i + 1);
    style = {
        display: 'inline-block',
        position: 'absolute',
        width: '50px',
        height: '50px',
        textAlign: 'center',
        color: 'black',
        userSelect: 'none',
        fontSize:'20px'
    };
    if (ident === 0) {
        element = [<span style={{...style, left: '-40px',paddingTop: '15px'}} className='cell-id'>{numbers[0]}</span>,<span style={{...style, top: '-30px'}} className='cell-id'>{letters[0]}</span>,
            ]
    } else if (Math.floor(ident / 10) === 0) {
        value = letters[ident];
        style.top = '-30px';
        element = <span style={style} className='cell-id'>{value}</span>;
    } else if (ident % 10 === 0) {
        value = numbers[Math.floor(ident / 10)];
        style.left = '-40px';
        style.paddingTop = '15px';
        element = <span style={style} className='cell-id'>{value}</span>;
    }
    return (
        <div className='cell'> {element} </div>
    )
})

export default Cell