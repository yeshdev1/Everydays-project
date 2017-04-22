import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMemorialsData } from '../../apiRequest';
import axios from 'axios';
import ACTIONS from '../../utilities/constants';
import Memorial from './memorial-list-item';

class MemorialsPage extends Component {
  constructor(props){
    super(props);

    //The is for the toggle
    //button group that can help revert to the original
    //filtering according to the creation date
    this.state = {
      buttonDefault: true
    };
  }

  //A different panel for each blog post, a longer popup extend with a red + sign
  componentWillMount(){
    getMemorialsData().then(res => {
      this.props.setData(res.data.data);
    }).catch(err => {
      console.log('could not resolve: ',err);
    });
  }

  //class changing functions
  isActive(value){
    if(this.state.buttonDefault === value){
      return "btn btn-success btn-lg active";
    }
    return "btn btn-success btn-lg";
  }

  onClickToggle(action,buttonGroupState) {
    if(ACTIONS.SET_DATA ===  action) {
      this.props.setData(this.props.data);
      this.setState({buttonDefault:buttonGroupState});
    }
    else {
      this.props.updateData(this.props.data);
      this.setState({buttonDefault:buttonGroupState});
    }
  }

  renderToggleButtons(){
    return(
      <div className="btn-group" data-toggle="buttons" style={{height:'55px'}}>
        <button type='button' className={this.isActive(true)} onClick={() => this.onClickToggle(ACTIONS.SET_DATA,true) }>Memorial List - Default</button>
        <button type='button' className={this.isActive(false)} onClick={() => this.onClickToggle(ACTIONS.LAST_NAME_SORTED_DATA,false) }>Memorial List - Last Name</button>
      </div>
    );
  }

  renderAllData(){
    return this.props.data.map( memorial => {
      return (
        <li key={memorial.creationDate} className="list-group-item" style={{border:'none'}}>
          <Memorial memorial={memorial} />
        </li>
      );
    });
  }

  render(){
    return(
      <div className="well well-sm">
        <div className="text-center">
          {this.renderToggleButtons()}
        </div>
          {this.renderAllData()}
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    data: state.everydays_data
  }
}

function mapDispatchToProps(dispatch){
  return {
    setData: (data) => {
      dispatch({type: ACTIONS.DEFAULT_DATA, payload: data});
    },
    updateData: (data) => {
      dispatch({type: ACTIONS.LAST_NAME_SORTED_DATA, payload: data});
    }
  }
}

export default connect
  (mapStateToProps,
  mapDispatchToProps)
  (MemorialsPage);
