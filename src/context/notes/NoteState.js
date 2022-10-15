import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
 
  const notesInitial = []

  let [notes, setNotes] = useState(notesInitial);


  // GET All Notes
  let getNotes = async() => {
    // API Call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0ODI1MGZjMjhkNTNkNDE4ZGUzZWM1In0sImlhdCI6MTY2NTY3NTkzOX0.iCS5_tOuymdcIL4mdwJCFpfmGt2bivf5pgZkvPMN6QE",
      }, 
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  };

  // Add a Note
  let addNote = async(title, description, tag) => {
    // API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0ODI1MGZjMjhkNTNkNDE4ZGUzZWM1In0sImlhdCI6MTY2NTY3NTkzOX0.iCS5_tOuymdcIL4mdwJCFpfmGt2bivf5pgZkvPMN6QE",
      },

      body: JSON.stringify({title, description, tag}),
    });
    
    console.log("Adding a new Note");
    let note = {
      " _id": "6348641c0c16fd45a211890e783",
      user: "6348250fc28d53d418de3ec5",
      title: title,
      description: description,
      tag: tag,
      date: "2022-10-13T19:16:44.076Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = (id) => {
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
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0ODI1MGZjMjhkNTNkNDE4ZGUzZWM1In0sImlhdCI6MTY2NTY3NTkzOX0.iCS5_tOuymdcIL4mdwJCFpfmGt2bivf5pgZkvPMN6QE",
      },

      body: JSON.stringify({title, description, tag}),
    });
    const json = response.json();

    // Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element.id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
