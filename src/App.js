import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routers from "./routers/Router";
import { Container, Row } from "react-bootstrap";

const App = () => {
  return (
    <BrowserRouter>
      <Routers />
    </BrowserRouter>
  );
};

export default App;
