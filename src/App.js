import React from 'react';
import TodoList from './components/TodoList/todo-list';
import './style.css';

function App() {
  return (
    <div>
      <div className="title">
        <h1 className="naoSelecionavel" >Todo list</h1>
      </div>
      <div className="container">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
