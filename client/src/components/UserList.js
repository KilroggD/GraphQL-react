import React from 'react';
import UserItem from './UserItem';

const UserList = (props) => {
    const users = props.users;
    if (!users.length) { //no users
        return null;
    }
    return <div className="user__list">
            {
                users.map((item, index) => {
                    return <UserItem key={index} {...item} />;
                })
            }
    </div>;
}

export default UserList;