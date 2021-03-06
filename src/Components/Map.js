import { useState, useRef, useEffect } from 'react';
import worldMap from '../Resources/world-map.png';
import { scale } from './Location';

const Map = ({location, setLocation}) => {
    const [map, setMap] = useState(null)

    const canvas = useRef();
    useEffect(() => {
        const ctx = canvas.current.getContext("2d");
        const img = new Image(709, 550);
        
        img.onload = () => {
            ctx.drawImage(img, 0, 0);
            setMap(img)
        };
        img.src = worldMap;
    }, [canvas]);

    function drawArea(x, y, drawWhite) {
        const ctx = canvas.current.getContext("2d");
        ctx.strokeStyle = drawWhite ? "#FFFFFF" : "#000000";
        ctx.beginPath()
        ctx.rect(x - 25, y - 25, 50, 50);
        ctx.moveTo(0, y); //Left Line
        ctx.lineTo(x - 25, y);
        ctx.moveTo(x, 0); //Top Line
        ctx.lineTo(x, y - 25);
        ctx.moveTo(885, y); //Right Line
        ctx.lineTo(x + 25, y);
        ctx.moveTo(x, 443); //Bottom Line
        ctx.lineTo(x, y + 25);
        ctx.rect(x - 1, y - 1, 2, 2)
        ctx.stroke();
    }

    function drawMap(evt) {
        const bounds = canvas.current.getBoundingClientRect();
        const [x, y] = [scale(evt.clientX, bounds.left, bounds.right, 0, 885), scale(evt.clientY, bounds.top, bounds.bottom, 0, 443)];

        const ctx = canvas.current.getContext("2d");
        ctx.drawImage(map, 0, 0);
        drawArea(x, y, true);
        drawArea(location.lon, location.lat, false)
    }

    function setSelector(evt) {
        const bounds = canvas.current.getBoundingClientRect();
        const [x, y] = [scale(evt.clientX, bounds.left, bounds.right, 0, 885), scale(evt.clientY, bounds.top, bounds.bottom, 0, 443)];

        setLocation(y, x);
    }

    return (
    <>
        <canvas ref={canvas} width="885" height="443" onMouseMove={drawMap} onClick={setSelector} ></canvas>
    </>);
}

export default Map