const button = document.querySelector("#get-joke");
const output = document.querySelector("#output");
const title = document.querySelector("#title");

button.addEventListener("click", () => {
  getJoke();
});

function getJoke() {
  const response = fetch("https://api.jokes.one/jod");
  response
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      // console.log(data.contents.jokes[0].joke.text);
      output.textContent = data.contents.jokes[0].joke.text;
      title.textContent = data.contents.jokes[0].joke.title;
    })
    .catch((e) => {
      console.log(e);
    });
}
