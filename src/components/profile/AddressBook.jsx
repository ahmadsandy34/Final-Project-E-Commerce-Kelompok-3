import React, { useState } from "react";
import AddressBookList from "./AddressBookList";
import AddressBookForm from "./AddressBookForm";

const AddressBook = () => {
  const [activeComponent, setActiveComponent] = useState("address-book-list");
  const [isEdit, setIsEdit] = useState(false);

  const handleActiveComponent = (component) => {
    setActiveComponent(component)
  };

  const handleEdit = (index) => {
    setIsEdit(index);
  };

  return (
    <div>
      {activeComponent === "address-book-list" && (
        <AddressBookList setActiveComponent={handleActiveComponent} setIsEdit={handleEdit} isEdit={isEdit} />
      )}
      {activeComponent === "address-book-form" && (
        <AddressBookForm setActiveComponent={handleActiveComponent} isEdit={isEdit} />
      )}
    </div>
  );
};

export default AddressBook;
