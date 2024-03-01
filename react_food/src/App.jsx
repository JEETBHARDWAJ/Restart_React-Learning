import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Food from "./component/Food";
import Container from "./component/Container";
import FoodInput from "./component/FoodInput";
import FoodHeading from "./component/FoodHeading";

function App() {
  return (
    <Container>
      <FoodHeading></FoodHeading>
      <FoodInput></FoodInput>
      <Food></Food>
    </Container>
  );
}

export default App;
