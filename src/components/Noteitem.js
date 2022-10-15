import React, { useContext } from "react";
import noteContext from '../context/notes/NoteContext'

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { note } = props;
  const { deleteNote } = context;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        {/* <img src="..." className="card-img-top" alt="..." /> */}
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>

          <i className="far fa-edit mx-2" ></i>
          <i className="far fa-trash-alt mx-2 trash" onClick={() => {deleteNote(note._id)}}></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
