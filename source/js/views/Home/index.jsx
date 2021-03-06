/**
 * Created by jiangnan on 17/5/31.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Nav from 'components/Global/Nav';

export default class Home extends Component {
  static propTypes = {
    children: PropTypes.object,
  }


  render() {
    const { children } = this.props;

    return (
      <div className='App'>
        <Nav />

        <div className='Page'>
          { children }
        </div>
      </div>
    );
  }
}
