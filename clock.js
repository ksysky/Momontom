const clockBox = document.querySelector(".js-clockBox");
const clockText = clockBox.querySelector(".js-clockText");

function getTime() {
	const date = new Date();
	const hours = date.getHours();
	const minutes = date.getMinutes();
	const seconds = date.getSeconds();
	clockText.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
	getTime();
	setInterval(getTime, 1000);
}

init();