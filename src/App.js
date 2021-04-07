import Map from './Components/Map';

function App() {
  return (
  <>
    <div className="web-title">
      <h1>World Weather!</h1>
    </div>
    <div className="map-visualizer">
      <Map />
    </div>
    <div className="data-visualizer">
      Data Visualizer
    </div>
  </>);
}

export default App;
