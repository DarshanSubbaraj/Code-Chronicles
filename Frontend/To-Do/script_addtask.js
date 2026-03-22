let title = document.querySelector(".title");
let Category = document.querySelector(".Category");
let DueDate = document.querySelector(".DueDate");
let Description = document.querySelector(".Description");
let Important = document.querySelector(".Important");
let completed = document.querySelector(".status");
let AddTaskbtn = document.querySelector(".AddTaskbtn");
AddTaskbtn.addEventListener("click", function (e) {
  e.preventDefault();
  let task = {
    title: title.value,
    Category: Category.value,
    DueDate: DueDate.value,
    Description: Description.value,
    Imp: Important.checked,
    Completedstatus: completed.checked,
  };
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
});
