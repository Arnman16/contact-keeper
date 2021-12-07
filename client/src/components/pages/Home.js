import React, { useContext, useEffect } from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactFilter from '../contacts/ContactFilter';
import authContext from '../../context/auth/authContext';

const Home = () => {
  const { loadUser, isAuthenticated } = useContext(authContext);
  useEffect(() => {
    if (!isAuthenticated) loadUser();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="grid-2">
      <div className="card">
        <ContactForm />
      </div>
      <div>
        <ContactFilter />
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
