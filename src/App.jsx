import { useState, useEffect } from "react";
import Header from "./components/Header";
import Map from "./components/Map";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();
  }, []);

  return (
    <div className="flex flex-col w-full h-full">
      <Header />
      {!loading ? <Map data={eventData} /> : <div> Loading </div>}
    </div>
  );
}

export default App;
