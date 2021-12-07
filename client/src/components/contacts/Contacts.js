import React, { useContext, Fragment, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';
import ContactItem from './ContactItem';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Spinner from '../layout/Spinner';

const Contacts = () => {
  const { contacts, filtered, getContacts, loading } =
    useContext(ContactContext);
  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);

  if (contacts && !contacts.length) {
    return <h4>Please add a contact</h4>;
  }
  return (
    <Fragment>
      {contacts && !loading ? (
        <TransitionGroup>
          {(filtered ? filtered : contacts).map((contact) => (
            <CSSTransition key={contact._id} timeout={300} classNames="item">
              <ContactItem key={contact._id} contact={contact}></ContactItem>
            </CSSTransition>
          ))}
        </TransitionGroup>
      ) : (
        <Spinner />
      )}
    </Fragment>
  );
};

export default Contacts;
