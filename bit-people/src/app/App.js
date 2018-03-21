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

  handeStates = () => {

    this.setState({
      isListView: !this.state.isListView
    });
    // this.setState({nameIcon});
    console.log("click");
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
        <Header click={this.handeStates}  handleRefresh={this.loadUsers} />
        <Main users={this.state.users} isListView={this.state.isListView} />

        <Footer />
      </div>
    );
  }
}

export { App };
