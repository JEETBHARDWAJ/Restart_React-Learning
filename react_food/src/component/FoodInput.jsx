function FoodInput(props){
    return(<>
    <input type="text" placeholder=" Enter food item"  onChange={props.handleOnChange}/>

 </>);
}

export default FoodInput; 