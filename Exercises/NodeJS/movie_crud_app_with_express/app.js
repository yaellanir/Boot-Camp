import express from "express";
import movieData from "./dataBase/movies.json" assert { type: "json" };
import { addMovie , findMovie, deleteMovie, updateMovie} from "./utils.js";

// const movieData = JSON.stringify(movieData);

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/movies", (req, res) => {
  const movies = res.status(200).send(movieData);
  if (!movies) {
    res.status(404).send("no movies found");
  }
});

app.get("/movies/:id", (req, res) => {
  console.log(req);
  const { id } = req.params;
  const movie = findMovie(id);
  if (!movie) {
    return res.status(404).send("no movie found with that id");
  }
  return res.status(200).send(movie);
});

app.post("/movies", (req, res) => {
    const newMovie = addMovie(req.body); 
  if (newMovie) {
    res.status(200).send(`movie added`);
  } else {
    res.status(400).send("movie already exists");
  }
});

app.delete("/movies/:id", (req, res) => {
  const deletedMovie = deleteMovie(req.params.id);
  res.status(200).send(`movie deleted`);
});

app.put("/movies/:id", (req, res) => {
  const updatedMovie = updateMovie(req.params.id, req.body)
  res.send(`movie updated`);
});

app.listen(PORT, () => {
  console.log("server is up on port 3000");
});
