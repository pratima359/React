import React from "react";
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
  return (
    <>
      {props.allTodo.length === 0 ? (
        "Empty ToDo List"
      ) : (
        <TodoItem todo={props.allTodo} deleteItem={props.delete} />
      )}
    </>
  );
};
