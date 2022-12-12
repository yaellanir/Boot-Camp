import React, { useState, useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import checked from "../images/checked.png";
import unchecked from "../images/unchecked.png";
import "./Form.css";

const ACTIONS = {
  ADD_TODO: "add-todo",
  UPDATE_TODO: "update-todo",
  DELETE_TODO: "delete-todo",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...state, action.payload];
    case ACTIONS.DELETE_TODO:
      return action.payload;
    case ACTIONS.UPDATE_TODO: {
      const updatedToDos = state.map((task, mapIndex) => {
        const updatedTask = { ...task };
        if (mapIndex !== action.payload.index) {
          return task;
        } else {
          updatedTask.isChecked = !task.isChecked;
          return updatedTask;
        }
      });
      console.log(updatedToDos);
      return updatedToDos;
    }

    default:
      return state;
  }
}

function Form() {
  const [toDo, dispatch] = useReducer(reducer, []);
  const [inputValue, setInputValue] = useState("");
  // const [toDo, setToDo] = useState(JSON.parse(localStorage.ToDoInput));
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
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: { value: inputValue, isChecked: false, id: uuidv4() },
    });
    setInputValue("");
  };

  const removeItemFromList = (index) => {
    const newTodos = [...toDo];
    newTodos.splice(index, 1);
    console.log(newTodos);
    dispatch({ type: ACTIONS.DELETE_TODO, payload: newTodos });
  };

  const handleUpdate = (index) => {
    dispatch({ type: ACTIONS.UPDATE_TODO, payload: { index } });
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
