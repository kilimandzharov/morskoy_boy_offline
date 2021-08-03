import React from 'react';
import Table from '../Table/Table';
import './Game.css';
import Computer from "../Computer/Computer";
import Ship from "../Ship/Ship";
import Mark from "../Mark/Mark";
import End from "../End/End";

function Game({ships, arrayInfo}) {


    const [info, setInfo] = React.useState({
        playerInfo: {
            array: [...arrayInfo],
            marks: []
        },
        computerInfo: {
            array: arrayInfo.map(element=>[...element]),
            marks: []
        },
        turn: 'player',
        stage: 'process'
    });
    const playerCondition = info.playerInfo.array.flat(1).filter(e => e).length;
    const computerCondition = info.computerInfo.array.flat(1).filter(e => e).length;

    return (
        playerCondition && computerCondition ?
            <div className='game'>
                <Computer info={info.turn} setInfo={setInfo} playerInfo={[...info.playerInfo.array]} computerInfo={[...info.computerInfo.array]}>
                    {info.computerInfo.marks.map((element, index) =>
                        <Mark key={index} type={element.type} coords={[element.x, element.y]} setInfo={setInfo}/>
                    )}
                </Computer>
                <Table>
                    {ships.map(element => <div
                        style={{left: element.coords.x, top: element.coords.y, position: 'absolute'}}>
                        <Ship reversed={element.reversed} size={element.size}/>
                    </div>)}
                    {
                        info.playerInfo.marks.map((element, index) =>
                            <Mark key={index} type={element.type} coords={[element.x, element.y]} setInfo={setInfo}/>
                        )
                    }
                </Table>

            </div> : <End playerCondition={playerCondition}/>

    )
}

export default Game