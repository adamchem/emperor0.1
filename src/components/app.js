import React, { Component } from 'react';

import Header from '../containers/header';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
