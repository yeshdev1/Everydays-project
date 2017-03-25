import React, { Component } from 'react';
import Request from 'superagent';

export default class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      active: 'home'
    };
  }

  isActive(value){
    if(value == this.state.active){
      return "nav-item active";
    }
    else{
      return "nav-item";
    }
  }

  renderNavbar(){
    return(
      <nav className="navbar navbar-default">
          <a className="navbar-brand" href="#">Y.D</a>
          <ul className="nav nav-pills pull-right">
          <li className={this.isActive('home')} onClick={() => this.setState({ active: 'home'})}>
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className={this.isActive('messages')} onClick={() => this.setState({ active: 'messages'})}>
            <a className="nav-link" href="#">Messages</a>
          </li>
          <li className={this.isActive('documentation')} onClick={() => this.setState({ active: 'documentation'})}>
            <a className="nav-link" href="#">Documentation</a>
          </li>
          <li className={this.isActive('projects')} onClick={() => this.setState({ active: 'projects'})}>
            <a className="nav-link" href="#">Projects</a>
          </li>
          <li className={this.isActive('contact')} onClick={() => this.setState({ active: 'contact'})}>
            <a className="nav-link" href="#">Contact</a>
          </li>
          </ul>
        </nav>
    );
  }

  renderJumbotron(){
    return(
      <div className="jumbotron text-center">
        <h1 className="display-3">Yesh.org</h1>
        <a href="#"> <img src={"../../../images/yesh_nav.jpg"} height="100" width="100" /> </a>
        <p className="head">
          Hi! My Name is Yeshwanth Devabhaktuni a.k.a Yesh! I am a full stack developer with a degree
          in Computer Science from the University of Michigan, Graduated in 2016. I can develop a website for you
          or any business, fork a repo or work with you on a project. If it is a project that you want to work on,
          please message me on the contact page!
        </p>
        <p>
          <a className="btn btn-lg btn-success" href="#" role="button">Click here to See My Experience</a>
        </p>
      </div>
    );
  }

  render() {
    return (
      <div className="container">
        {this.renderNavbar()}
        {this.renderJumbotron()}
      </div>
    );
  }
}
