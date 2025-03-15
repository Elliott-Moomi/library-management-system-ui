import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

import './header.scss';

export const Header = ({ addBtn, addPath }) => {
  return (
    <>
      <header>
        <h1>Library Management System</h1>
        <div>
          <button>
            <NavLink to="/">Books</NavLink>
          </button>
          <button>
            <NavLink to="/members">Members</NavLink>
          </button>
          <button>
            <Link to={addPath}>{addBtn}</Link>
          </button>
        </div>
      </header>
      <Outlet />
    </>
  );
};
