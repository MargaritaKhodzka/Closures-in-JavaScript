let buttons = document.getElementsByTagName('button');

for(let i = 0; i < buttons.length; i++) {
	let button = buttons[i];
	let buttonName = button.innerHTML;
	button.addEventListener('click', () => {
		console.log(buttonName);
	});
}
