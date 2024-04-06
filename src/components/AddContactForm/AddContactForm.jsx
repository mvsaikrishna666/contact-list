import React, { useState } from "react";
import "./AddContactForm.css";
const AddContactForm = () => {
  const [contact, setContact] = useState({
    firstname: "",
    phn: "",
  });
  const [query, setQuery] = useState("");
  const [contactList, setContactList] = useState([
    {
      firstname: "sai",
      phn: "12345",
      id: 1,
    },
    {
      firstname: "satya",
      phn: "12328092",
      id: 2,
    },
    {
      firstname: "krishna",
      phn: "987098235",
      id: 3,
    },
  ]);

  const filteredList = query
    ? contactList.filter((item) => {
        if (item.firstname.includes(query) || item.phn.includes(query)) {
          return item;
        }
      })
    : contactList;
  console.log(contactList);
  const [editMode, setEditMode] = useState(false);
  const [editID, setEditID] = useState(0);

  function handleEdit(editingContact) {
    setEditID(editingContact.id);
    setEditMode(true);
    setContact({
      firstname: editingContact.firstname,
      phn: editingContact.phn,
    });
  }

  function closeEdit() {
    setContact({ firstname: "", phn: "" });
    setEditMode(false);
    setEditID(0);
  }
  function handleAdd() {
    if (editMode) {
      const newList = contactList.map((item) => {
        if (item.id === editID) return { ...item, ...contact };
        return item;
      });
      setContactList(newList);
      closeEdit();
    } else {
      setContactList([
        ...contactList,
        { ...contact, id: contactList.length + 1 },
      ]);
      setContact({ firstname: "", phn: "" });
    }
  }

  function handleDelete(contactID) {
    console.log("clicked delete");
    const newList = contactList.filter((item) => {
      if (item.id !== contactID) return item;
    });
    setContactList(newList);
  }

  // console.log(contact);
  //   const details = {
  //     name: "sai",
  //     age: 24,
  //     address: {
  //       city: "pune",
  //       pincode: "16498",
  //       locality: {
  //         streetname: "asdfg",
  //         lane: 12,
  //       },
  //     },
  //   };
  //   console.log(details);
  return (
    <div className="add-contact-form-wrapper">
      <div className="add-contact-fields">
        <input
          id="firstname"
          value={contact.firstname}
          placeholder="First Name"
          className="add-contact-form-input"
          onChange={(event) => {
            setContact({ ...contact, firstname: event.target.value });
          }}
        />
        <input
          id="phn"
          placeholder="Phone Number"
          className="add-contact-form-input"
          value={contact.phn}
          onChange={(event) =>
            setContact({ ...contact, phn: event.target.value })
          }
        />
        <button className="add-btn" onClick={() => handleAdd()}>
          {editMode ? "Save Changes" : "Add"}
        </button>
        {editMode && <button onClick={() => closeEdit()}>Cancel</button>}
      </div>
      <div className="line"></div>
      <div className="contact-list-wrapper">
        <input
          className="add-contact-form-input"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search..."
        />
        {filteredList.map((item) => (
          <div className="contact-item" key={item.id}>
            <p className="contact-name">
              {item.firstname} - {item.phn}
            </p>
            <div>
              <button className="contact-btns" onClick={() => handleEdit(item)}>
                Edit
              </button>
              <button
                className="contact-btns"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddContactForm;
