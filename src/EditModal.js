import React from "react";

function EditModal({ notes, setNotes, editId,setToggle }) {

  console.log(editId)
  const updateHandler = () => {
    setToggle(false)
    const updateNotes = notes.map((elem) => {
    
    
      if (editId === elem.id) {
        return {
          ...elem,
          title: document.getElementById("editTitle").value,
          desc: document.getElementById("editDesc").value,
        }
        
      }
      else{
        return elem
      }
    });
    console.log(updateNotes);
    console.log(editId);
    setNotes(updateNotes)
   
  };
  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="editTitle"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Description
                  </label>
                  <textarea
                    type="textarea"
                    className="form-control"
                    id="editDesc"
                  />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={updateHandler}
                    type="button"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"

                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditModal;
