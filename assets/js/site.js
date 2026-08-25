//#region model
const model = {
	image: ""
};
//#endregion

//#region view
const view = {
	render() {
		document.body.innerHTML = `
			<header><h1>dogs</h1></header>
			<main>
				<section aria-label="random dogs">
					<img src="${model.image}" alt="it's a random dog">
					<button id="new-dog">Change picture</button>
				</section>
			</main>
			<footer><p>dogbutton, 25/08/2026, Jonathan Udholm Hansen</p></footer>
		`;
	}
};
//#endregion

//#region control
const controller = {
	init() {
		view.render();
		document.querySelector("#new-dog").onclick = () => this.getDog();
		this.getDog();
	},

	async getDog() {
		const response = await fetch("https://dog.ceo/api/breeds/image/random");
		const data = await response.json();
		model.image = data.message;
		view.render();
		document.querySelector("#new-dog").onclick = () => this.getDog();
	}
};
//#endregion

controller.init();
