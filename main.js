document.addEventListener("DOMContentLoaded", () => {
  const todoForm = document.getElementById("todoForm");
  const inputValue = document.getElementById("inputValue");
  const mainTodoElem = document.querySelector(".todo-lists-elem");
  let localTodoList = [];

  const addTodoItem = (e) => {
    e.preventDefault(); // Prevents the form from submitting/reloading the page
    console.log("Item Added");

    const todoListValue = inputValue.value.trim(); // Trim whitespace from input

    if (todoListValue && !localTodoList.includes(todoListValue)) {
      localTodoList.push(todoListValue); // Add item to the local list

      const divElement = document.createElement("div");
      divElement.classList.add("card", "mb-3", "shadow-sm");

      divElement.innerHTML = `
          <div class="card-body d-flex justify-content-between align-items-center">
            <span>${todoListValue}</span>
            <button class="btn btn-danger btn-sm"><i class="bi bi-trash deleteBtn"></i></button>
          </div>
        `;

      mainTodoElem.append(divElement); // Append the new item to the list container
      inputValue.value = ""; // Clear the input field

      // Save the updated list to local storage as a JSON string
      localStorage.setItem("TodoList", JSON.stringify(localTodoList));
    }
    console.log(localTodoList);
  };

  const deleteTodoItem = (e) => {
    if (e.target.classList.contains("deleteBtn")) {
      const todoItem = e.target.closest(".card"); // Find the parent card
      const todoText = todoItem.querySelector("span").innerText; // Get the text of the todo item
      todoItem.remove(); // Remove the item from the DOM

      // Remove the item from the local list and update local storage
      localTodoList = localTodoList.filter((item) => item !== todoText);
      localStorage.setItem("TodoList", JSON.stringify(localTodoList));
    }
  };

  // Load items from local storage when the page loads
  const savedTodos = JSON.parse(localStorage.getItem("TodoList")) || [];
  savedTodos.forEach((todo) => {
    localTodoList.push(todo);

    const divElement = document.createElement("div");
    divElement.classList.add("card", "mb-3", "shadow-sm");

    divElement.innerHTML = `
        <div class="card-body d-flex justify-content-between align-items-center">
          <span>${todo}</span>
          <button class="btn btn-danger btn-sm deleteBtn">Delete</button>
        </div>
      `;

    mainTodoElem.append(divElement);
  });

  // Attach the submit event listener correctly
  todoForm.addEventListener("submit", addTodoItem);

  // Handle delete button clicks (event delegation)
  mainTodoElem.addEventListener("click", deleteTodoItem);
});
