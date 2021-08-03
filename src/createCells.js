
function createCells(element,option){
    if(option==='area'){
        let cellsArray = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < element.size + 2; j++) {
                cellsArray.push({
                    x: element.reversed ? element.coords.x + (j - 1) * 50 : element.coords.x + (i - 1) * 50,
                    y: element.reversed ? element.coords.y + (i - 1) * 50 : element.coords.y + (j - 1) * 50
                })
            }
        }

        return cellsArray
    } else if(option === 'outline'){
        let infoDragCells = [];

        for (let i = 0; i < element.size; i++) {
            infoDragCells.push({
                x: element.reversed ? element.coords.x + i * 50 : element.coords.x,
                y: element.reversed ? element.coords.y  : element.coords.y+i*50
            })
        }
        return infoDragCells
    }
}

export default createCells