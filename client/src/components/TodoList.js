import React from 'react';
import TodoItem from './TodoItem';

const TodoList = (props) => {
    if(!props.todos.length) {
        return null;
    }
    return <div className="todo__list">
        {
            props.todos.map((item, index) => {
                return <TodoItem key={index} {...item} />;
            })
        }
    </div>
}

export default TodoList
