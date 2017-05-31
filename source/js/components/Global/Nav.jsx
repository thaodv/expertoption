import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';
import { routeCodes } from '../../routes';
import workAndCoLogoImg from '../../../assets/img/workco-logo.svg';

export default class Menu extends Component {

  render() {
    return (
      <div className='Menu'>
        <div className='Menu-links'>
          <IndexLink
            activeClassName='Menu-link--active'
            className='Menu-link'
            to={ routeCodes.DASHBOARD }
          >
            主页
          </IndexLink>
          <Link
            activeClassName='Menu-link--active'
            className='Menu-link'
            to={ routeCodes.PLATFORM }
          >
            平台
          </Link>
          <Link
            activeClassName='Menu-link--active'
            className='Menu-link'
            to={ routeCodes.PRICING }
          >
            账户类型
          </Link>
          <Link
            activeClassName='Menu-link--active'
            className='Menu-link'
            to={ routeCodes.EDUCATION }
          >
            学习资料
          </Link>
          <Link
            activeClassName='Menu-link--active'
            className='Menu-link'
            to={ routeCodes.CONTACTS }
          >
            关于我们
          </Link>
          <Link
            activeClassName='Menu-link--active'
            className='Menu-link'
            to='/app'
          >
            登陆后页面
          </Link>
        </div>
      </div>
    );
  }
}