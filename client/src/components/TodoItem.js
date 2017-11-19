import React from 'react';
import UserName from './UserName';

const TodoItem = (props) => {
    const completedClass = props.completed ? 'todo-list__item--completed' : '';
    return <div className={`todo-list__item ${completedClass}`}>
        <p className='todo-list__title'>{props.title}</p>
        <div className='todo-list__assignee'>
            <div className = 'todo-list__ulabel'>Assigned To</div>
            <UserName {...props.user} />
        </div>
    </div>
    
}

export default TodoItem;
