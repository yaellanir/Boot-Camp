const listOfNeighbours = [
  ["canada", "mexico"],
  ["spain"],
  ["norway", "sweden", "russia"],
];

for (let index = 0; index < listOfNeighbours.length; index++) {
  for (let j = 0; j < listOfNeighbours[index].length; j++) {
    console.log("neighbours:", listOfNeighbours[index][j]);
  }
}
