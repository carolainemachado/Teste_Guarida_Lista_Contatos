import React, { useEffect, useState } from 'react';
import { Contact } from '../types/Contact';

interface ContactFormProps {
  onAddContact: (contact: Contact) => void;
  onEditContact: (contact: Contact) => void;
  editContact: Contact | null;
}

const ContactForm: React.FC<ContactFormProps> = ({ onAddContact, onEditContact, editContact }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (editContact) {
      setName(editContact.name);
      setPhone(editContact.phone);
    } else {
      setName('');
      setPhone('');
    }
  }, [editContact]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert('Por favor, preencha todos os campos.');
      return; // Validação simples
    }
    
    if (editContact) {
      onEditContact({ ...editContact, name, phone });
    } else {
      onAddContact({ id: Date.now().toString(), name, phone });
    }
    
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Nome" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Telefone" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
      />
      <button type="submit">{editContact ? 'Salvar' : 'Adicionar Contato'}</button>
    </form>
  );
};

export default ContactForm;
