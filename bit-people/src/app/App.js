import React, { Component } from 'react';
import '../App.css';
import { userService } from '../services/UsersServices';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { Main } from './partials/Main';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isListView: true
    }
  }

  componentDidMount() {
  this.loadUsers();
  }

  loadUsers = () => {
    userService.fetchUsers()
    .then(users => this.setState({users:users}));
  }
 

  render() {
    return (
      <div>
        <Header handleRefresh={this.loadUsers} isListView={this.state.isListView} />
        <Main users={this.state.users} isListView={this.state.isListView} />

        <Footer />
      </div>
    );
  }
}

export { App };
