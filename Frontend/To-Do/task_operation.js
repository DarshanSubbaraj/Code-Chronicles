let title = document.querySelector(".title");
let Category = document.querySelector(".Category");
let DueDate = document.querySelector(".DueDate");
let Description = document.querySelector(".Description");
let Important = document.querySelector(".Important");
let completed = document.querySelector(".status");
let AddTaskbtn = document.querySelector(".AddTaskbtn");
if (AddTaskbtn) {
  AddTaskbtn.addEventListener("click", function (e) {
    e.preventDefault();
    let task = {
      id: Date.now(),
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
}

/*---Delete Task---*/

function deleteTask(id) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  let deletebtn = document.querySelector(".deletebtn");
  tasks.forEach(function (task) {
    if (task.id === id) {
      let ok = confirm(`You sure want to delete ${id}`);
      if (ok) {
        tasks = tasks.filter((task) => task.id != id);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        location.reload();
      }
    }
  });
  location.reload();
}
