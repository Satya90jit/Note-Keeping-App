import React from "react";

function Note({ element, notes, setNotes, setEditId, toggle, setToggle }) {
  
  const handleDelete = (id) => {
    setToggle(false)
    const newNotes = notes.filter((elm) => {
      if (elm.id !== id) {
        return elm;
      }
    });
    setNotes(newNotes);
  };
  const handleEdit = (id) => {
    // setToggle(false)

    notes.filter((elm) => {
      if (elm.id === id) {
        document.getElementById("editTitle").value = elm.title;
        document.getElementById("editDesc").value = elm.desc;
      }
    });
    setEditId(id);
  };

  const handleToggle = (id) => {
    // setToggle(!toggle)
    // console.log(id);
    notes.map((elm) => {
      // elm.toggle = (false)
      // console.log(elm.toggle);

      if (elm.id === id) {
        // console.log("elm matched", elm);
        // console.log(elm.toggle)
        elm.toggle = !elm.toggle;
        // if(elm.toggle=true){
        //   elm.toggle =false
        // }
        // setToggle(!elm.toggle)
        console.log(elm.toggle);
        setToggle(!toggle);
      }
      console.log(notes);
      localStorage.setItem("notes", JSON.stringify(notes));
      
    });
  };
 
  return (
    <>
      <div
        className={
          element.toggle
            ? "bg-warning text-white h-25  w-25 p-3  m-1 position-relative "
            : "bg-danger text-white h-25 w-25 p-3  m-1 position-relative"
        }
      >
        <div className="card-body text-capitalize">
          <h1 className="card-title ">{element.title}</h1> <br />
          <p className="card-text">{element.desc}</p>
          <div
            className="action d-flex w-100 h-25 justify-content-between align-items-center

"
          >
            <div>
              <button
                type="button"
                className="btn btn-dark btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                onClick={() => {
                  handleEdit(element.id);
                }}
              >
                Edit
              </button>
              <button
                className="btn btn-sm btn-info ms-3"
                onClick={() => {
                  handleDelete(element.id);
                }}
              >
                Delete
              </button>
            </div>

            <>
              <div className="form-check">
                <input
                  className="form-check-input p-3 mb-5 mr-3"
                  type="checkbox"
                  defaultValue=""
                  checked={element.toggle}
                  id="flexCheckDefault"
                  onChange={() => {
                    handleToggle(element.id);
                  }}
                />
              </div>
            </>
          </div>
        </div>
      </div>
    </>
  );
}

export default Note;
