import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

import TagsInput from './SimpleExample.js'

class SimpleExample extends Component {
  constructor () {
    super()
    this.state = {tags: []}
  }

  handleChange (tags) {
    this.setState({tags})
  }

  render () {
    return ( 
    <div> 
      <TagsInput value={this.state.tags} onChange={this.handleChange} />
    </div>
    );

  }
}

export default SimpleExample;
