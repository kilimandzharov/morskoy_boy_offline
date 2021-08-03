import React from "react";
import App from "../App/App";
import ReactDOM from "react-dom";
import './End.css'

function End({playerCondition}) {
    return (
        <div className='end'>
            <div>Игра окончена. Победил {playerCondition ? 'Игрок' : 'Компьютер'}</div>
            <button className='restart-button' onClick={() => {
                ReactDOM.unmountComponentAtNode(
                    document.getElementById('root')
                );
                ReactDOM.render(<App/>,
                    document.getElementById('root'))

            }}> Попробовать снова
            </button>
        </div>
    )
}

export default End;
