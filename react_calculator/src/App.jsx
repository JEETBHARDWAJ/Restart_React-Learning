import style from './App.module.css'
function App(){
  return <>
  <div className= {style.contenar}>
    <input type="text" placeholder='calculatar' />
    <div className="button">
      <button className='btn'>C</button>
    </div>
  </div>
  </>
}

export default App;