import './Dispose.css';
import Player from "../Player/Player";
import React from 'react';
import Bar from "../Bar/Bar";
import {DndProvider} from 'react-dnd';
import DragShip from "../DragShip/DragShip";
import Preview from "../Preview/Preview";
import countCoords from "../../countCoords";
import MultiBackend from 'react-dnd-multi-backend';
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import createCells from "../../createCells";
import Info from "../Info/Info";



function Dispose({ships,setShips,setPhase}) {
    function onStart(){

        if(!ships.filter(element=>element.status==='Bar').length){
            setPhase('started');
        } else{
            alert('Расставьте все корабли по полю, чтобы начать играть')
        }


    }

    function canDrop(item, monitor) {

        function checkSur(extraItem) {
            let infoAreaCells = ships.filter(element => element.coords && element.id !== extraItem.id)
                .map(element => ({
                    coords: element.coords,
                    reversed: element.reversed,
                    size: element.size
                })).map(element => createCells(element, 'area'))


            let infoDragCells = createCells(extraItem, 'outline');





            for (let areaItem of infoAreaCells) {
                for (let areaCell of areaItem) {
                    for (let dragCell of infoDragCells) {
                        if (areaCell.x === dragCell.x && areaCell.y === dragCell.y) {
                            return false
                        }
                    }

                }
            }
            return true
        }


        const elem = document.querySelector('.player');
        const parentOffset = {
            x: elem.offsetLeft,
            y: elem.offsetTop
        };
        const rightItemCoords = {
            x: monitor.getSourceClientOffset().x,
            y: monitor.getSourceClientOffset().y
        }
        const itemCoordsFromParent = countCoords(rightItemCoords,);
        const extraItem = {
            ...item, coords:
                {
                    x: itemCoordsFromParent.x,
                    y: itemCoordsFromParent.y
                }
        };
        rightItemCoords.x+= + window.pageXOffset;
        rightItemCoords.y+= + window.pageYOffset;

        const firstCondition = !(rightItemCoords.x + 20 < parentOffset.x || rightItemCoords.y + 20 < parentOffset.y ||
            (item.reversed && (rightItemCoords.x + item.size * 50 > parentOffset.x + 520 || rightItemCoords.y + 50 > parentOffset.y + 520))
            || (!item.reversed && (rightItemCoords.x + 50 > parentOffset.x + 520 || rightItemCoords.y + 50 * item.size > parentOffset.y + 520)));
        const secondCondition = checkSur(extraItem);
        return firstCondition && secondCondition
    }


    function evalRightClick(event, status, id, size) {
        event.preventDefault();
        if (status === 'Bar') {
            return
        }
        let elem = ships.find((element) => element.id === id);
        const copy = {...elem};
        copy.reversed = !copy.reversed;
        let value = elem.reversed;

        if (value) {
            if (elem.size > 10 - elem.coords.y / 50) {
                return
            }
        } else {
            if (elem.size > 10 - elem.coords.x / 50) {
                return
            }
        }

        let infoDragCells = createCells(copy, 'outline');
        let infoAreaCells = ships.filter(element => element.id !== elem.id && element.coords).map(element => createCells(element, 'area'));

        for (let areaItem of infoAreaCells) {
            for (let areaCell of areaItem) {
                for (let dragCell of infoDragCells) {
                    if (areaCell.x === dragCell.x && areaCell.y === dragCell.y) {
                        return false
                    }
                }

            }
        }

        setShips(prevState => {
            let el = prevState.find((element) => element.id === id);
            el.reversed = !el.reversed;
            return [...prevState]

        })


    }

    return (

        <DndProvider backend={MultiBackend} options={HTML5toTouch}>
            <div className='dispose'>
                <Player setInner={setShips} canDrop={canDrop}>
                    {ships.map((element, index) => element.status === 'Table' ?
                        <DragShip key={index} size={element.size} id={element.id} coords={element.coords}
                                  status={element.status} evalRightClick={evalRightClick}
                                  reversed={element.reversed}/> : null)}
                    <Info/>
                </Player>
                <Bar setShips={setShips}>
                    {ships.map((element, index) => element.status === 'Bar' ?
                        <DragShip key={index} size={element.size} id={element.id}/> : null)}
                </Bar>
            </div>
            <Preview ships={ships}/>
            <div className='button-container'>
                <button className='start-button' onClick={onStart}> Start Game</button>
            </div>

        </DndProvider>




    );
}


export default Dispose;
