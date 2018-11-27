import React, { Fragment } from 'react';

const UserMenu = ({ userName, userPhoto }) => (
  <Fragment>
    <img src={userPhoto} alt={userName} width="100" />
    <p>{userName}</p>
  </Fragment>
);

export default UserMenu;
