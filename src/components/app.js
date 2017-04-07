import React, { Component } from 'react';
import Request from 'superagent';
import DocumentationPage from './Documentation/documentation';
import ContactPage from './Contact/contact';
import BlogPage from './Blog/blog';
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

  onClickBlog(){
    this.setState({ active: 'Blog'});
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
          <a className="navbar-brand" href="#"><span className="badge">Y.D</span></a>
          <ul className="nav nav-pills pull-right">
          <li className={this.isActive('home')} onClick={() => this.onClickHome()}>
            <a className="nav-link" href="#">Home</a>
          </li>
          <li className={this.isActive('Blog')} onClick={() => this.onClickBlog()}>
            <a className="nav-link" href="#">Blog</a>
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
      <div>
      <div className="jumbotron text-center" style={{backgroundColor:'#6193ff'}}>
        <h1 className="display-3">Yesh.org</h1>
        <a href="#"> <img src={"../../../images/yesh_nav.jpg"} className="img-circle" height="100" width="100" /> </a>
        <p className="head">
          Hi! My Name is Yeshwanth Devabhaktuni a.k.a Yesh! I am a full stack developer with a degree
          in Computer Science from the University of Michigan, Graduated in 2016. I can develop a website for you
          or any business, fork a repo or work with you on a project. If it is a project that you want to work on,
          please message me on the contact page! Preferably only single-page applications
        </p>
        <p>
          <a className="btn btn-lg btn-success" href="#me" role="button">Click here to See My Experience <br /><i className="glyphicon glyphicon-chevron-down"></i></a>
        </p>
      </div>
      {this.renderExpertise()}
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

  renderBlog(){
    return(
      <BlogPage />
    );
  }

  renderContact(){
    return(
      <ContactPage />
    )
  }

  renderExpertise(){
    return(
      <div>
        <section id="me">
          <div className="panel panel-default text-center">
              <div className="row">
                <div className="panel-heading">
                  <h1>Areas Of Expertise</h1>
                  <h4>This is all the knowledge I have about development</h4>
                </div>
                <div className="panel-body">
                    <div className="col-md-4">
                    <img src={"../../../images/programmer.jpeg"} className="img-circle" height="50" width="50" />
                    <h3> The Job </h3> <br />
                    <p style={{color:"#7a997c"}}>
                      I currently work at a company called Infinite Web Design in Lake Orion, Mi
                      We develop software for mostly healthcare clients working with React-Redux, socket.io,
                      coldfusion, jquery, webpack, Ecmascript 6.
                    </p>
                  </div>
                  <div className="col-md-4">
                    <img src={"../../../images/code.jpg"} className="img-circle" height="50" width="50" />
                    <h3> Code </h3> <br />
                    <p style={{color:"#7a997c"}}>
                      I am a very passionate coder who likes to develop websites and focus more on the functionality of the website
                      as opposed to the look of it. After all, a website is only good when it is powerful, fast and ultimately scalable if necessary.
                      But I love to learn new UI design patterns everyday, and hey, who does not like a good looking website right?
                    </p>
                  </div>
                  <div className="col-md-4">
                    <img src={"../../../images/project.jpg"} className="img-circle" height="50" width="50" />
                    <h3> Projects </h3> <br />
                    <p style={{color:"#7a997c"}}>
                      I am a very passionate web developer, but I also do iOS development and love to learn new technologies. I
                      am currently in the process of learning Rails and Django as well. This project is built using react with redux. I
                      also love coding in C++ and am currently learning how to write code in OpenCV for vision software and graphics.
                    </p>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  renderFooter(){
    return(
      <footer>
        <div className="panel-footer">
          <div className="text-center">
            <div className='row'>
              <div className='twelve columns'>
                <a href="#"> <img src={"../../../images/yesh_nav.jpg"} className="img-circle" height="30" width="30" /> </a>
                <p className="made-by-me">Handmade by me © 2017.</p> <br />
                <a href="https://www.linkedin.com/pub/matthew-farley/14/260/325" target="_blank"><i className="fa fa-linkedin"></i></a>
                <a href="https://github.com/farleym" target="_blank"><i className="fa fa-github"></i></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  render() {
    return (
      <div className="container">
          {this.renderNavbar()}
          {this.state.active == 'home' && this.renderJumbotron()}
          {this.state.active == 'documentation' && <DocumentationPage />}
          {this.state.active == 'projects' && <ProjectsPage />}
          {this.state.active == 'Blog' && <BlogPage />}
          {this.state.active == 'contact' && <ContactPage />}
          {this.renderFooter()}
      </div>
    );
  }
}
