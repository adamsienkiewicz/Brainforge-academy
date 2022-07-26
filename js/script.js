const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('.todo-list');
let todos = [];

todoForm.addEventListener('submit', addTodo);

function addTodo(e) {
  e.preventDefault();

  const todoInput = document.querySelector('input[type="text"]');

  const todo = { id: getRandomId(), content: todoInput.value };

  if (todo.content.length === 0) return;

  todos = [...todos, todo];

  todoInput.value = '';

  updateTodoList();
}

function getRandomId() {
  return Math.floor(Math.random() * 999);
}

function updateTodoList() {
  const content = todos.map((todo) => {
    return `
    <li class="row" id="${todo.id}">
        <p>${todo.content}</p>
        <button class="delete-btn">❌</button>
        <input type=checkbox id=myCheck>
    </li>
   `;
  });

  todoList.innerHTML = content.join('');

  const deleteBtns = todoList.querySelectorAll('.delete-btn');
  deleteBtns.forEach((btn) => btn.addEventListener('click', deleteBtn));
}

function deleteBtn() {
  const id = +this.parentNode.id;

  todos = todos.filter((todo) => todo.id !== id);

  updateTodoList();
}
