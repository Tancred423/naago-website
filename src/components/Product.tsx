import React from 'react'
import classes from './Product.module.css'

const Product: React.FC = () => {
  return (
    <div className={classes.product}>
      <h2>The Bot</h2>
      <p>
        The main feature of this bot is the character profile. Here you can see
        various information, statistics, your job's level, your equipment and
        glamour, your attributes and a custom page for custom Social Media
        links!
      </p>
      <div className={classes.box}>
        <img src="./box-custom.png" alt="Box" />
      </div>
      <div className={classes.line}>
        <img src="./line.svg" alt="Line Illustration" />
      </div>
    </div>
  )
}

export default Product
