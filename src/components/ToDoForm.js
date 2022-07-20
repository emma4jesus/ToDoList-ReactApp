import React, { useState } from "react";

function ToDoForm(props) {
  const [input, setInput] = useState("");
  let [volume, setVolume] = useState("");

  const volumeLevel = ["high", "medium", "low"];

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!volume) {
      volume = "low";
    }

    props.onSubmit({
      id: Math.random(Math.floor() * 1000),
      text: input,
      volume: volume,
    });
    setInput("");
    setVolume("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // First we check to see if "edit" prop exists. If not, we render the normal form
  // If the prop "edit" exists, we know to render the update form instead
  return !props.edit ? (
    <div>
      <form className="to-do-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add to your to do list"
          value={input}
          name="text"
          className="to-do-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${volume}`}>
            {volume || "Priority"}
          </button>
          <div className="dropdown-content">
            <p onClick={() => setVolume(volumeLevel[0])}>Must do</p>
            <p onClick={() => setVolume(volumeLevel[1])}>Want to do</p>
            <p onClick={() => setVolume(volumeLevel[2])}>Take it or leave it</p>
          </div>
        </div>
        <button className="to-do-button">Add to do list item</button>
      </form>
    </div>
  ) : (
    <div>
      <h3>Update entry: {props.edit.value}</h3>
      <form className="to-do-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.edit.value}
          value={input}
          name="text"
          className="to-do-input"
          onChange={handleChange}
        ></input>
        <div className="dropdown">
          <button className={`dropbtn ${volume}`}>
            {volume || "Priority"}
          </button>
          <div className="dropdown-content">
            <p onClick={() => setVolume(volumeLevel[0])}>Must do</p>
            <p onClick={() => setVolume(volumeLevel[1])}>Want to do</p>
            <p onClick={() => setVolume(volumeLevel[2])}>Take it or leave it</p>
          </div>
        </div>
        <button className="to-do-button">Update</button>
      </form>
    </div>
  );
}

export default ToDoForm;
