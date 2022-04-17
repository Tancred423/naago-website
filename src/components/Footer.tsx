import React from 'react'
import classes from './Footer.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      &copy; {new Date().getFullYear()} Tancred
    </footer>
  )
}

export default Footer
