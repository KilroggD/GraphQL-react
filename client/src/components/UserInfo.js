import React from 'react';

const UserInfo = (props) => {
    return <div className="user__info">
        <p className="user__row"><span>Email: {props.email}</span></p>
        <p className="user__row"><span>Department: {props.department}</span></p>
        <p className="user__row"><span>Country: {props.country}</span></p>
    </div>;
}

export default UserInfo;