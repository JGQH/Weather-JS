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

    return {location, setLocation};
 }

 export { useLocation, scale }