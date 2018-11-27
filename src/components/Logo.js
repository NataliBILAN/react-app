import React from 'react';

const Logo = ({ logoUrl, logoImg }) => (
  <a href={logoUrl}>
    <img src={logoImg} alt="logo" width="100" />
  </a>
);

export default Logo;
