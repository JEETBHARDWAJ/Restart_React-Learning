import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Food from "./component/Food";
import Container from "./component/Container";
import FoodInput from "./component/FoodInput";
import FoodHeading from "./component/FoodHeading";

function App() {
 
  
  let [Fooditems, setTextValue] = useState([ "Fruit",
    "Eggs",
    "Meat",])


  const handleOnChange = (event) => {
    if(event.key == "Enter"){
      let newFooditem = event.target.value ;
      event.target.value ="";
      console.log(newFooditem);
      setTextValue([...Fooditems, newFooditem]);

    }
  };
  return (
    <Container>
      <FoodHeading></FoodHeading>
      <FoodInput handleOnChange={handleOnChange}></FoodInput>
      <br />
      <Food Fooditems={Fooditems}></Food>
    </Container>
  );
}

export default App;
