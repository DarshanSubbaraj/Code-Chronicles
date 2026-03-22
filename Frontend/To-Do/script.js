let plannedbtn = document.querySelector(".PlannedSection");
let MyDaybtn = document.querySelector(".MyDaySection");
let Importantbtn = document.querySelector(".ImpSection");
let Completedbtn = document.querySelector(".CompletedSection");
let main = document.querySelector("main");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

/*---Planned---*/

plannedbtn.addEventListener("click", function (e) {
  e.preventDefault();
  main.innerHTML = "";
  tasks.forEach(function (task) {
    main.innerHTML += `<div class ="task"><li>${task.title}</li><li>${task.Category}</li><li>${task.DueDate}</li><li>${task.Description}</li><li>${task.Imp}</li><li>${task.Completedstatus}</li><button class="Deletebtn" onclick="deleteTask(${task.id})">Delete Task</button>
      <button class="Editbtn" onclick="editTask(${task.id})">Edit Task</button></div>`;
  });
});

/*--- MY DAY----*/

MyDaybtn.addEventListener("click", function (e) {
  e.preventDefault();
  main.innerHTML = "";

  let now = new Date().toISOString().split("T")[0];
  let flag = false;
  tasks.forEach(function (task) {
    if (task.DueDate === now) {
      main.innerHTML += `<div class ="task"><li>${task.title}</li><li>${task.Category}</li><li>${task.DueDate}</li><li>${task.Description}</li><li>${task.Imp}</li><li>${task.Completedstatus}</li><button class="Deletebtn" onclick="deleteTask(${task.id})">Delete Task</button>
      <button class="Editbtn" onclick="editTask(${task.id})">Edit Task</button></div>`;
      flag = true;
    }
  });
  if (!flag) {
    main.innerHTML = `<a>No task for today</a>`;
  }
});

/*---Importantbtn---*/

Importantbtn.addEventListener("click", function (e) {
  e.preventDefault();
  let flag = false;
  main.innerHTML = "";

  tasks.forEach(function (task) {
    if (task.Imp) {
      main.innerHTML += `<div class ="task"><li>${task.title}</li><li>${task.Category}</li><li>${task.DueDate}</li><li>${task.Description}</li><li>${task.Imp}</li><li>${task.Completedstatus}</li><button class="Deletebtn" onclick="deleteTask(${task.id})">Delete Task</button>
      <button class="Editbtn" onclick="editTask(${task.id})">Edit Task</button></div>`;
      flag = true;
    }
  });
  if (!flag) {
    main.innerHTML = `<a>No Importantbtn Tasks</a>`;
  }
});

/*---Completed---*/

Completedbtn.addEventListener("click", function (e) {
  e.preventDefault();
  let flag = false;
  main.innerHTML = "";

  tasks.forEach(function (task) {
    if (task.Completedstatus) {
      main.innerHTML += `<div class ="task"><li>${task.title}</li><li>${task.Category}</li><li>${task.DueDate}</li><li>${task.Description}</li><li>${task.Imp}</li><li>${task.Completedstatus}</li><button class="Deletebtn" onclick="deleteTask(${task.id})">Delete Task</button>
      <button class="Editbtn" onclick="editTask(${task.id})">Edit Task</button></div>`;
      flag = true;
    }
  });
  if (!flag) {
    main.innerHTML = `<a>No Completed Tasks</a>`;
  }
});
