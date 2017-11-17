import React, { Component } from 'react';
import './App.css';
import UserListContainer from './containers/UserListContainer';
import TodoContainer from './containers/TodoListContainer';

const App = () => {
    <Switch>
        <Route exact path='/' component={UserListContainer}/>
        <Route path='/todos/:userId' component={TodoListContainer}/>
    </Switch>
};

export default App;
