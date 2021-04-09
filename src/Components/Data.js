import { useState } from 'react';

const Data = ({coordinates}) => {
    const [info, setInfo] = useState(null);
    const [isLoading, setLoading] = useState(false);

    function getInfo() {
        setLoading(true);
        fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${process.env.REACT_APP_API}`)
            .then(response => {
                if(response.ok) {
                    response.json()
                        .then(val => {
                            const newInfo = {
                                "location": `${val.name} (${val.sys.country})`,
                                "weather": val.weather[0].description,
                                "temperature": val.main.temp,
                                "pressure": val.main.pressure,
                                "wind_speed": val.wind.speed,
                                "cloudiness": val.clouds.all,
                                "rain": val.rain && val.rain["3h"],
                                "snow": val.snow && val.snow["3h"]
                            };
                            setInfo(newInfo);
                        })                 
                } else {
                    alert("Connection was successful, but there was an error.");
                }
                setLoading(false);
            })
            .catch(err => {
                alert(`There was a problem when fetching (Error: ${err.message}).`);
                setLoading(false);
            })
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
                <div className="field">Cloudiness: </div>
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