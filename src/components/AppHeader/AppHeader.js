import React from 'react';
import appLogo from './assets/logo.png';
import Logo from '../Logo/Logo';
import navItems from '../../configs/main-nav';
import Navigation from '../Navigation/Navigation';
import s from './AppHeader.module.css';
import Avatar from '../../modules/user/Avatar/Avatar';
import avatar from './assets/avatar.jpeg';

const AppHeader = () => (
  <header className={s.header}>
    <Logo img={appLogo} />
    <Navigation items={navItems} />
    <Avatar image={avatar} />
  </header>
);

export default AppHeader;
