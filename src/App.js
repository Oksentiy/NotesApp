import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NotesList from './components/notesList/NotesList';

import './App.css'

const  App = () => {
  const [notes, setNotes] = useState([
    {
      id: uuidv4(),
      text: "То є моя перша замітка!",
      date: '01/08/2022'
    },
    {
      id: uuidv4(),
      text: "То є моя друга замітка!",
      date: '01/08/2022'
    }
  ]);

  const addNote = (text) => {
    const date = new Date()
    const newNote = {
      id: uuidv4(),
      text,
      date: date.toLocaleTimeString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className="container">
      <NotesList 
        notes={notes} 
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
}

export default App;
