import { useRef, useEffect } from 'react';
import worldMap from '../Resources/world-map.png';

const Map = () => {
    const canvas = useRef();

    useEffect(() => {
        const ctx = canvas.current.getContext("2d");

        const img = new Image(709, 550);
        img.src = worldMap;
        img.onload = () => ctx.drawImage(img, 0, 0);
    }, [canvas]);

    return (
    <>
        <canvas ref={canvas} width="709" height="550"></canvas>
    </>);
}

export default Map