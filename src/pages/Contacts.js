import React from 'react';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { ContactFilter } from 'components/ContactFilter/ContactFilter';
import { fetchContacts } from 'redux/contacts/operations';
import { selectError, selectIsLoading } from 'redux/contacts/contact-selectors';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1
        style={{
          textShadow: '12px 8px 15px rgb(7 9 126 / 50%)',
          color: '#010111',
        }}
      >
        Phonebook{' '}
        <span role="img" aria-label="Telephone icon">
          ☎️{' '}
        </span>{' '}
      </h1>
      <ContactForm />
      <ContactFilter />
      {(isLoading && !error && (
        <>
          <br />
          <b>Your request is in progress...🔃Please wait 🕰</b>
        </>
      )) || <ContactList />}
    </div>
  );
}
