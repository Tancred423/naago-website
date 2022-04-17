import React from 'react'
import classes from './Welcome.module.css'

function inviteNaago(event: React.MouseEvent<HTMLButtonElement>) {
  event.preventDefault()
  window.location.href = 'http://naago.tanc.red'
}

function joinSupportServer(event: React.MouseEvent<HTMLButtonElement>) {
  event.preventDefault()
  window.location.href = 'http://support.servant.gg'
}

const Welcome: React.FC = () => {
  return (
    <div className={classes.welcome}>
      <div className={classes.left}>
        <h1>M'naago</h1>
        <p>
          A Final Fantasy XIV Discord Bot, that can...
          <ul>
            <li>... post any character's Lodestone information.</li>
            <li>... post Lodestone news.</li>
            <li>... post FFXIV maintenances.</li>
            <li>... post Kaiyoko's fashion report solutions.</li>
          </ul>
        </p>
        <div className={classes.buttons}>
          <button className={classes.btn} onClick={inviteNaago}>
            <span>Get M'naago</span>
          </button>
          <button className={classes.btn} onClick={joinSupportServer}>
            <span>Join Support Server</span>
          </button>
        </div>
      </div>
      <div className={classes.right}>
        <img src="./naago-cut.png" alt="M'naago" />
      </div>
    </div>
  )
}

export default Welcome
