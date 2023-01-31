import css from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoading } from 'redux/contacts/contact-selectors';
import { deleteContact } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {contacts.length > 0 && (
        <ul className={css.contactList}>
          {contacts.map(({ id, name, number }) => (
            <li key={id} className={css.contactListItem}>
              {name} : {number}
              <button
                disabled={isLoading}
                type="button"
                className={css.contactListItemBtn}
                onClick={() => {
                  const action = deleteContact(id);
                  dispatch(action);
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
