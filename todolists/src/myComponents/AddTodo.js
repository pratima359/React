import React, { useState } from "react";

export const AddTodo = ({ addTodos }) => {
  const [addTitle, setAddTitle] = useState("");
  const [addDescription, setAddDescription] = useState("");

  const onChangeTiitleHandler = (e) => {
    console.log("e=>", e.target.value);
    setAddTitle(e.target.value);
  };
  const onChangeDecHandler = (e) => {
    console.log("e=>", e.target.value);
    setAddDescription(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodos(addTitle, addDescription);
  };

  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        {/* <div className="mb-3">
          <label for="id" className="form-label">
            ID
          </label>
          <input type="text" className="form-control" id="id"  onChange={onChangeHandler()}/>
        </div> */}
        <div className="mb-3">
          <label for="titleInputEmail1" className="form-label">
            Title
          </label>
          <input
            type="text"
            value={addTitle}
            className="form-control"
            id="titleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => onChangeTiitleHandler(e)}
          />
        </div>
        <div className="mb-3">
          <label for="descriptionsInputPassword1" className="form-label">
            descriptions
          </label>
          <input
            type="text"
            value={addDescription}
            onChange={(e) => onChangeDecHandler(e)}
            className="form-control"
            id="descriptionsInputPassword1"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
