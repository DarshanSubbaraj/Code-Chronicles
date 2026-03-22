let plannedbtn = document.querySelector(".PlannedSection");
let MyDaybtn = document.querySelector(".MyDaySection");
let Importantbtn = document.querySelector(".ImpSection");
let Completedbtn = document.querySelector(".CompletedSection");
let tasklist = document.querySelector(".tasklist");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

/*---Planned---*/

plannedbtn.addEventListener("click", function (e) {
  e.preventDefault();
  tasklist.innerHTML = "";
  if (tasks) {
    tasks.forEach(function (task) {
      tasklist.innerHTML += `<div class ="task"><li>${task.title}</li><li>${task.Category}</li><li>${task.DueDate}</li><li>${task.Description}</li><li>${task.Imp}</li><li>${task.Completedstatus}</li><button class="Deletebtn" onclick="deleteTask(${task.id})">Delete Task</button>
      <button class="Editbtn" onclick="editTask(${task.id})">Edit Task</button></div>`;
    });
  } else {
    tasklist.innerHTML = `No Tasks Here`;
  }
});

/*--- MY DAY----*/

MyDaybtn.addEventListener("click", function (e) {
  e.preventDefault();
  tasklist.innerHTML = "";

  let now = new Date().toISOString().split("T")[0];
  let flag = false;
  tasks.forEach(function (task) {
    if (task.DueDate === now) {
      tasklist.innerHTML += `<div class ="task"><li>${task.title}</li><li>${task.Category}</li><li>${task.DueDate}</li><li>${task.Description}</li><li>${task.Imp}</li><li>${task.Completedstatus}</li><button class="Deletebtn" onclick="deleteTask(${task.id})">Delete Task</button>
      <button class="Editbtn" onclick="editTask(${task.id})">Edit Task</button></div>`;
      flag = true;
    }
  });
  if (!flag) {
    tasklist.innerHTML = `<a>No task for today</a>`;
  }
});

/*---Importantbtn---*/

Importantbtn.addEventListener("click", function (e) {
  e.preventDefault();
  let flag = false;
  tasklist.innerHTML = "";

  tasks.forEach(function (task) {
    if (task.Imp) {
      tasklist.innerHTML += `<div class ="task"><li>${task.title}</li><li>${task.Category}</li><li>${task.DueDate}</li><li>${task.Description}</li><li>${task.Imp}</li><li>${task.Completedstatus}</li><button class="Deletebtn" onclick="deleteTask(${task.id})">Delete Task</button>
      <button class="Editbtn" onclick="editTask(${task.id})">Edit Task</button></div>`;
      flag = true;
    }
  });
  if (!flag) {
    tasklist.innerHTML = `<a>No Important Tasks</a>`;
  }
});

/*---Completed---*/

Completedbtn.addEventListener("click", function (e) {
  e.preventDefault();
  let flag = false;
  tasklist.innerHTML = "";

  tasks.forEach(function (task) {
    if (task.Completedstatus) {
      tasklist.innerHTML += `<div class ="task"><li>${task.title}</li><li>${task.Category}</li><li>${task.DueDate}</li><li>${task.Description}</li><li>${task.Imp}</li><li>${task.Completedstatus}</li><button class="Deletebtn" onclick="deleteTask(${task.id})">Delete Task</button>
      <button class="Editbtn" onclick="editTask(${task.id})">Edit Task</button></div>`;
      flag = true;
    }
  });
  if (!flag) {
    tasklist.innerHTML = `<a>No Completed Tasks</a>`;
  }
});

/*---Dark Mode---*/

let darkMode = document.querySelector(".darkMode");
darkMode.addEventListener("change", function () {
  document.body.classList.toggle("dark", darkMode.checked);
});
