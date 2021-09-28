import React from "react";
import { MainRouter } from "./router/MainRouter";

declare global {
  interface Window {
    Kakao: any;
  }
}

function App() {
  return <MainRouter />;
}

export default App;
