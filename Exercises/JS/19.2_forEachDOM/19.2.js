const users = [
  {
    id: 167464,
    firstName: "Jimmy",
    lastName: "Arnold",
    email: "jimmya@gmail.com",
  },
  {
    id: 578447,
    firstName: "Martha",
    lastName: "Goldman",
    email: "gold@hotmail.com",
  },
  {
    id: 864578,
    firstName: "Tim",
    lastName: "Burton",
    email: "timmy.hotmail.com",
  },
];

function firstAndLastName(arr) {
  const newOl = document.createElement("ol");
  newOl.style.listStyleType = "none";
  document.querySelector("body").appendChild(newOl);
  arr.forEach((user) => {
    const newLi = document.createElement("li");
    newLi.innerText = user.firstName + " " + user.lastName;
    newLi.dataset.id = user.id;
    console.log(newLi);
    newOl.appendChild(newLi);
  });
}
firstAndLastName(users);
