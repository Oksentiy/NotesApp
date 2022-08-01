import  {useState } from 'react'
import './modalAddNote.css'

const ModalAddNote = ({handleAddNote, showModal, setShowModal, closeModal}) => {
  
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
  function two () {
    handleSaveClick()
    closeModal()
  }

  return (  
    <>
      {
        showModal && (
        <>
          <div className="overlay" onClick={closeModal}>
            <div className="note new " onClick={(e) => e.stopPropagation()}>
              <div className='note-top'>
                <textarea 
                  cols="10" 
                  rows="8" 
                  placeholder="Напишіть щось..."
                  value={noteText}
                  onChange={handleChange}>
                </textarea>
                <button className='close-modal-btn' onClick={closeModal}>x</button>
              </div>
                <div className="note-footer">
                  <small>{characterLimit - noteText.length} символів</small>
                  <button className="save-modal-btn" onClick={two} >Зберегти</button>
                </div>   
            </div> 
          </div>
        </>
        )
      }
    
    </>   
      
  )
}

export default ModalAddNote;