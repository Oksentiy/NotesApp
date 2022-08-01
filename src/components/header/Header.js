import './header.css'

const Header = ({handleToggleDarkMode}) => {
  return(
    <div className="header">
      <h1>Нотатки</h1>
      <button 
        onClick={() => 
          handleToggleDarkMode(
            (previousDarkMode) => !previousDarkMode
          )
        } 
        className="day-night-btn">день/ніч</button>
    </div>
  )
}
export default Header;