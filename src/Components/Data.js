import { useState } from 'react';

const Data = ({coordinates}) => {
    const [info, setInfo] = useState(null);
    const [isLoading, setLoading] = useState(false);

    function getInfo() {
        setLoading(true);
        setInfo({
            "weather": "scattered clouds"
        })
        //setLoading(true);
    }

    return (
    <>
        <div className="data-coordinates">
            <div className="coordinates">
                <h3>Latitude</h3>
                <p>{coordinates.lat}</p>
            </div>
            <div className="coordinates">
                <h3>Longitude</h3>
                <p>{coordinates.lon}</p>
            </div>
        </div>
        <div className="data-searcher">
            <button onClick={getInfo} disabled={isLoading}>Search Data</button>
        </div>
        {info && (
        <div className="data-collection">
            {info.weather}
        </div>)}
    </>);
}

export default Data;