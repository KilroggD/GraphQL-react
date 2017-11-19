import React from 'react';
import UserName from './UserName';
import UserInfo from './UserInfo';
import { Link } from 'react-router-dom';

const UserItem = (props) => {
    let first_name, last_name, id, info;
    ({id, first_name, last_name, ...info} = props);
    return (
        <div className='user__item'>
            <UserName name={first_name} surname={last_name} />
            <UserInfo {...info} />
            <Link className='user__todo-link' to={`/todos/${id}`}>View Todos</Link>
        </div>
    );

};

export default UserItem;

