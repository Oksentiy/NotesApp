import Note from "../note/Note";
import './notesList.css'

const NotesList = ({ notes, date, handleDeleteNote }) => {
  return (
    <div className="notes-list">
      {notes.map((note) => (
        <Note 
          id={note.id} 
          key={note.id}
          text={note.text} 
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
    </div>
    
  )
}

export default NotesList;