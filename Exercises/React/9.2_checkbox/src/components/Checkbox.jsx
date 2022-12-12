import React from "react";

function Checkbox({checked, label, id, inputHandler, inputKey}) {
function handleChange(e) {
  const isChecked = e.target.checked
  inputHandler(inputKey, isChecked)
}
  return (
    <div>
      <input onChange={handleChange} type="checkbox" id={id} defaultChecked={checked}/>
      <label htmlFor={id}>{label}</label>
    </div>
  );
}

export default Checkbox;
