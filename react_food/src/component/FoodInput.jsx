import style from './FoodInput.module.css'
import "bootstrap/dist/css/bootstrap.min.css" 
function FoodInput(props){
    return(<>
    <div className={style.inputStyle}>
    <input type="text" placeholder=" Enter food item"  onChange={props.handleOnChange}/>
    <button type="button" className={`${style.savebtn} "btn btn-success"`}>save</button>

    </div>

 </>);
}

export default FoodInput; 