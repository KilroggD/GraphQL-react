import React from 'react';

const UserName = (props) => {
    return <div className="user__name">{props.name} {props.surname}</div>;
}

export default UserName;
