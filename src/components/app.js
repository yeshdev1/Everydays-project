import React, { Component } from 'react';
import NavBar from './Generic/nav-bar';
import MemorialsPage from './Memorials/memorials-list';

export default class App extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="container">
        <NavBar />
        <MemorialsPage />
      </div>
    );
  }
}
