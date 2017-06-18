import React, { Component } from 'react';
import { Link } from 'react-router';

import EmperorList from '../containers/main-list';
import EmperorDetail from '../containers/main-detail';

export default class App extends Component {
  render() {
    return (
      <div className='row'>
        <EmperorList />
        <EmperorDetail />
        <Link to='/order' className='to-order'>立即購買</Link>
      </div>
    );
  }
}