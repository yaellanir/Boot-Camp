import fs from "fs";
import https from "https";

console.log(https);
function getmovieData() {
  const movieDataJson = fs.readFileSync("./dataBase/movies.json");
  return JSON.parse(movieDataJson);
}

async function fetch