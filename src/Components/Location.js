import { useState } from 'react';

function scale(val, min1, max1, min2, max2) {
    const p = (val - min1) / (max1 - min1);
    return min2 + p * (max2 - min2);
}

function useLocation(initialLatitude, initialLongitude) {
    const [latitude, setLatitude] = useState(initialLatitude);
    const [longitude, setLongitude] = useState(initialLongitude);

    const location = {
        lat:latitude,
        lon:longitude
    }

    function setLocation(lat, lon) {
        setLatitude(lat);
        setLongitude(lon);
    }

    const coordinates = {
        lat:Math.floor(scale(latitude, 0, 443, 90, -90) * 100)/100,
        lon:Math.floor(scale(longitude, 0, 885, -180, 180) * 100)/100
    }

    return {location, setLocation, coordinates};
 }

 export { useLocation, scale }