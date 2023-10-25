import { useEffect, useState } from 'react';
import './App.css';
import CandyMap from './CandyMap'
const api_base_url = "https://spooky-api.azurewebsites.net"
function App() {
  const [candyLocations,setCandyLocations = useState([]); 
  const mapCenter = [29.5522, -95.0973]
  async function fetchCandyLocations(){
    try {
      const data = await fetch(`${api_base_url}/candy-locations`)  
      const cls = await data.json()
      setCandyLocations(cls)
    } catch (error) {
      console.error(error)
    }
    
  }
  useEffect(() => {
    fetchCandyLocations()
  },[])
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
