import "bootstrap/dist/css/bootstrap.min.css";
function Food(){
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

  return (
    <>
      <h1>Healty Food</h1>
      <ul class="list-group">
        {Fooditems.map(item=> <li class="list-group-item">{item}</li>)}
      </ul>
    </>
  );
}

export default Food;
