const greetingForm = document.querySelector(".js-greetingForm");
const greetingInput = greetingForm.querySelector("input");
const greetingText = document.querySelector(".js-greeting");
const toDoShowing = document.querySelector(".js-toDoForm");

const USER_LS = "currentUser";
const SHOWING_CN = "showing";
const TODOSHOW_CN = "toDoShow";

function saveName(text) {
	localStorage.setItem(USER_LS, text);
}

function handleSubmit(e) {
	e.preventDefault();
	const currentValue = greetingInput.value;
	welcome(currentValue);
	saveName(currentValue);
}

function askForName() {
	greetingForm.classList.add(SHOWING_CN);
	greetingForm.addEventListener("submit", handleSubmit);
}

function welcome(name) {
	greetingForm.classList.remove(SHOWING_CN);
	greetingText.classList.add(SHOWING_CN);
	toDoShowing.classList.add(TODOSHOW_CN);
	greetingText.innerText = `오늘도 화이팅! ${name}쒸`;
}

function loadName() {
	const currentUser = localStorage.getItem(USER_LS);
	if(currentUser === null) {
		askForName();
	} else {
		welcome(currentUser);
	}
}

function init() {
	loadName();
}

init();