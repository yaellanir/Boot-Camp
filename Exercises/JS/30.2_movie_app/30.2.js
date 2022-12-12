const button = document.querySelector("#search-button");
const input = document.querySelector("#input");
const cardContainer = document.querySelector(".cardContainer");
const card = document.querySelector(".card");
const poster = document.querySelector(".poster");
const title = document.querySelector(".title");
const genre = document.querySelector(".genre");
const year = document.querySelector(".year");
const plot = document.querySelector(".plot");
const director = document.querySelector(".director");
const actors = document.querySelector(".actors");
const ratings = document.querySelector(".ratings");

button.addEventListener("click", async (event) => {
  const query = input.value;
  console.log(query);
  const movieData = await getMovie(query);
  console.log(movieData);
  createUserCard(movieData);
});

async function getMovie(movie) {
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?t=${movie}&apikey=73f83e22`
    );
    const result = await response.json();
    if (!result) {
      throw Error("Something went wrong");
    }
    // console.log(result);
    // console.log(handleData(result));
    const movieData = handleData(result);
    return movieData;
  } catch (err) {
    console.log(err);
  }
}

function handleData(data) {
  const searchedMovie = {
    poster: data.Poster,
    title: data.Title,
    genre: data.Genre,
    year: data.Year,
    plot: data.Plot,
    director: data.Director,
    actors: data.Actors,
    ratings: data.Ratings,
  };
  return searchedMovie;
}

function createUserCard(data) {
  console.log(data);
  poster.setAttribute("src", data.poster);
  title.textContent = data.title;
  genre.textContent = data.genre;
  year.textContent = data.year;
  plot.textContent = data.plot;
  director.textContent = data.director;
  actors.textContent = data.actors;
  ratings.textContent = data.ratings;
}

// button.addEventListener("click", (e) => {
//   console.dir(e.target);
//   if (e.target.classList.contains("")) {
//     return (input.innerText = "");
//   }
// });

// // todo - function when card is clicked - it opens the github page of the user
// // todo - function clear input once card is clicked
// // todo -
