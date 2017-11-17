import React from 'react';
import ApiService from '../ApiService';
import UserList from '../components/UserList';
import UserForm from '../form/UserForm';

class UserListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
        this.search = this.search.bind(this);
    }
    
    async search(params) {
        try {
            const users = await ApiService.getUsers(params);
            this.setSate({users});
        } catch (e) {
            console.error(`An error ${e.message} occured while searching users`);
        }
    }

    render() {
        return <div className="user-list">
            <UserForm submitHandler={this.search} />
            <UserList users={this.state.users} />
        </div>;
    }


}
