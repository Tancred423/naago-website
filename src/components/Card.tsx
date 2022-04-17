import React from 'react'
import classes from './Card.module.css'

interface PropsStructure {
  icon: string
  title: string
  description: string
  linkText?: string
  link?: string
}

const Card: React.FC<PropsStructure> = (props) => {
  return (
    <div className={classes.cardWrapper}>
      <div className={classes.card}>
        <div className={classes.left}>
          <img src={props.icon} alt="Icon" />
        </div>
        <div className={classes.right}>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          {props.linkText && props.link ? (
            <a href={props.link} target="_blank" rel="noreferrer">
              {props.linkText}{' '}
            </a>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export default Card
