import React, { useState, useContext, Fragment, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const { addContact, current, clearCurrent, updateContact } =
    useContext(ContactContext);
  const blankContact = {
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  };
  const [contact, setContact] = useState(blankContact);
  const { name, email, phone, type } = contact;
  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (current) {
      updateContact(contact);
    } else {
      addContact(contact);
    }
    setContact(blankContact);
  };
  const clearAll = () => {
    clearCurrent();
  };
  useEffect(() => {
    if (current) setContact(current);
    else setContact(blankContact);
    // eslint-disable-next-line
  }, [current]);
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <h2 className="text-primary">
          {current ? 'Edit Contact' : 'Add Contact'}
        </h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <input
          type="text"
          placeholder="Phone"
          name="phone"
          value={phone}
          onChange={onChange}
        />
        <h5>Contact Type</h5>
        <input
          type="radio"
          name="type"
          value="personal"
          checked={type === 'personal'}
          onChange={onChange}
        />
        Personal{' '}
        <input
          type="radio"
          name="type"
          value="professional"
          checked={type === 'professional'}
          onChange={onChange}
        />
        Professional
        <input
          type="submit"
          value={current ? 'Save' : 'Add Contact'}
          className="btn btn-primary btn-block"
        />
      </form>
      {current && (
        <button className="btn btn-dark btn-block" onClick={clearAll}>
          Cancel
        </button>
      )}
    </Fragment>
  );
};

export default ContactForm;
