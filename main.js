let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");
window.onload = function () {
  theInput.focus();
};
theAddButton.addEventListener("click", () => {
  if (theInput.value === "") {
    console.log("empty");
  } else {
    let noTasksMsg = document.querySelector(".no-tasks-message");
    if (document.body.contains(noTasksMsg)) {
      noTasksMsg.remove();
    }
    let mainSpan = document.createElement("span");
    let deleteElement = document.createElement("span");
    let text = document.createTextNode(theInput.value);
    let deleteText = document.createTextNode("Delete");
    mainSpan.appendChild(text);
    deleteElement.appendChild(deleteText);
    mainSpan.className = "task-box";
    deleteElement.className = "delete";
    mainSpan.appendChild(deleteElement);
    tasksContainer.appendChild(mainSpan);
    theInput.value = "";
    calculateTasks()
    theInput.focus();
  }
});
document.addEventListener("click", (e) => {
  if (e.target.className === "delete") {
    e.target.parentNode.remove();
    calculateTasks()
    if (tasksContainer.childElementCount === 0) {
      createNoTasks();
    }
  }
  if (e.target.classList.contains("task-box")) {
    e.target.classList.toggle("finished");
    calculateTasks()
  }
});
let deleteAll = document.createElement("div");
deleteAll.className = "delete-all";
let deleteAllText = document.createTextNode("Delete All");
deleteAll.appendChild(deleteAllText);

document.body.appendChild(deleteAll);
deleteAll.addEventListener("click", () => {
  if(tasksContainer.contains(document.querySelector(".no-tasks-message"))){
   return false;
  }
    tasksContainer.innerHTML = "";
  calculateTasks();
  createNoTasks();
});
function createNoTasks() {
  // Create Message Span Element
  let msgSpan = document.createElement("span");

  // Create The Text Message
  let msgText = document.createTextNode("No Tasks To Show");

  // Add Text To Message Span Element
  msgSpan.appendChild(msgText);

  // Add Class To Message Span
  msgSpan.className = "no-tasks-message";

  // Append The Message Span Element To The Task Container
  tasksContainer.appendChild(msgSpan);
}
function calculateTasks() {
    tasksCount.innerHTML = document.querySelectorAll(".tasks-content .task-box").length;
    tasksCompleted.innerHTML = document.querySelectorAll(".tasks-content .finished").length;
}