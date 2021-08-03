import React from 'react';
import './App.css';
import Dispose from "../Dispose/Dispose";
import Game from '../Game/Game';
import createCells from "../../createCells";


function App() {
    let [ships, setShips] = React.useState(
        [{
            id: Symbol(),
            size: 4,
            status: 'Bar',
            coords: null,
            reversed: false
        },
            {
                id: Symbol(),
                size: 3,
                status: "Bar",
                coords: null,
                reversed: false
            },
            {
                id: Symbol(),
                size: 3,
                status: "Bar",
                coords: null,
                reversed: false
            },
            {
                id: Symbol(),
                size: 2,
                status: "Bar",
                coords: null,
                reversed: false
            },
            {
                id: Symbol(),
                size: 2,
                status: "Bar",
                coords: null,
                reversed: false
            },
            {
                id: Symbol(),
                size: 2,
                status: "Bar",
                coords: null,
                reversed: false,
            },
            {
                id: Symbol(),
                size: 1,
                status: "Bar",
                coords: null,
                reversed: false
            },
            {
                id: Symbol(),
                size: 1,
                status: "Bar",
                coords: null,
                reversed: false
            },
            {
                id: Symbol(),
                size: 1,
                status: "Bar",
                coords: null,
                reversed: false
            },
            {
                id: Symbol(),
                size: 1,
                status: "Bar",
                coords: null,
                reversed: false
            }]
    );
    let [phase, setPhase] = React.useState('disposing');
    if(phase!=="disposing"){
        var info=ships.map(element=>({
            coords:element.coords,
            size:element.size,
            reversed:element.reversed
        }))
        var arrayInfo=new Array(10).fill(0).map(e=>new Array(10).fill(0));

        let changedShips=info.map(element=>createCells(element,'outline')).map(element=>element.map(el=>({x:el.x/50,y:el.y/50}))).flat(1);
        for(let item of changedShips){
            arrayInfo[item.y][item.x]=1;
        }
    }
    return (
        <div className='app'>
            <h1 className='app-header'>BattleShip</h1>
            <div className='app-container'>
                {
                    phase === 'disposing' ? <Dispose ships={ships} setShips={setShips} setPhase={setPhase}/> :
                        <Game ships={info} arrayInfo={arrayInfo} setPhase={setPhase}/>
                }
            </div>
        </div>
    )
}

export default App