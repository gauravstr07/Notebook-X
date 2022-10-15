import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6348641c0c16fd45a8902e783",
      user: "6348250fc28d53d418de3ec5",
      title: "My Life",
      description: "I Love You Akshu😘",
      tag: "#gauakshu",
      date: "2022-10-13T19:16:44.076Z",
      __v: 0,
    },
    {
      _id: "6348641c0c16fd45a89047e783",
      user: "6348250fc28d53d418de3ec5",
      title: "My Family",
      description: "I Love My Family",
      tag: "#everythingwillbeOkey🤗",
      date: "2022-10-13T19:16:44.076Z",
      __v: 0,
    },
    {
        _id: "6348641c0c16fd4895a890e783",
        user: "6348250fc28d53d418de3ec5",
        title: "My Family",
        description: "I Love My Family",
        tag: "#everythingwillbeOkey🤗",
        date: "2022-10-13T19:16:44.076Z",
        __v: 0,
      },
      {
        _id: "6348641c0c16fd45a890e21783",
        user: "6348250fc28d53d418de3ec5",
        title: "My Family",
        description: "I Love My Family",
        tag: "#everythingwillbeOkey🤗",
        date: "2022-10-13T19:16:44.076Z",
        __v: 0,
      },
      {
        _id: "6348641c0c16fd4905a890e783",
        user: "6348250fc28d53d418de3ec5",
        title: "My Family",
        description: "I Love My Family",
        tag: "#everythingwillbeOkey🤗",
        date: "2022-10-13T19:16:44.076Z",
        __v: 0,
      },
  ];

  let [notes, setNotes] = useState(notesInitial);

  // Add a Note
  let addNote = (title, description, tag) => {
    console.log('Adding a new Note')
   let note = {
     " _id": "6348641c0c16fd45a211890e783",
      "user": "6348250fc28d53d418de3ec5",
      "title": title,
      "description": description,
      "tag": tag,
      "date": "2022-10-13T19:16:44.076Z",
      "__v": 0,
    };
    setNotes(notes.concat(note));
  }


  // Delete a Note
  const deleteNote = (id) => {
    
  }

  //Edit a Note
  const editNote = () => {

  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
