import logo from "./logo.svg";
import "./App.css";
import Header from "./myComponents/Header";
import { Todos } from "./myComponents/Todos";
import { Footer } from "./myComponents/Footer";
import { useState } from "react";
import { AddTodo } from "./myComponents/AddTodo";

function App() {
  const [todostate, setTodostate] = useState(todos);

  const onDeleteHandler = (val) => {
    // if we will accept any child's data then we will accept as parameter. here TodoItem is sending "val" as a data in the parent app.js, then we will accept as a parameter
    console.log("hello deleted item", val);
    // let index = todos.indexOf(val);
    // console.log("todo is referencing same address as val", todos);
    // let spliceddata = todos.splice(index, 1);

    setTodostate(
      todostate.filter((item) => {
        return item !== val;
      })
    );
  };

  const onAddTodoHandler = (addTitle, addDescription) => {
    let ids = todos[todos.length - 1].id + 1;
    const myobj = {
      id: ids,
      title: addTitle,
      descriptions: addDescription,
    };
    console.log("myobj", myobj);
    setTodostate([...todostate, myobj]);
  };

  return (
    <div className="App">
      <Header title=" My Todo Lists" />
      <div className="container">
        <AddTodo addTodos={onAddTodoHandler} />
      </div>
      <Todos allTodo={todostate} delete={onDeleteHandler} />
      <Footer />
    </div>
  );
}

export default App;
const todos = [
  {
    id: 1,
    title: "Task1",
    descriptions: "Please complete this task by using javascript",
  },
  {
    id: 2,
    title: "Task2",
    descriptions: "Please complete this task by using React js",
  },
  {
    id: 3,
    title: "Task3",
    descriptions: "Please complete this task by using react native",
  },
  {
    id: 4,
    title: "Task4",
    descriptions: "Please complete this task by using Node js",
  },
  {
    id: 5,
    title: "Task5",
    descriptions: "Please complete this task by using angular",
  },
];
