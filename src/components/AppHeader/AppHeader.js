import React from 'react';
import appLogo from './assets/logo.png';
import Logo from '../Logo/Logo';
import navItems from '../../configs/main-nav';
import Navigation from '../Navigation/Navigation';
import s from './AppHeader.module.css';
import UserMenu from '../../modules/user/UserMenu/UserMenu';
import avatar from './assets/avatar.jpeg';

const AppHeader = () => (
  <header className={s.header}>
    <Logo img={appLogo} />
    <Navigation items={navItems} />
    <UserMenu image={avatar} name="Homer Simpson" />
  </header>
);

export default AppHeader;
