import style from './Hello.module.css'
function Hello(){
    const Buttons= [
        "c",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "0",
        "/",
        "x",
        "+",
        "-",
      ];

    return(<>
     <div className={style.btn}>
          {Buttons.map(keyItam =><button className="btn">{keyItam}</button> )}
        </div>
    </>) ;
}

export default Hello;