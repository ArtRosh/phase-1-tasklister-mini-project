document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Create new task item
    const task = document.createElement("li");
    task.innerHTML = document.getElementById("new-task-description").value;

    // Create delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "✖"; // Make sure it's visible
    deleteButton.style.marginLeft = "10px";
    deleteButton.style.border = "1px solid black";
    deleteButton.style.background = "white";
    deleteButton.style.color = "black";
    deleteButton.style.cursor = "pointer";
    deleteButton.style.padding = "2px 5px";

    // Append delete button to task
    task.appendChild(deleteButton);
    document.getElementById("tasks").appendChild(task);

    // Add event listener to delete button
    deleteButton.addEventListener("click", function(event) {
      event.target.parentElement.remove();
    });

    // Clear input field
    event.target.reset();
  });
});