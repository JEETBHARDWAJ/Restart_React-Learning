import style from "./App.module.css";
import Display_cal from "./Component/Display_cal";
import Hello from "./Component/Hello";
function App() {
 
  return (
    <> 
      <div className={style.calculator}>
      <Display_cal/>
      <Hello/>
      </div>
    </>
  );
}

export default App;
