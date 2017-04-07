import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBlog } from '../../actions/index';
import { bindActionCreators } from 'redux';

class BlogPage extends Component {
  constructor(props){
    super(props);

    this.state = {

    };

  }

  //A different panel for each blog post, a longer popup extend with a red + sign
  componentDidMount(){

  }

  render(){
    return(
      <div>
        <button type='button' onClick={() => this.props.selectBlog('blog')}>Button </button>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    blogs: state.blogs
  }
}

function mapDispatchToProps(dispatch){
  return {
    selectBlog: (blog) => {
      dispatch(selectBlog(blog))
    }
  }
}

export default connect
  (mapStateToProps,
  mapDispatchToProps)
  (BlogPage);
