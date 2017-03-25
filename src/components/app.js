import React, { Component } from 'react';
import Request from 'superagent';
import DocumentationPage from './Documentation/documentation';
import ContactPage from './Contact/contact';
import MessagesPage from './Messages/messages';
import ProjectsPage from './Projects/projects';

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

  onClickHome(){
    this.setState({active: 'home'});
  }

  onClickMessages(){
    this.setState({ active: 'messages'});
  }

  onClickDocumentation(){
    this.setState({ active: 'documentation'});
  }

  onClickProjects(){
    this.setState({ active: 'projects'});
  }

  onClickContact(){
    this.setState({ active: 'contact'});
  }

  renderNavbar(){
    return(
      <nav className="navbar navbar-default">
          <a className="navbar-brand" href="#">Y.D</a>
          <ul className="nav nav-pills pull-right">
          <li className={this.isActive('home')} onClick={() => this.onClickHome()}>
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className={this.isActive('messages')} onClick={() => this.onClickMessages()}>
            <a className="nav-link" href="#">Messages</a>
          </li>
          <li className={this.isActive('documentation')} onClick={() => this.onClickDocumentation()}>
            <a className="nav-link" href="#">Documentation</a>
          </li>
          <li className={this.isActive('projects')} onClick={() => this.onClickProjects()}>
            <a className="nav-link" href="#">Projects</a>
          </li>
          <li className={this.isActive('contact')} onClick={() => this.onClickContact()}>
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
          please message me on the contact page! Preferably only single-page applications
        </p>
        <p>
          <a className="btn btn-lg btn-success" href="#" role="button">Click here to See My Experience</a>
        </p>
      </div>
    );
  }

  renderDocumentation(){
    return(
        <DocumentationPage />
    );
  }

  renderProjects(){
    return(
      <ProjectsPage />
    );
  }

  renderMessages(){
    return(
      <MessagesPage />
    );
  }

  renderContact(){
    return(
      <ContactPage />
    )
  }

  render() {
    return (
      <div className="container">
          {this.renderNavbar()}
          {this.state.active == 'home' && this.renderJumbotron()}
          {this.state.active == 'documentation' && this.renderDocumentation() }
          {this.state.active == 'projects' && this.renderProjects()}
          {this.state.active == 'messages' && this.renderMessages()}
          {this.state.active == 'contact' && this.renderContact()}
      </div>
    );
  }
}
