import React from 'react';
import { List, Item, ButtonDelete } from './List.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <List>
    {contacts.map(contact => (
      <Item key={contact.id}>
        <p>
          {contact.name}: {contact.number}
        </p>
        <ButtonDelete onClick={() => onDeleteContact(contact.id)}>
          Delete
        </ButtonDelete>
      </Item>
    ))}
  </List>
);

export default ContactList;
