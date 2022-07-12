import React from "react";
import { MdSearch } from "react-icons/md";
import './searchNote.css'

const SearchNote = () => {
  return <div className="search">
    <MdSearch className="search-icons" size='1.3rem'/>
    <input type="text" placeholder="Напишіть щось, щоб знайти..."/>
  </div>
}

export default SearchNote;