import Map from './Components/Map';
import Data from './Components/Data';
import { useLocation } from './Components/Location'

function App() {
  const {location, setLocation, coordinates} = useLocation(0, 0);

  return (
  <>
    <div className="web-title">
      <h1>World Weather!</h1>
    </div>
    <div className="map-visualizer">
      <Map location={location} setLocation={setLocation} />
    </div>
    <div className="data-visualizer">
      <Data coordinates={coordinates} />
    </div>
  </>);
}

export default App;
