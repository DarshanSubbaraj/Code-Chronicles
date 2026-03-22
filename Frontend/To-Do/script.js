let plannedbtn = document.querySelector(".PlannedSection");
let MyDaybtn = document.querySelector(".MyDaySection");
let Importantbtn = document.querySelector(".ImpSection");
let Completedbtn = document.querySelector(".CompletedSection");
let tasklist = document.querySelector(".tasklist");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentTasks = tasks;
/*---Planned---*/

plannedbtn.addEventListener("click", function (e) {
  e.preventDefault();
  renderTasks(tasks);
});

/*--- MY DAY----*/

MyDaybtn.addEventListener("click", function (e) {
  e.preventDefault();
  let today = new Date().toISOString().split("T")[0];
  let currentTasks = tasks.filter((task) => task.DueDate === today);
  renderTasks(currentTasks);
});

/*---Importantbtn---*/

Importantbtn.addEventListener("click", function (e) {
  e.preventDefault();
  let currentTasks = tasks.filter((task) => task.Imp);
  renderTasks(currentTasks);
});

/*---Completed---*/

Completedbtn.addEventListener("click", function (e) {
  e.preventDefault();
  let currentTasks = tasks.filter((task) => task.Completedstatus);
  renderTasks(currentTasks);
});

/*---Dark Mode---*/

let darkMode = document.querySelector(".darkMode");
darkMode.addEventListener("change", function () {
  document.body.classList.toggle("dark", darkMode.checked);
});

/*---sorting---*/

let sort = document.querySelector(".sort");
sort.addEventListener("change", function () {
  if (sort.value === "A to Z") {
    currentTasks.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sort.value === "Z to A") {
    currentTasks.sort((a, b) => b.title.localeCompare(a.title));
  } else if (sort.value === "Due Date") {
    currentTasks.sort((a, b) => new Date(a.DueDate) - new Date(b.DueDate));
  }

  renderTasks(currentTasks);
});
function renderTasks(taskspara) {
  tasklist.innerHTML = "";
  if (taskspara) {
    tasks.forEach(function (task) {
      tasklist.innerHTML += `<div class ="task"><li>${task.title}</li><li>${task.Category}</li><li>${task.DueDate}</li><li>${task.Description}</li><li>${task.Imp}</li><li>${task.Completedstatus}</li><button class="Deletebtn" onclick="deleteTask(${task.id})">Delete Task</button>
      <button class="Editbtn" onclick="editTask(${task.id})">Edit Task</button></div>`;
    });
  } else {
    taskList.innerHTML = `NO TASKS HERE`;
  }
}
