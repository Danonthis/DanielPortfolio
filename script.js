function updatePage() {
  let name = document.getElementById("nameInput").value.trim();
  let message = document.getElementById("messageInput").value.trim();
  let color = document.getElementById("colorSelect").value;

  if (name !== "") {
    document.getElementById("greeting").textContent = "Hello " + name + "!";
  }
  if (message !== "") {
    document.getElementById("message").textContent = message;
  }
  document.body.style.backgroundColor = color;
}

function addTodo() {
  let task = document.getElementById("todoInput").value.trim();
  if (task !== "") {
    let item = document.createElement("li");
    item.textContent = task;
    document.getElementById("todoList").appendChild(item);
    document.getElementById("todoInput").value = "";
  }
}

document.getElementById("updateButton").addEventListener("click", updatePage);
document.getElementById("addTodoButton").addEventListener("click", addTodo);
