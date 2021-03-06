import Note from "../note/Note";
import AddNote from "../addNote/AddNote";

import './notesList.css'

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note 
          id={note.id} 
          key={note.id}
          text={note.text} 
          date={note.data}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      
      <AddNote handleAddNote={handleAddNote}/>
    </div>
    
  )
}

export default NotesList;