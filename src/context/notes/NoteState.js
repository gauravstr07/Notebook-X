import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const notesInitial = [];

  let [notes, setNotes] = useState(notesInitial);

  // GET All Notes
  let getNotes = async () => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0ODI1MGZjMjhkNTNkNDE4ZGUzZWM1In0sImlhdCI6MTY2NTY3NTkzOX0.iCS5_tOuymdcIL4mdwJCFpfmGt2bivf5pgZkvPMN6QE",
      },
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };

  // Add a Note
  let addNote = async (title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0ODI1MGZjMjhkNTNkNDE4ZGUzZWM1In0sImlhdCI6MTY2NTY3NTkzOX0.iCS5_tOuymdcIL4mdwJCFpfmGt2bivf5pgZkvPMN6QE",
      },

      body: JSON.stringify({ title, description, tag }),
    });

   
    const note = await response.json();
    setNotes(notes.concat(note));
   
    
  };

  // Delete a Note
  const deleteNote = async (id) => {
    // API Call
    const response = await fetch(`${host}/api/notes/deleteNote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0ODI1MGZjMjhkNTNkNDE4ZGUzZWM1In0sImlhdCI6MTY2NTY3NTkzOX0.iCS5_tOuymdcIL4mdwJCFpfmGt2bivf5pgZkvPMN6QE",
      },
    });
    const json = response.json();
    console.log(json);

    console.log("Note Deleted " + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0ODI1MGZjMjhkNTNkNDE4ZGUzZWM1In0sImlhdCI6MTY2NTY3NTkzOX0.iCS5_tOuymdcIL4mdwJCFpfmGt2bivf5pgZkvPMN6QE",
      },

      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    let newNotes = JSON.parse(JSON.stringify(notes));

    // Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
