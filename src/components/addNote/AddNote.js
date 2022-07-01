import  {useState } from 'react'
import './addNote.css'

const AddNote = ({handleAddNote}) => {
  const [noteText, setNoteText] = useState('')
  const characterLimit = 200

  const handleChange = (event) => {
    if(characterLimit - event.target.value.length >= 0) {
      setNoteText(event.target.value)
    }
  }

  const handleSaveClick = () => {
    if(noteText.trim().length > 0) {
      handleAddNote(noteText)
      setNoteText('')
    }
  }

  return (
    <div className="note new ">
      <textarea 
        cols="10" 
        rows="8" 
        placeholder="Напишіть щось..."
        value={noteText}
        onChange={handleChange}>
      </textarea>
      <div className="note-footer">
        <small>{characterLimit - noteText.length} символів</small>
        <button className="save" onClick={handleSaveClick}>Зберегти</button>
      </div>
    </div>
  )
}

export default AddNote;