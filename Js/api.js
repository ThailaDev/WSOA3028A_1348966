fetch("https://api.chucknorris.io/jokes/random")
.then((r) => r.json())
.then((Joke) => {
	console.log(Joke);
	JokeHandler(Joke)
});
const JokeHandler = (JokeDetails) => {document.querySelector("p.joke").innerText = JokeDetails.value};