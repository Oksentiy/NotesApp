import AddNote from "../addNote/AddNote";

function AddNoteBtn ()  {
  return (
    <>
      <button className="btn-create" onClick={AddNote}>+</button>
    </>
  )
}
export default AddNoteBtn;