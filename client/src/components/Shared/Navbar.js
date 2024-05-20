import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Insurance Workflow
        </Link>
        <div className="collapse navbar-collapse">
          {user ? (
            <ul className="navbar-nav">
              {user.role.name === 'admin' && (
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/dashboard">
                    Dashboard
                  </Link>
                </li>
              )}
              {user.role.name === 'admin' && (
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/users">
                    User Management
                  </Link>
                </li>
              )}
              {user.role.name === 'admin' && (
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/companies">
                    Insurance Companies
                  </Link>
                </li>
              )}
              {user.role.name === 'admin' && (
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/police">
                    Police Stations
                  </Link>
                </li>
              )}
              {user.role.name === 'admin' && (
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/repair-shops">
                    Repair Shops
                  </Link>
                </li>
              )}
              {user.role.name === 'admin' && (
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/sales-stores">
                    Sales Stores
                  </Link>
                </li>
              )}
              {user.role.name === 'admin' && (
                <li className="nav-item">
                  <Link className="nav-link" to="/admin/claims">
                    Claims
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <button className="btn btn-link nav-link" onClick={logoutUser}>
                  Logout
                </button>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">
                  Register
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;