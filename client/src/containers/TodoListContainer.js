import React from 'react';
import TodoList from '../components/TodoList';
import ApiService from '../ApiService';

class TodoListContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    async componentDidMount() {
        const userId = this.props.match.params.number;
        try {
            const todos = await ApiService.getTodos({userId});
            this.setState({todos});
        } catch (e) {
            console.error(`An error ${e.message} occured while loading tasks for user ${userId}`);
        }
    }

    render () {
        return (
           <div className="todo-list">
               <TodoList todos={this.state.todos} />
               <Link to='/'>Back to Users list</Link>
           </div>
        );
    }

}

