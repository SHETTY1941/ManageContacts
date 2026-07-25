import React from "react";

const ContactList = ({ contacts,onDelete ,onEdit}) => {
  return (
    <div>
      <h2>All Contacts</h2>
      <ul>
        {contacts.map((c) => (
          <li key={c._id}>
            <strong>{c.name}</strong> - <strong>{c.phone}</strong> - <strong>{c.email}</strong>
            <button onClick={()=>onEdit(c)}>Edit</button>
            <button onClick={()=>onDelete(c._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;