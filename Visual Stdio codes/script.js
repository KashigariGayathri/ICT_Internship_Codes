const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== '') {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <input type="checkbox">
      <span>${taskText}</span>
      <button class="deleteBtn">Delete</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = '';

    const deleteBtn = taskItem.querySelector('.deleteBtn');
    deleteBtn.addEventListener('click', () => taskItem.remove());

    const checkbox = taskItem.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        taskItem.classList.add('completed');
      } else {
        taskItem.classList.remove('completed');
      }
    });
  }
}
