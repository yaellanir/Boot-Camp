import React, { useState, useEffect } from "react";

function Form({ submit }) {
  const [formValues, setNameInput] = useState({
    firstName: "",
    lastName: "",
    age: "",
    freetext: "",
  });

  useEffect(() => {
    console.log(formValues);
  }, [formValues]);

  function clickHandler(event) {
    event.preventDefault();
    submit(formValues)

  }
  const handleChange = (fieldName, value) => {
    setNameInput((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  return (
    <form className="flex-center" onSubmit={clickHandler}>
      <label>First Name</label>
      <input
        onChange={(e) => handleChange(e.target.id, e.target.value)}
        // onChange={(e) => setFirstName(e.target.value)}
        value={formValues.firstName}
        id="firstName"
        type="text"
      />
      <label>Last Name</label>
      <input
        onChange={(e) => handleChange(e.target.id, e.target.value)}
        type="text"
        id="lastName"
      />
      <select
        id="age"
        placeholder="0-15"
        onChange={(e) => handleChange(e.target.id, e.target.value)}
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        Age
      </select>
      <label>Free Text</label>
      <textarea
        onChange={(e) => handleChange(e.target.id, e.target.value)}
        id="freetext"
        value={formValues.freetext}
      ></textarea>
      <button onClick={clickHandler} type="submit">
        continue
      </button>
    </form>
  );
}

export default Form;
