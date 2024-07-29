import Input from "./Input";
import Modal from "./Modal";
import React, { useRef } from "react";

const NewProject = ({ onAdd, onCancel }) => {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if(enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === ''){
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    });
  }


  return (
    <section id="new-project">
    <Modal ref={modal} buttonCaption="Okay">
      <h2>Invalid Input</h2>
      <p>Please make sure you provide a valid value for every input field</p>
      <p>Oops ... looks like you forgot to enter a value.</p>
    </Modal>
    <div className="input-content">
      <div>
        <Input type="text" ref={title} label="Title" />
        <Input ref={description} label="Description" isTextArea={true} />
        <Input type="date" ref={dueDate} label="Due Date" />
      </div>

      <menu>
        <li className="cancel">
          <button onClick={onCancel}>Cancel</button>
        </li>
        <li className="save">
        <button onClick={handleSave}>Save</button>
        </li>
      </menu>
    </div>
    </section>
  );
};

export default NewProject;
