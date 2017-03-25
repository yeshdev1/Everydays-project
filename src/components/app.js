import React, { Component } from 'react';

const divStyle = {
  backgroundImage: 'url(https://bootstrap-themes.github.io/marketing/assets/img/startup-1.jpg)',
};

// const goStyle = {
//   background: #fff,
//   padding: 12px,
//   border-radius: 4px,
//   color: #28669F,
// };

export default class App extends Component {
  render() {
    return (
      <div className="btd" id="stage">
        <div className="k am brj bti" style={divStyle}>
          <div className="e ajl afy app-navbar">
            <nav className="e ajl afy app-navbar">
              <button className="sj sm azl" type="button" data-target="#stage" data-toggle="stage" data-distance="-250">
                <span className="sk"></span>
              </button>
              <div className="panel-heading">
                <ul className="navbar-nav pull-right">
                  <div className="btn-toolbar">
                    <button type="button" className="btn btn-default btn-transparent">Home</button>
                    <button type="button" className="btn btn-default btn-transparent">Documentations</button>
                    <button type="button" className="btn btn-default btn-transparent">Projects</button>
                    <button type="button" className="btn btn-default btn-transparent">Contact</button>
                  </div>
                </ul>
              </div>
            </nav>
          </div>
          <div class="brp ajp">
            <div class="e">
              <div class="c">
                <div class="fv gr">
                  <h1 class="btj btk">Yeshwanth Devabhaktuni - Programmer, Developer, Code Ninja!</h1>
                  <p class="al ahs an">Stop installing bloated scripts that all track the exact same things. Install one that does everything.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
