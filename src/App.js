import './App.css';
import CandyMap from './CandyMap'
function App() {
  const candyLocations = [
    {
      lat: 29.5522, 
      long: -95.0973,
      name: 'You are here'
    }
  ]
  const mapCenter = [29.5522, -95.0973]
  return (
    <div className="App">
      <CandyMap
        mapCenter={mapCenter}
        candyLocations={candyLocations}
      />
    </div>
  );
}

export default App;
