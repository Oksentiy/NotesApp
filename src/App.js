import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NotesList from './components/notesList/NotesList';
// import AddNoteBtn from './components/addNoteBtn/AddNoteBtn';
import SearchNote from './components/searchNote/SearchNote';
import Header from './components/header/Header';
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

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=> {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );

    if(savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data', 
      JSON.stringify(notes))
  }, [notes])

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

  // const [openModal, setOpenModal] = useState()

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className="container">
      {/* <AddNoteBtn/> */}
        <Header handleToggleDarkMode={setDarkMode}/>
        <SearchNote handleSearchNote={setSearchText}/>
        <NotesList 
          notes={notes.filter((note)=>
            note.text.toLocaleLowerCase().includes(searchText) 
          )} 
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
}

export default App;
