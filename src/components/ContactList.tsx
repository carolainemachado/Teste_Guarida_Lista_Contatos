import React from 'react';
import { Contact } from '../types/Contact';
import ContactItem from './ContactItem';

interface ContactListProps {
  contacts: Contact[];
  onDeleteContact: (id: string) => void;
  onEditContact: (contact: Contact) => void;
}

const ContactList: React.FC<ContactListProps> = ({ contacts, onDeleteContact, onEditContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem 
          key={contact.id} 
          contact={contact} 
          onDelete={onDeleteContact} 
          onEdit={onEditContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
