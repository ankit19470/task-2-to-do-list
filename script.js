
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

 
  const li = document.createElement("li");


  li.textContent = taskText;

  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });


  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.classList.add("remove-btn");
  removeBtn.addEventListener("click", (e) => {
    e.stopPropagation(); 
    li.remove();
  });

  li.appendChild(removeBtn);

  taskList.appendChild(li);

  taskInput.value = "";
}


addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
