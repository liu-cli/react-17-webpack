import React from "react";
import { BrowserRouter } from 'react-router-dom';
import Page from './pages';
import { staticAppRoute } from './layout/routers';
function App() {
  return (
    <BrowserRouter>
      <Page AppRoute={staticAppRoute} />
    </BrowserRouter>
  );
}

export default App;
