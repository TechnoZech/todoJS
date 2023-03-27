//sectors
const todoInput = document.querySelector(".todo_input");
const submitBtn = document.querySelector(".submit_btn");
const todoContainer = document.querySelector(".todo_lists_container");
const options = document.querySelector(".options");

//event Listeners
submitBtn.addEventListener("click", submit);
todoContainer.addEventListener("click", deleteItem);
options.addEventListener("click", filterTodo);

//Functions

function submit(e) {
	if (todoInput.value == "") {
		alert("Please write something!");
	} else {
		const todoList = document.createElement("div");
		todoList.classList.add("todo_lists");

		const todoItem = document.createElement("p");
		todoItem.innerText = todoInput.value;
		todoItem.classList.add("todo_item");
		todoList.appendChild(todoItem);

		const checkBtn = document.createElement("div");
		checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
		checkBtn.classList.add("todo_check");
		todoList.appendChild(checkBtn);

		const deleteBtn = document.createElement("div");
		deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
		deleteBtn.classList.add("todo_delete");
		todoList.appendChild(deleteBtn);

		todoContainer.appendChild(todoList);
		todoInput.value = "";
	}
}

function deleteItem(e) {
	const item = e.target;
	const item2 = item.parentElement;
	//delete
	if (item.classList[0] === "todo_delete") {
		const todo = item.parentElement;
		todo.classList.add("delete_fall");
		todo.addEventListener("transitionend", function () {
			todo.remove();
		});
	} else if (item2.classList[0] === "todo_delete") {
		const todo = item2.parentElement;
		todo.classList.add("delete_fall");
		todo.addEventListener("transitionend", function () {
			todo.remove();
		});
	}
	//cross
	else if (item.classList[0] === "todo_check") {
		const todo = item.parentElement;
		todo.classList.toggle("cross");
	} else if (item2.classList[0] === "todo_check") {
		const todo = item2.parentElement;
		todo.classList.toggle("cross");
	}
}

function filterTodo(e) {
	const filter = todoContainer.childNodes;
	// console.log(filter);

	filter.forEach((todo) => {
		console.log(todo);

		if (todo.classList.contains("todo_lists")) {
			todo.style.color = "pink";
		}

		// switch(e.target.value){

		// 	case "all":
		// 		todo.style.display = "flex";
		// 		break;

		// 	case "completed":
		// 		if(todo.classList.contains("todo_lists")){
		// 			todo.style.display = "flex";
		// 		}else{
		// 			todo.style.display = "none";
		// 		}
		// 		break;

		// 	case "pending":
		// 		if(!todo.classList.contains("todo_lists")){
		// 			todo.style.display = "flex";
		// 		}else{
		// 			todo.style.display = "none";
		// 		}
		// 		break;
		// }
	});
}
