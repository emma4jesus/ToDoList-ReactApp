import React, { useState } from "react";
import ToDoForm from "./ToDoForm";
import ToDo from "./ToDo";

function ToDoList() {
  const [todo, setToDo] = useState([]);

  // Function to add a bucket list item
  const addToDoItem = (item) => {
    console.log("🚀 ~ file: ToDoList.js ~ line 10 ~ addToDoItem ~ item", item);
    // Check to see if the item text is empty
    if (!item.text) {
      return;
    }

    // Add the new bucket list item to the existing array of objects
    const newToDo = [item, ...todo];
    console.log(newToDo);

    // Call setBucket to update state with our new set of bucket list items
    setToDo(newToDo);
  };

  // Function to mark bucket list item as complete
  const completeToDoItem = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let updatedToDo = todo.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });

    console.log(updatedToDo);
    setToDo(updatedToDo);
  };

  // Function to remove bucket list item and update state
  const removeToDoItem = (id) => {
    const updatedToDo = [...todo].filter((item) => item.id !== id);

    setToDo(updatedToDo);
  };

  // Function to edit the bucket list item
  const editToDoItem = (itemId, newValue) => {
    // Make sure that the value isn't empty
    if (!newValue.text) {
      return;
    }

    // We use the "prev" argument provided with the useState hook to map through our list of items
    // We then check to see if the item ID matches the if of the item that was clicked and if so we set it to a new value
    setToDo((prev) =>
      prev.map((item) => (item.id === itemId ? newValue : item))
    );
  };

  return (
    <div>
      <h1>What is on your to do list?</h1>
      <ToDoForm onSubmit={addToDoItem} />
      <ToDo
        todo={todo}
        completeToItem={completeToDoItem}
        removeToDoItem={removeToDoItem}
        editToDoItem={editToDoItem}
      ></ToDo>
    </div>
  );
}

export default ToDoList;
