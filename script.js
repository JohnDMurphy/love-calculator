const loveButton = document.querySelector('#loveBTN');



const letsFindLove = () => {
	const loveChance = Math.floor(Math.random() * 100 + 1);
	const nameOne = prompt('Who`s love life should we predict?');
	const nameTwo = prompt(
		`Who do we want to check ${nameOne}'s Chance of love with?`
	);
	if (!nameOne || !nameTwo) {
		return alert('I need 2 names to be able to check the chance of love!');
	} else {
		return alert(
			`The chance of everlasting love between ${nameOne} and ${nameTwo} is ${loveChance}%`
		);
	}
};

loveButton.addEventListener('click', letsFindLove);
