const button = document.querySelector("#search-button");
const input = document.querySelector("#input");
const form = document.querySelector("#form");
const cardContainer = document.querySelector(".cardContainer");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formdata = new FormData(form);
  const name = formdata.get("name");
  console.log(name);
  const userData = await getUser(name);
  console.log(userData);
  createUserCard(userData);
});

async function getUser(name) {
  const response = await fetch(`https://api.github.com/users/${name}`);
  const result = await response.json();
  return result;
}

function createUserCard(user) {
  const card = document.createElement("div");
  const link = document.createElement("a");
  card.classList.add("card");
  link.href = user.html_url;
  link.textContent = user.html_url;
  link.setAttribute("target", "_blank");
  card.appendChild(link);
  const avatarImg = document.createElement("img");
  avatarImg.src = user.avatar_url;
  avatarImg.height = 150;
  document.body.appendChild(avatarImg);
  card.appendChild(avatarImg);
  const nameOfUser = document.createElement("h3");
  nameOfUser.textContent = user.login;
  card.appendChild(nameOfUser);
  const numOfRepos = document.createElement("h3");
  numOfRepos.textContent = user.public_repos;
  card.appendChild(numOfRepos);
  cardContainer.appendChild(card);
}

button.addEventListener("click", (e) => {
  console.dir(e.target);
  if (e.target.classList.contains("")) {
    return (input.innerText = "");
  }
});

// todo - function when card is clicked - it opens the github page of the user
// todo - function clear input once card is clicked
// todo -


