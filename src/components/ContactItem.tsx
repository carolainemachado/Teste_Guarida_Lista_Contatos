import React from 'react';
import { Contact } from '../types/Contact';

interface ContactItemProps {
  contact: Contact;
  onDelete: (id: string) => void;
  onEdit: (contact: Contact) => void;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact, onDelete, onEdit }) => {
  return (
    <li>
      <span>{contact.name} - {contact.phone}</span>
      <div>
        <button className="edit-button" onClick={() => onEdit(contact)}>Editar</button>
        <button onClick={() => onDelete(contact.id)}>Remover</button>
      </div>
    </li>
  );
};

export default ContactItem;
