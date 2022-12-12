import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import checked from "../images/checked.png";
import unchecked from "../images/unchecked.png";
import "./Form.css";

function Form() {
  const [inputValue, setInputValue] = useState("");
  const [toDo, setToDo] = useState(JSON.parse(localStorage.ToDoInput));
  console.log(localStorage.getItem(`ToDoInput`));
  const handleInput = (event) => {
    if (event.target.value === "") {
      return;
    }
    console.log(event.target.value);
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    console.log("todo submitted");
    event.preventDefault();
    setToDo((prev) => [
      ...prev,
      { value: inputValue, isChecked: false, id: uuidv4() },
    ]);
    setInputValue("");
  };

  const removeItemFromList = (index) => {
    const newTodos = [...toDo];
    newTodos.splice(index, 1);
    console.log(newTodos);
    setToDo(newTodos);
  };

  // function removeItemFromList(id) {
  // console.log(id)
  // toDo.filter((ToDoInput) => ToDoInput.id !== id)
  // // localStorage.removeItem('toDoInput')
  //   }

  // function handleUpdate(id) {
  //   const toDoItem = toDo.find(item=> item.id === id)
  //   if (toDoItem !== ) {

  //   }
  // }
  const handleUpdate = (index) => {
    console.log("hello");
    setToDo((prev) => {
      const updatedToDos = prev.map((task, mapIndex) => {
        const updatedTask = { ...task };
        // mapIndex !== index ? task : { ...task, done: !task.done }
        if (mapIndex !== index) {
          return task;
        } else {
          updatedTask.isChecked = !task.isChecked;
          return updatedTask;
        }
      });
      console.log(updatedToDos);
      return updatedToDos;
    });
  };

  useEffect(() => {
    console.log(toDo);
    localStorage.setItem(`ToDoInput`, JSON.stringify(toDo));
  }, [toDo]);

  return (
    <>
      <form onSubmit={handleFormSubmit} className="todoContainer">
        <input value={inputValue} onChange={handleInput} type="text" />

        <button className="button">submit</button>
      </form>
      {
        <ul className="listContainer">
          {toDo?.map((toDoItem, i) => {
            return (
              <li
                onClick={() => handleUpdate(i)}
                key={toDoItem.id}
                id={toDoItem.id}
                className="listItem"
              >
                {/* {toDoItem.value}  */}
                {/* {toDoItem.isChecked ? checked : unchecked} */}
                <div className="listItem1">
                  <img
                    src={toDoItem.isChecked ? checked : unchecked}
                    style={{ width: "30px" }}
                    alt="pic"
                  />
                  {`${toDoItem.value}`}
                  <button onClick={() => removeItemFromList(i)}>delete</button>
                </div>
              </li>
            );
          })}
        </ul>
      }
    </>
  );
}

export default Form;
