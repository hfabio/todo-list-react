import React, { Component } from 'react';

// import { Container } from './styles';

export default class Todo extends Component {
    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) => {
                    return <li key={index}>
                        <p>{todo}</p><button onClick={() => { this.removeTodo(index) }}><img src={this.props.btnRemove} alt="remove"></img></button>
                    </li>
                })}
            </ul>
        );
    }
}
