import React, { useEffect, useState } from "react";

const AddContact = ({ addContactHandler, props }) => {
  //   const LOCAL_STORAGE_KEY = "contact";
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((values) => ({ ...values, [name]: value }));
  };

  const add = (e) => {
    e.preventDefault();
    if (formData.name === "" && formData.email === "") {
      alert("All the field are mandatory");
    }
    console.log(formData);
    addContactHandler(formData);
    // localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
  };

  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <button className="ui blue button">Add</button>
      </form>
    </div>
  );
};

export default AddContact;
