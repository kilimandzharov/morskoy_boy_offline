import React from 'react';
import './Info.css';

function Info(){
    return(
        <div className='info'>
            —Перетаскивайте корабли с помощью мыши.<br/>
            —Разворачивайте корабль на правую кнопку мыши, когда тот находится на воде.<br/>
            —Корабли не должны касаться друг друга своими сторонами или углами.<br/>
        </div>
    )
}

export default Info;