import React, { useState } from "react";
import ToDoForm from "./ToDoForm";

function ToDo(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
    volume: "",
  });

  const submitUpdate = (value) => {
    props.editToDoItem(edit.id, value);
    setEdit({ id: null, value: "", volume: "" });
  };

  if (edit.id) {
    return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.todo.map((item, i) => (
    <div
      className={
        item.isComplete
          ? `to-do-row complete ${item.volume}`
          : `to-do-row ${item.volume}`
      }
      key={i}
    >
      <div key={item.id} onClick={() => props.completeToDoItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        {console.log(item)}
        <p
          onClick={() =>
            setEdit({ id: item.id, value: item.text, volume: item.volume })
          }
        >
          {" "}
          ✏️
        </p>
        <p onClick={() => props.removeToDoItem(item.id)}> 🗑️</p>
      </div>
    </div>
  ));
}

export default ToDo;
