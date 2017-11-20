import React from 'react';

const UserName = (props) => {
    return <div className="user__name">{`${props.first_name} ${props.last_name}`}</div>;
}

export default UserName;
