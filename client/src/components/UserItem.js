import React from 'react';
import UserName from './UserName';
import UserInfo from './UserInfo';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
    let first_name, last_name, id, todo_count, info;
    ({id, first_name, last_name, todo_count, ...info} = props);
    return (
        <div className='user__item'>
            <UserName first_name={first_name} last_name={last_name} />
            <UserInfo {...info} />
            <Link className='user__todo-link' to={`/todos/${id}`}>View Todos ({todo_count})</Link>
        </div>
    );

};

export default UserItem;
