import React, { Component } from 'react';
import '../App.css';
import {userService} from '../services/UsersServices';
import {Header} from './partials/Header';
import {Footer} from './partials/Footer';
import {Main} from './partials/Main';

class App extends Component {

  componentDidMount() {
    userService.fetchUsers()
  }

  render() {
    return (
      <div>
       <Header />
       <Main />
       ovo je ovde onako bezveze ovde da razdvoji dok ne dodju juzrsi.
       <Footer />
      </div>
    );
  }
}

export {App};
