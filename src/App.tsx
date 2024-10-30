import React, { useEffect, useState } from 'react';
import './App.css'; // Importando o CSS
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import { Contact } from './types/Contact';

const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>(() => {
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts ? JSON.parse(savedContacts) : [];
  });
  const [editContact, setEditContact] = useState<Contact | null>(null);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (contact: Contact) => {
    setContacts(prev => [...prev, contact]);
  };

  const editExistingContact = (contact: Contact) => {
    setContacts(prev => prev.map(c => (c.id === contact.id ? contact : c)));
    setEditContact(null);
  };

  const deleteContact = (id: string) => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  const startEditing = (contact: Contact) => {
    setEditContact(contact);
  };

  return (
    <div className="container">
      <h1>Lista de Contatos</h1>
      <ContactForm 
        onAddContact={addContact} 
        onEditContact={editExistingContact} 
        editContact={editContact} 
      />
      <ContactList 
        contacts={contacts} 
        onDeleteContact={deleteContact} 
        onEditContact={startEditing} 
      />
    </div>
  );
};

export default App;
