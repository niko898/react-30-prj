import React from "react";
import Contact from "./Contact";
export default function ContactList({ contacts }) {
  const generateRandomImg = () => {
    const types = ["adventurer", "miniavs", "bottts", "avataaars"];
    return types[Math.floor(Math.random() * types.length)];
  };
  return (
    <ul>
      {contacts.map((contact, id) => {
        return (
          <Contact
            key={id}
            icon={`https://api.dicebear.com/7.x/${generateRandomImg()}/svg`}
            firstName={contact.first_name}
            lastName={contact.last_name}
            phoneNr={contact.phone}
          />
        );
      })}
    </ul>
  );
}
