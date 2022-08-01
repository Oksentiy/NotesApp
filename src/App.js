import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NotesList from './components/notesList/NotesList';
// import AddNoteBtn from './components/addNoteBtn/AddNoteBtn';
import ModalAddNote from './components/modalAddNote/ModalAddNote';
import SearchNote from './components/searchNote/SearchNote';
import Header from './components/header/Header';
import './App.css'

const  App = () => {
  const loadedTodos = localStorage.getItem("notes-data")
  ? JSON.parse(localStorage.getItem("notes-data"))
  : [];

  const [notes, setNotes] = useState(loadedTodos);
 
  useEffect(() => {
    localStorage.setItem(
      'notes-data', 
      JSON.stringify(notes))
  },[notes]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  const addNote = (text) => {
    const date = new Date()
    const NoTimeDate = date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();
    
    const newNote = {
      id: uuidv4(),
      text,
      date: NoTimeDate
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
  }
  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <div className={darkMode && 'dark-mode'}>
      <div className="container" >
        <Header handleToggleDarkMode={setDarkMode}/>
        <SearchNote handleSearchNote={setSearchText}/>
        <div className='notes-contaiter'>
          <button className='btn-create' onClick={openModal}>+</button>
          <NotesList 
            notes={notes.filter((note)=>
              note.text.toLocaleLowerCase().includes(searchText) 
            )} 
            handleDeleteNote={deleteNote}
          />
        </div>
        <ModalAddNote showModal={showModal} setShowModal={setShowModal} handleAddNote={addNote} closeModal={closeModal}/>
      </div>
    </div>
  );
}

export default App;
