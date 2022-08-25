const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('.todo-list');
let todos = localStorage.getItem('todos');
todos = JSON.parse(todos)
updateTodoList()
todoForm.addEventListener('submit', addTodo);

function addTodo(e) {
  e.preventDefault();

  const todoInput = document.querySelector('input[type="text"]');

  const todo = { id: getRandomId(), content: todoInput.value, completed: false };

  if (todo.content.length === 0) return;
  
  todos = [...todos, todo];

  todoInput.value = '';
  
  updateTodoList();
  
}

function getRandomId() {
  return Math.floor(Math.random() * 999);
}

function updateTodoList() {

  localStorage.setItem('todos', JSON.stringify(todos));
  const content = todos.map((todo) => {
    console.log("todo", todo)
    return `
    <li class="row" id="${todo.id}">
        <p>${todo.content}</p>
        <button class="delete-btn">❌</button>
        ${todo.completed?
        `<input type="checkbox" id="myCheck-${todo.id}" checked class="checkbox">`:
        `<input type="checkbox" id="myCheck-${todo.id}" class="checkbox">`
        }
    </li>
   `;
   
  });
   
  todoList.innerHTML = content.join('');
  
  const uncheckedCheckbox = todoList.querySelectorAll(`.checkbox`)
  uncheckedCheckbox.forEach((checkbox) => checkbox.addEventListener('click', toggle));
  

  const deleteBtns = todoList.querySelectorAll('.delete-btn');
  deleteBtns.forEach((btn) => btn.addEventListener('click', deleteBtn));
}

function toggle(){
  const id = +this.parentNode.id;
  let foundTodo = todos.find((todo)=>todo.id==id)
  console.log("toggling todo", foundTodo)
  foundTodo.completed = !foundTodo.completed
}

function deleteBtn() {
  const id = +this.parentNode.id;

  todos = todos.filter((todo) => todo.id !== id);

  updateTodoList();
}


