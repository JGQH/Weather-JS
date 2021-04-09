import { useState } from 'react';

const Data = ({coordinates}) => {
    const [info, setInfo] = useState(null);
    const [isLoading, setLoading] = useState(false);

    function getInfo() {
        setLoading(true);
        setInfo({
            "location": "Shuzenji (JP)", //Location
            "weather": "scattered clouds",
            "temperature": 11.49, // °C
            "pressure": 1017, // hPa
            "wind_speed": 0.89, // m/s
            "cloudiness": 45, // %
            "rain": undefined, // mm
            "snow": undefined // mm
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
            <div className="collection">
                <div className="field">Location:</div>
                <div className="value">{info.location}</div>
            </div>
            <div className="collection">
                <div className="field">Weather:</div>
                <div className="value">{info.weather}</div>
            </div>
            <div className="collection">
                <div className="field">Temperature:</div>
                <div className="value">{info.temperature} °C</div>
            </div>
            <div className="collection">
                <div className="field">Pressure:</div>
                <div className="value">{info.pressure} hPa</div>
            </div>
            <div className="collection">
                <div className="field">Wind Speed:</div>
                <div className="value">{info.wind_speed} ㎧</div>
            </div>
            <div className="collection">
                <div className="field">Cloud Speed: </div>
                <div className="value">{info.cloudiness}%</div>
            </div>
            {info.rain && <div className="collection">
                <div className="field">Rain (Last 3hr):</div>
                <div className="value">{info.rain}</div>
            </div>}
            {info.snow && <div className="collection">
                <div className="field">Snow (Last 3hr):</div>
                <div className="value">{info.snow}</div>
            </div>}
        </div>)}
    </>);
}

export default Data;