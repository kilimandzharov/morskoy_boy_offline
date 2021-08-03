import React from 'react';
import Table from '../Table/Table';
import Mark from "../../markClass";


function Computer(props) {
    if(props.info==='computer'){
        let pickUpArray=props.playerInfo.flat(1).map((element,index)=>({value:element,coords:[Math.floor(index/10),index%10]})).filter(element=>element.value!==null);
        let randomPosition=Math.floor(Math.random()*pickUpArray.length);
        const element=pickUpArray[randomPosition];
        let [left,top]=[element.coords[1]*50,element.coords[0]*50];
        setTimeout(()=>{
            props.setInfo(prevState=>{
                if(prevState.playerInfo.array[top/50][left/50]){
                    prevState.playerInfo.marks.push(new Mark('cross',left,top));

                } else{
                    prevState.playerInfo.marks.push(new Mark('dot',left,top));
                    prevState.turn='player';
                }
                prevState.playerInfo.array[top/50][left/50]=null;
                return {...prevState}
            })
        },800)

    }

    return (
        <div className='computer' onClick={(event) => {
            if(props.info==='computer'){
                return
            }
            let coordinates = {x: event.nativeEvent.pageX, y: event.nativeEvent.pageY};
            let elem = document.querySelector('.computer');
            let parentOffset = {
                x: elem.offsetLeft,
                y: elem.offsetTop
            };
            coordinates.x = Math.floor((coordinates.x - parentOffset.x) / 50)*50;
            coordinates.y = Math.floor((coordinates.y - parentOffset.y) / 50)*50;
            if(props.computerInfo[coordinates.y/50][coordinates.x/50]===null){
                return
            }
            props.setInfo(prevState=>{
                let value;
                if(prevState.computerInfo.array[coordinates.y/50][coordinates.x/50]){
                    value='cross';
                } else if(prevState.computerInfo.array[coordinates.y/50][coordinates.x/50]===0){
                    value='dot';
                    prevState.turn='computer';
                }
                prevState.computerInfo.array[coordinates.y/50][coordinates.x/50]=null;
                prevState.computerInfo.marks.push(new Mark(value,coordinates.x,coordinates.y));
                return {...prevState}
            })

        }}>
            <Table>{props.children}</Table>
        </div>
    )
}

export default Computer