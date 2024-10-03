import { useContext, useState } from 'react'
import Brightness2Icon from '@mui/icons-material/Brightness2'
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { ThemeContext } from '../../contexts/theme'
import { projects, skills } from '../../portfolio'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const [showNavList, setShowNavList] = useState(false)
  const [snackbarOpen, setSnackbarOpen] = useState(false)

  const toggleNavList = () => setShowNavList(!showNavList)

  const handleThemeToggle = () => {
    setSnackbarOpen(false) // Close snackbar if it's open
    toggleTheme() // Toggle the theme
    setTimeout(() => {
      setSnackbarOpen(true) // Reopen snackbar after theme toggle
    }, 0) // Open Snackbar after a short delay
  }

  const handleSnackbarClose = () => {
    setSnackbarOpen(false)
  }

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {projects.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Projects
            </a>
          </li>
        ) : null}

        {skills.length ? (
          <li className='nav__list-item'>
            <a
              href='#skills'
              onClick={toggleNavList}
              className='link link--nav'
            >
              Skills
            </a>
          </li>
        ) : null}
      </ul>

      <div className='theme-switch'>
        <input 
          type='checkbox' 
          id='theme-toggle' 
          className='theme-switch-input' 
          onChange={handleThemeToggle} 
          checked={themeName === 'dark'} 
          aria-label='toggle theme'
        />
        <label 
          htmlFor='theme-toggle' 
          className='theme-switch-label'>
          <span className='theme-slider'></span>
        </label>
        {" "}
        {themeName === 'dark' ? <Brightness2Icon /> : <WbSunnyRoundedIcon style={{color:'F99245'}}/>}
      </div>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={800} // Snackbar hides after 3 seconds
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center'}}
      >
        <Alert onClose={handleSnackbarClose} severity="info" sx={{ width: '100%' }} color="success">
          {themeName === 'dark' ? 'Dark theme is enabled' : 'Light theme is enabled'}
        </Alert>
      </Snackbar>
    </nav>
  )
}

export default Navbar
