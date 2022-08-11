const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('.todo-list');
let todos = JSON.parse(localStorage.getItem('todos')) ?? [];

todoForm.addEventListener('submit', addTodo);

updateTodoList();

function addTodo(e) {
  e.preventDefault();

  const todoInput = document.querySelector('input[type="text"]');

  const todo = { id: getRandomId(), content: todoInput.value, completed: false };

  if (todo.content.length === 0) return;

  todos = [...todos, todo];

  todoInput.value = '';

  localStorage.setItem('todos', JSON.stringify(todos));

  updateTodoList();
}

function getRandomId() {
  return Math.floor(Math.random() * 999);
}

function updateTodoList() {
  const content = todos.map((todo) => {
    return `
    <li class="row" id="${todo.id}">
        <input type="checkbox" ${todo.completed ? 'checked' : ''}/>
        <p>${todo.content}</p>
        <button class="delete-btn">❌</button>
    </li>
   `;
  });

  todoList.innerHTML = content.join('');

  const deleteBtns = todoList.querySelectorAll('.delete-btn');
  deleteBtns.forEach((btn) => btn.addEventListener('click', deleteBtn));

  const checkboxes = todoList.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => checkbox.addEventListener('click', toggleCompleted));
}

function deleteBtn() {
  const id = +this.parentNode.id;

  todos = todos.filter((todo) => todo.id !== id);

  localStorage.setItem('todos', JSON.stringify(todos));

  updateTodoList();
}

function toggleCompleted() {
  const id = +this.parentNode.id;

  todos = todos.map((todo) => (todo.id === id ? { ...todo, completed: this.checked } : todo));

  localStorage.setItem('todos', JSON.stringify(todos));

  updateTodoList();
}
