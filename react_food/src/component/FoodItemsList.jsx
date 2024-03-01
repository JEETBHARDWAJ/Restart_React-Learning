import style from './FoodItemsList.module.css';
const FoodItemsList = (props) => {
    const handilOnClick = () =>{console.log(`"Click on ${props.healthyFood}" `)};
    return (<>         
    <li key={props.healthyFood} className="list-group-item">
    {props.healthyFood}
    <button
      type="button"
      className={`${style.butt} btn btn-primary`}
      onClick={handilOnClick}
    >
      Buy
    </button>
    </li>
    </>);
}
export default FoodItemsList;