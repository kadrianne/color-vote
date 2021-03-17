const baseUrl = 'http://localhost:3000/colors';
const cardContainer = document.getElementById("card-container");
const addColorForm = document.getElementById("add-color-form");

fetch(baseUrl)
	.then(parseJson)
	.then(iterateOverColors)

function renderColor(color) {
	const colorCard = document.createElement("div");
	colorCard.className = "color-card";
	colorCard.style.background = `${color.hex}`;

	const colorName = document.createElement("h2");
	colorName.innerText = color.name;

	const voteCounter = document.createElement("p");
	voteCounter.innerText = ` Votes ${color.votes}`;

	const voteButton = document.createElement("button");
	voteButton.textContent = "+1 Vote";
	voteButton.addEventListener("click", () => {
		color.votes++;
		fetch(`${baseUrl}/${color.id}`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				votes: color.votes,
			}),
		});
		voteCounter.innerText = ` Votes ${color.votes}`;
	});

	const deleteButton = document.createElement("button");
	deleteButton.innerHTML = "&times;";

	deleteButton.addEventListener("click", () => {
		colorCard.remove();
		fetch(`${baseUrl}/${color.id}`, {
			method: "DELETE",
		});
	});

	colorCard.append(colorName, voteCounter, voteButton, deleteButton);
	cardContainer.append(colorCard);
};

function iterateOverColors(colors){
	colors.forEach(renderColor)
}




function parseJson(response) {
	return response.json();
}

function addNewColor() {
	addColorForm.addEventListener("submit", (e) => {
		e.preventDefault;

		// const formData = new FormData(e.target);
		// const colorName = formData.get("name");
		// const colorHex = formData.get("hex");
		color = {
			"name": color.name
			"hex": color.hex
			"votes": 0
		}
		options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json"
			},
			body: JSON.stringify(color)
				
		},

		fetch(`${baseUrl}`, {
			
			body: JSON.stringify({
				name: colorName,
				hex: colorHex,
				votes: 0,
			}),
		});
	});
}
addNewColor();
