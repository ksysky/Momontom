const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODO_LS = "loadToDo";

let toDos = [];

function deleteToDo(event) {
	const btn = event.target;
	const li = btn.parentNode;
	toDoList.removeChild(li);
	const cleanToDo = toDos.filter(function(toDo) {
		return toDo.id !== parseInt(li.id);
	});
	toDos = cleanToDo;
	saveToDo();
}

function saveToDo() {
	localStorage.setItem(TODO_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
	const li = document.createElement("li");
	const delBtn = document.createElement("button");
	const span = document.createElement("span");
	const newId = toDos.length + 1;
	delBtn.innerText = "❌";
	delBtn.addEventListener("click", deleteToDo);
	span.innerText = text;
	li.appendChild(delBtn);
	li.appendChild(span);
	li.id = newId;
	toDoList.appendChild(li);
	const toDoObj = {
		text: text,
		id: newId
	}
	toDos.push(toDoObj);
	saveToDo();
}

function handleSubmit(event) {
	event.preventDefault();
	const inputValue = toDoInput.value;
	if(inputValue) {
		paintToDo(inputValue);
		toDoForm.reset();
	} else {
		alert("할 일을 채워주세요.");
	}
}

function loadToDo() {
	const loadedToDo = localStorage.getItem(TODO_LS);
	if(loadedToDo !== null) {
		const parsedToDo = JSON.parse(loadedToDo);
		parsedToDo.forEach(function(toDo) {
			paintToDo(toDo.text);
		});
	}
}

function init() {
	loadToDo();
	toDoForm.addEventListener("submit", handleSubmit);
}

init();