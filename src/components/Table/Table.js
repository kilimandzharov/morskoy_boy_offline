import React from 'react';
import './Table.css';
import Cell from '../Cell/Cell';

function Table(props){
    let empty=new Array(100).fill(0);

    return (
        <div className='table'>
            {empty.map((elem,index)=><Cell key={index} ident={index}/>)}
            {props.children}
        </div>
    )
}

export default Table;