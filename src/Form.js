import React, { useState } from "react";
import EditModal from "./EditModal";
import Note from "./Note";

const getItemFromLS = () => {
  const note = JSON.parse(localStorage.getItem("notes"));
  if (note) {
    return note;
  } else {
    return [];
  }
};
function Form() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [toggle, setToggle] = useState(false);
  const [notes, setNotes] = useState(getItemFromLS);

  const [editId, setEditId] = useState("");
  // console.log(notes);

  localStorage.setItem("notes", JSON.stringify(notes));

  const handleOnchangeTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleOnchangeDesc = (e) => {
    setDesc(e.target.value);
  };
  const addNoteHandler = (e) => {
    e.preventDefault();
    if (title !== "" && desc !== "") {
      setNotes((note) => {
        return [
          ...note,
          {
            title: title,
            desc: desc,
            id: new Date().getTime(),
            toggle: false,
          },
        ];
      });
    }
    setDesc("");
    setTitle("");
    setToggle(false);
  };

  return (
    <>
      <form>
        <div className="container shadow mt-5 mb-5 p-5 bg-info">
        <h2 className="text-center m-5">Note Keeping Application</h2>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              aria-describedby="emailHelp"
              value={title}
              onChange={handleOnchangeTitle}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <textarea
              type="textarea"
              className="form-control"
              onChange={handleOnchangeDesc}
              value={desc}
            />
          </div>

          <button
            type="submit"
            onClick={addNoteHandler}
            className="btn btn-primary"
          >
            Add Note
          </button>
        </div>
      </form>

      {notes.length === 0 ? (
        <div className="noNote">
          {" "}
          <h2 className="text-center mt-5 text-danger">
            No notes are availabe.
          </h2>{" "}
        </div>
      ) : (
        <div className="d-flex container  align-items-center justify-content-start flex-wrap ml-5">
          {notes.map((element, id) => {
            return (
              <Note
                element={element}
                key={id}
                notes={notes}
                setNotes={setNotes}
                setEditId={setEditId}
                toggle={toggle}
                setToggle={setToggle}
              />
            );
          })}
        </div>
      )}

      <EditModal
        notes={notes}
        setNotes={setNotes}
        editId={editId}
        setEditId={setEditId}
        toggle={toggle}
        setToggle={setToggle}
      />
    </>
  );
}

export default Form;
