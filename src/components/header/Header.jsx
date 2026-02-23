import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';

import './header.scss';

export const Header = ({ addBtn, addPath, onAddClick }) => {
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
          {onAddClick ? (
            <button type="button" onClick={onAddClick}>
              {addBtn}
            </button>
          ) : (
            <Link to={addPath}>{addBtn}</Link>
          )}
        </div>
      </header>
      <Outlet />
    </>
  );
};
