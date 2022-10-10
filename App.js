import './App.css';
import { useEffect, useState, } from 'react';
import TodoList from './TodoList';


function App() {
  const [todos, setTodos] = useState(localStorage.getItem('todoTask') ? JSON.parse(localStorage.getItem('todoTask')) : []);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
   console.log('' + localStorage.getItem('todoTask'))
    
  },[inputValue])

  
  function getRandomId() {
    return Math.floor(Math.random() * 999);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = { id: getRandomId(), content: inputValue };
    
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setInputValue('');
    localStorage.setItem('todoTask', JSON.stringify(newTodos));
  };

  const handleDeleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  return (
    <form className='formWrapper' onSubmit={handleSubmit}>
      <input className="inputTodo"
        type='text'
        value={inputValue}
        onChange={(event) => {
          setInputValue(event.target.value);
        }}
      />
      <button type='submit'>Add</button>
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </form>
  );
}

export default App;
