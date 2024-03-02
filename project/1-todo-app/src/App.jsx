import { useState } from "react";
import "./App.css";
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";

function App() {
  const [count, setCount] = useState(0);
  let items = ["milk","dal","rice","sugar", "vegetable"];
  return (
    <>
      <center className="todo-container">
        <AppName />
        {/* conditional rendering */}
        {items.length === 0 ? null : <p>items are as below</p>}
        <AddTodo />
        {/* map function */ }
        <h3>Healthy Food</h3>
        <ul className="list-group">
          {items.map((item)=> (<li key={item} className="list-group-item">{item}</li>))}
        </ul>
        <div className="items-container">
        <TodoItem todoname="Buy Milk" date="4/10/2023" />
        <TodoItem todoname="Go to College" date="4/10/2023" />
        </div>
      </center>
    </>
  );
}

export default App;
