import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "6348641c0c16fd45a890e783",
      user: "6348250fc28d53d418de3ec5",
      title: "My Life",
      description: "I Love You Akshu😘",
      tag: "#gauakshu",
      date: "2022-10-13T19:16:44.076Z",
      __v: 0,
    },
    {
      _id: "6348641c0c16fd45a890e783",
      user: "6348250fc28d53d418de3ec5",
      title: "My Family",
      description: "I Love My Family",
      tag: "#everythingwillbeOkey🤗",
      date: "2022-10-13T19:16:44.076Z",
      __v: 0,
    },
    {
        _id: "6348641c0c16fd45a890e783",
        user: "6348250fc28d53d418de3ec5",
        title: "My Family",
        description: "I Love My Family",
        tag: "#everythingwillbeOkey🤗",
        date: "2022-10-13T19:16:44.076Z",
        __v: 0,
      },
      {
        _id: "6348641c0c16fd45a890e783",
        user: "6348250fc28d53d418de3ec5",
        title: "My Family",
        description: "I Love My Family",
        tag: "#everythingwillbeOkey🤗",
        date: "2022-10-13T19:16:44.076Z",
        __v: 0,
      },
      {
        _id: "6348641c0c16fd45a890e783",
        user: "6348250fc28d53d418de3ec5",
        title: "My Family",
        description: "I Love My Family",
        tag: "#everythingwillbeOkey🤗",
        date: "2022-10-13T19:16:44.076Z",
        __v: 0,
      },
  ];

  const [notes, setNotes] = useState(notesInitial);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
