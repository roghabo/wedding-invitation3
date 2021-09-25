import React from "react";
import { Cover } from "./components/cover";
import { Gallery } from "./components/gallery";
import { Guest } from "./components/guest";
import { Introduction } from "./components/introduction";
import { Location } from "./components/location";
import { Thanks } from "./components/thanks";

function App() {
  return (
    <div className="wrapper">
      <Cover />
      <Introduction />
      <Gallery />
      <Location />
      <Guest />
      <Thanks />
    </div>
  );
}

export default App;
