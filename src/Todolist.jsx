import  { useState } from 'react';
import './TodoList.css'; 

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, inputValue]);
      setInputValue('');
    }
  };

  return (
    <div className="todo-list-container">
      <input
        className="todo-list-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button className="todo-list-button" onClick={handleAddTodo}>
        Add Todo
      </button>
      <ul className="todo-list-items">
        {todos.map((todo, index) => (
          <li key={index} className="todo-list-item">
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
