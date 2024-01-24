"use client";
import React from "react";

interface Contact {
  name: string;
  url: string;
}

const Contacts: React.FC = () => {
  const contacts: Contact[] = [
    { name: "Instagram", url: "https://www.instagram.com/" },
    { name: "GitHub", url: "https://github.com/" },
    { name: "LinkedIn", url: "https://www.linkedin.com/" },
  ];

  return (
    <div>
      <h1>Contactos</h1>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <a href={contact.url} target="_blank" rel="noopener noreferrer">
              {contact.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
