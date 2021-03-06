import React, { useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import authContext from '../../context/auth/authContext';
import contactContext from '../../context/contact/contactContext';
import { Link } from 'react-router-dom';

const Navbar = ({ title, icon }) => {
  const { isAuthenticated, logout, user } = useContext(authContext);
  const { clearContacts } = useContext(contactContext);

  const onLogout = () => {
    logout();
    clearContacts();
  };

  const authLinks = (
    <Fragment>
      {user !== null && (
        <li className="greeting">{`Hi ${user.name.split(' ')[0]}!`}</li>
      )}
      <li>
        <a href="#!" className="bg-darker" onClick={onLogout}>
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>

      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'Contact Keeper',
  icon: 'fas fa-id-card-alt',
};

export default Navbar;
