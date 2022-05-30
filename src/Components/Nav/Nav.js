import React from 'react';
import './_Nav.scss'

function Nav() {
  return (
    <div className='nav'>
      <div className='nav__imgbox'>
        <img className='nav__logo' src="https://cdn-icons-png.flaticon.com/512/5968/5968885.png" alt="logo" />
      </div>
      <div className='nav__icons'>
        <i className='nav__icon bx bx-home'></i>
        <i className='nav__icon bx bx-bell' ></i>
        <i className='nav__icon bx bxs-bookmarks'></i>
        <i className='nav__icon bx bx-spreadsheet'></i>
        <div>
          <i className='nav__icon bx bxs-edit'></i>
        </div>
      </div>
      <div className='nav__next'>
        <img className='nav__user' src="https://cdn.icon-icons.com/icons2/1141/PNG/512/1486395884-account_80606.png" alt="user" />
      </div>
    </div>
  );
}

export default Nav;