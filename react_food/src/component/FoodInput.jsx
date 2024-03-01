function FoodInput(){
    const handlingEvents = (event) => { console.log(event.target.value) }
    return(<>
    <input type="text" placeholder=" Enter food item"  onChange={ handlingEvents}/>

 </>);
}

export default FoodInput; 