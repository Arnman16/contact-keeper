import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const { deleteContact, setCurrent, clearCurrent, current } =
    useContext(ContactContext);
  const { _id, name, email, phone, type } = contact;
  const onDelete = () => {
    deleteContact(_id);
  };
  const onEdit = () => {
    setCurrent(contact);
  };
  return (
    <div className="card bg-light">
      <h3 className="text-primary">
        <div>{name} </div>
        <span
          style={{ float: 'right' }}
          className={
            'badge ' +
            (type === 'professional' ? 'badge-success' : 'badge-primary')
          }
        >
          {type.charAt(0).toUpperCase() + type.slice(1)}
        </span>
      </h3>
      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open"> {email}</i>
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone"> {phone}</i>
          </li>
        )}
      </ul>
      <p>
        <button
          className="btn btn-dark btn-sm"
          onClick={current && current._id === _id ? clearCurrent : onEdit}
        >
          {current && current._id === _id ? 'Cancel' : 'Edit'}
        </button>
        <button className="btn btn-danger btn-sm" onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
