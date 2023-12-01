import { useEffect, useState } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  const [delayInMs, setDelayInMs] = useState(0);

  async function getISSCoords() {
    try {
      const response = await fetch(URL);
      const issData = await response.json();

      setCoords({
        longitude: issData.longitude,
        latitude: issData.latitude,
        ...issData,
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getISSCoords();
    const delay = setInterval(() => {
      getISSCoords(5000);
    }, delayInMs);

    return () => {
      clearInterval(delay);
    };
  }, [delayInMs]);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
      <pre>{JSON.stringify(coords.latitude, null, 4)}</pre>
      <pre>{JSON.stringify(coords.longitude, null, 4)}</pre>
      <pre>{JSON.stringify(coords, null, 4)}</pre>
    </main>
  );
}
