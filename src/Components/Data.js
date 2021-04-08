const Data = ({coordinates}) => {
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
    </>);
}

export default Data;