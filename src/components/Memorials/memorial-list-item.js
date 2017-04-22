import React, { Component } from 'react';
import axios from 'axios';
import ACTIONS from '../../utilities/constants';

export default class Memorial extends Component {

  printName(memorial){
    return memorial.name ? (memorial.name.first+(memorial.name.last ? " "+memorial.name.last: "")):"Anonymous";
  }

  printDate(memorial){
    return new Date(memorial.creationDate).toString().split(" ").slice(0,5).join(" ");
  }

  render(){
    return (
        <div className="panel panel-info">
          <div className="panel-heading">
            <h6 className="pull-right"> <span className="badge">{this.printDate(this.props.memorial)}</span></h6>
            <h4>{ this.printName(this.props.memorial) }</h4>
          </div>
          <div className="panel-body">
            <b>MESSAGE</b><p>{this.props.memorial.message}</p>
            <b>OBITUARY</b><p>{this.props.memorial.obituary}</p>
          </div>
        </div>
    );
  }
}
