import React from "react";

export const TodoItem = (props) => {
  return (
    <>
      {props.todo.map((val, index) => {
        return (
          <div>
            <h4>{val.id}</h4>
            <h5>{val.title}</h5>
            <p>{val.descriptions}</p>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => props.deleteItem(val)} // when we are accepting any parents data as method then we are writing like this onClick={props.deleteItem} , but when we will pass data from child to parents component then we will pass through call back function. like this => onClick={() =>props.deleteItem(val)}
            >
              Danger
            </button>
          </div>
        );
      })}
    </>
  );
};
