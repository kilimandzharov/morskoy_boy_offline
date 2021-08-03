function countCoords(rawData){
    const elem = document.querySelector('.player');
    const parentOffset = {
        x: elem.offsetLeft,
        y: elem.offsetTop
    };



    let coords = {
        x: rawData.x + window.pageXOffset,
        y: rawData.y + window.pageYOffset
    }
    let {x,y}=coords;
    x=Math.round((x-parentOffset.x+2)/50)*50;
    y=Math.round((y-parentOffset.y+2)/50)*50;
    coords={x,y};

    return coords
}

export default countCoords;