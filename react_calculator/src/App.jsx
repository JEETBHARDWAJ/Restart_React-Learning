import style from "./App.module.css";
import Display from "./Component/Display";
import Hello from "./Component/Hello";
function App() {
 
  return (
    <>
      <div className={style.calculator}>
      <Display/>
      <Hello/>
      </div>
    </>
  );
}

export default App;
