import React from "react";

function Card({ person }) {
  // console.log(person.favoriteFood.meats);
  const { meats, fish } = person.favoriteFoods;
  const renderFood = (foodArr) => {
    return foodArr.map((food, i) => {
      return <p key={i}>{food}</p>;
    });
  };
  return (
    <div className="card">
      <h3>name: {person.name}</h3>
      <h3>birthday: {person.birthday}</h3>
      <h3>favorite meats:</h3>
      {renderFood(meats)}
      <h3>favorite fish:</h3>
      {renderFood(fish)}
    </div>
  );
}

export default Card;
