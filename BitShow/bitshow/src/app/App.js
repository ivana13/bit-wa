import React, { Component } from 'react';
import '../App.css';
import { createShows } from '../services/ShowsService';
import { Navbar } from './partials/Navbar';
import { Footer } from './partials/Footer';
import { AllShowsPage } from './shows/AllShowsPage';

class App extends Component {


  componentDidMount() {
    
  }

  


  render() {
    return (
      <div>
        <Navbar />
        <AllShowsPage  />
        <Footer />
      </div>
    )
  }
}

export default App;
