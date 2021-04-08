import Map from './Components/Map';
import { useLocation } from './Components/Location'

function App() {
  const {location, setLocation} = useLocation(0, 0);

  return (
  <>
    <div className="web-title">
      <h1>World Weather!</h1>
    </div>
    <div className="map-visualizer">
      <Map location={location} setLocation={setLocation} />
    </div>
    <div className="data-visualizer">
      Data Visualizer
    </div>
  </>);
}

export default App;
