document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Получаем значение из input
    const taskText = document.getElementById("new-task-description").value.trim();
    if (taskText === "") return; // Не добавлять пустую задачу

    // Создаем новый элемент задачи
    const task = document.createElement("li");
    task.textContent = taskText;
    task.classList.add("task-item"); // Добавляем класс для стилизации

    // Создаем кнопку удаления
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "✖";
    deleteButton.classList.add("delete-btn"); // Класс для удобства

    // Добавляем кнопку в задачу
    task.appendChild(deleteButton);
    taskList.appendChild(task);

    // Очищаем поле ввода
    event.target.reset();
  });

  // Используем делегирование событий (чтобы не вешать обработчик на каждую кнопку)
  taskList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-btn")) {
      event.target.parentElement.remove();
    }
  });
});