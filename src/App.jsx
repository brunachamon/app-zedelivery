import React from "react";
import { BrowserRouter } from "react-router-dom";
import { useJsApiLoader } from "@react-google-maps/api";

import Routes from "./routes";
import "./App.scss";
import Navbar from "./components/Navbar";

const App = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY,
    libraries: [import.meta.env.VITE_GOOGLE_MAPS_LIBRARIES]
  });

  return (
    <div className="App">
      <googleMapsContext.Provider value={{ isLoaded }}>
        <Navbar />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </googleMapsContext.Provider>
    </div>
  );
};

export const googleMapsContext = React.createContext({});

export default App;
