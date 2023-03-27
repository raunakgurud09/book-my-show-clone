import React from 'react';
import Main from './Main';
import Nav from './Nav';

function Header() {
  return (
    <div className=' flex flex-col'>
      <Main />
      <Nav />
    </div>
  );
}

export default Header;
