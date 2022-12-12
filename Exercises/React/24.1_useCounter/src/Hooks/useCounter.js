import React from "react";
import { useState } from "react";

export default function useCounter(initialState) {
  const [counter, setCounter] = useState(initialState);

  const addOne = () => {
    setCounter((prev) => prev + 1);
  };
  const minusOne = () => {
    setCounter((prev) => prev - 1);
  };
  const double = () => {
    setCounter((prev) => prev * 2);
  };
  const divide = () => {
    setCounter((prev) => prev / 2);
  };

  return { counter, addOne, minusOne, double, divide };
}
