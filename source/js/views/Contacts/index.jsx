/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }


  render() {
    const { children } = this.props;

    return (
      <div className='App'>
       关于我们
      </div>
    );
  }
}
