import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Food from "./component/Food";
import Container from "./component/Container";

function App() {
  return (
    <Container>
      <Food></Food>
    </Container>
  );
}

export default App;
