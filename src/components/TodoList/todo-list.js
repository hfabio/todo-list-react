import React, { Component } from 'react';
import addButton from '../../img/add.png';
import removeButton from '../../img/remove.png';
import Todo from './todo';


export default class TodoList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.handleClick = this.handleClick.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        let select = document.querySelector('#input-task');
        if (select.value !== '') {
            let list = this.state.todos;
            list.push(select.value);
            this.setState({ todos: list });
            select.value = '';
        }
    }

    removeTodo(id) {
        this.setState({ todos: this.state.todos.filter((value, index, array) => { return index !== id }) });
    }

    render() {
        console.log(this.state.todos);
        return (
            <div>
                <div id="add-task" className="naoSelecionavel">
                    <input id="input-task" ></input>
                    <button id="add-button"><img src={addButton} alt="add todo" title="add task" onClick={this.handleClick} ></img></button>
                </div>
                <div id="todo-list">
                    <Todo todos={this.state.todos} btnRemove={removeButton} removeTodo={this.removeTodo} />
                </div>
            </div>
        );
    }
}
