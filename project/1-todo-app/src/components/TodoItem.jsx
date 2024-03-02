import React from "react";

const TodoItem = (props) => {

    let todoname = props.todoname;
    let date = props.date;

  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{date}</div>
        <div className="col-2">
          <button className="btn btn-danger kg-button">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
