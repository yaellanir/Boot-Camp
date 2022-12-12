
import fs from "fs";


function getmovieData(){
const movieDataJson = fs.readFileSync("./dataBase/movies.json")
return JSON.parse(movieDataJson)
}

function writeJson(data) {
  fs.writeFileSync("./dataBase/movies.json",JSON.stringify(data))
}


export function findMovie(id) {
  const movies = getmovieData()
  const movie = movies.find((movie) => movie.id === id);
  return movie;
}


export function addMovie(body) {
const movies = getmovieData();
const movieExists = movies.find((movie) => movie.id === body.id)
if (movieExists) {
  return false
}
movies.push(body);
writeJson(movies);
return body;
}


export function deleteMovie(id){
  const movies = getmovieData();
  const filteredMovies = movies.filter((movie) => movie.id !== id)
  writeJson(filteredMovies);
}

export function updateMovie(id, body) {
  const movies = getmovieData();
  const updatedMovies = movies.map((movie) => {
    if (movie.id === id) {
      const updatedMovie = {...movie, ...body}
      return updatedMovie
    }else {
return movie
    }
  })
  writeJson(updatedMovies);
}