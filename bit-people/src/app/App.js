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
      users: []
    }
  }

  componentDidMount() {
    userService.fetchUsers()
      .then(users => this.setState({users:users}))

  }

 

  render() {
    return (
      <div>
        <Header />
        <Main users={this.state.users} />

        <Footer />
      </div>
    );
  }
}

export { App };
