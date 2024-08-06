import React from "react";
import ContactCard from "./ContactCard";
import "../App.css";
import { Link } from "react-router-dom";

const ContactList = ({ contacts, removeContactListHandler }) => {
  const deleteContactHandler = (id) => {
    removeContactListHandler(id);
  };

  return (
    <div className="main">
      <div className="ui celled list">
        {contacts.map((val, key) => {
          console.log("🚀 ~ {contacts.map ~ val:", val);
          return (
            <ContactCard
              contactVal={val}
              takingidfromcardhandler={deleteContactHandler}
              key={val.id}
            />
          );
        })}
      </div>
      <Link to="/add">
        <button className="ui button  blue right">Add Contact</button>
      </Link>
    </div>
  );
};

export default ContactList;
