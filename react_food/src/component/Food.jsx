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
  if(Fooditems.length === 0){
    return <h1>I am still hungary</h1>
  }

  return (
    <>
      <h1>Healty Food</h1>
      <ul className="list-group">
        {Fooditems.map(item=> <li key={item} class="list-group-item">{item}</li>)}
      </ul>
    </>
  );
}

export default Food;
