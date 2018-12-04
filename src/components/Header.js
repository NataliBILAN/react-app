import React, { Fragment } from 'react';
import Logo from './Logo';
import UserMenu from './UserMenu';

const Header = () => (
  <Fragment>
    <Logo
      logoUrl="https://reactjs.org/"
      logoImg="http://pngimg.com/uploads/donut/donut_PNG98.png"
    />

    <UserMenu
      userPhoto="https://beztabu.net/uploads/770x433_DIR/media_news/2018/08/5b7ab1515ee6a335510834.jpg"
      userName="Homer Simpson"
    />
  </Fragment>
);
export default Header;
