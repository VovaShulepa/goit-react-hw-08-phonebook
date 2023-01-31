import { useState } from 'react';
import css from './ContactForm.module.css';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import {
  selectContacts,
  selectIsLoading,
} from 'redux/contacts/contact-selectors';
import { toast } from 'react-toastify';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const contactInList = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactInList) {
      toast.warn(`🔔 Oops... Contact ${name} already in list!`);
      return;
    }
    const contact = {
      name,
      number,
      id: nanoid(),
    };
    dispatch(addContact(contact));
    reset();
    toast.info('New contact was added 👌');
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} autoComplete="off" onSubmit={handleSubmit}>
      <label className={css.formLabel}>
        Name
        <input
          className={css.formName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleInput}
          value={name}
        />
      </label>
      <label className={css.formLabel}>
        Number
        <input
          className={css.formName}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleInput}
          value={number}
        />
      </label>
      <button disabled={isLoading} className={css.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
