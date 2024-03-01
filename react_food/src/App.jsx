
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Food from "./component/Food";
import Container from "./component/Container";
import FoodInput from "./component/FoodInput";
import FoodHeading from "./component/FoodHeading";

function App() {
  let Fooditems = [
    "Fruit",
    "Eggs",
    "Meat",
    "Nuts",
    "Veggies",
    "Seafood",
    "Grains",
    "Bread",
  ];
  const handleOnChange = (event) => { console.log(event.target.value) };
  return (
    <Container>
      <FoodHeading></FoodHeading>
      <FoodInput handleOnChange ={handleOnChange}></FoodInput>
      <Food Fooditems={Fooditems}></Food>
    </Container>
  );
}

export default App;
