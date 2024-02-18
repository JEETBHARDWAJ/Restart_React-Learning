import MyTodo from "./component/MyTodo";
import EnterTodo from "./component/EnterTodo";
import ListTodo from "./component/ListTodo";
import ListTodo2 from "./component/ListTodo2";
import "./App.css";

function app() {
  return (
    <div>
      <MyTodo></MyTodo>
      <EnterTodo></EnterTodo>
      <div className="todo_contenar">
        <ListTodo></ListTodo>
        <ListTodo2></ListTodo2>
      </div>
    </div>
  );
}

export default app;
