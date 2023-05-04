const tasksContainer = document.querySelector(".tasks-list");
const deleteAllBtn = document.querySelector(".deleteAll-btn");
const addForm = document.querySelector(".add-form");
const taskInput = document.querySelector(".input-text");

let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

const saveLocalStorage = () => {
	localStorage.setItem("tasks", JSON.stringify(taskList));
};

const createTask = (task) => {
	return `
        <li>
            ${task.name}
            <img
            class="delete-btn"
            src="./img/delete.svg"
            alt="boton de borrar"
            data-id="${task.id}"
            />
        </li>
    `;
};

const renderTaskList = () => {
	tasksContainer.innerHTML = taskList.map((task) => createTask(task)).join("");
};

const toggleDeleteAllButton = () => {
	if (!taskList.length) {
		deleteAllBtn.classList.add("hidden");
		return;
	}
	deleteAllBtn.classList.remove("hidden");
};

const correctInputValue = () => {
	return taskInput.value.trim().replace(/\s+/g, " ");
};

const isValidTask = (taskName) => {
	let isValid = true;
	if (!taskName.length) {
		alert("Por favor, ingrese una tarea.");
		isValid = false;
	} else if (
		taskList.some((task) => task.name.toLowerCase() === taskName.toLowerCase())
	) {
		alert("Ya existe una tarea con ese nombre");
		isValid = false;
	}
	return isValid;
};

const addTask = (e) => {
	e.preventDefault();
	const taskName = correctInputValue();

	if (isValidTask(taskName)) {
		taskList = [
			...taskList,
			{
				name: taskName,
				id: Date.now(),
			},
		];
		addForm.reset();
		updateUI();
	}
};

const removeTask = (e) => {
	if (!e.target.classList.contains("delete-btn")) return;
	const filterId = Number(e.target.dataset.id);
	taskList = taskList.filter((task) => {
		return task.id !== filterId;
	});
	updateUI();
};

const removeAll = () => {
	taskList = [];
	updateUI();
};

const updateUI = () => {
	renderTaskList();
	saveLocalStorage();
	toggleDeleteAllButton();
};

const init = () => {
	document.addEventListener("DOMContentLoaded", renderTaskList);
	addForm.addEventListener("submit", addTask);
	tasksContainer.addEventListener("click", removeTask);
	deleteAllBtn.addEventListener("click", removeAll);
	document.addEventListener("DOMContentLoaded", toggleDeleteAllButton);
};

init();
