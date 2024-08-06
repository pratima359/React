import { useEffect, useState } from "react";
import "./App.css";
import AddContact from "./components/AddContact";
import ContactList from "./components/ContactList";
import Header from "./components/Header";
import { v4 as uuid } from "uuid";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactDetail from "./components/ContactDetail";

function App() {
  const LOCAL_STORAGE_KEY = "contact";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) //get the localStoragedata
  );

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  // set saved localdata
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  //remove the list
  const removeContactListHandler = (id) => {
    const removeContactList = contacts.filter((vals) => {
      return vals.id !== id;
    });
    setContacts(removeContactList);
  };

  return (
    <div className="ui container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            exact
            Component={() => (
              <ContactList
                contacts={contacts}
                removeContactListHandler={removeContactListHandler}
              />
            )}
          />
          <Route
            path="/add"
            Component={() => (
              <AddContact addContactHandler={addContactHandler} />
            )}
          />
          <Route path="/contact/:id" Component={ContactDetail} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
