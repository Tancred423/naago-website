import React from 'react'
import classes from './Finisher.module.css'

function inviteNaago(event: React.MouseEvent<HTMLButtonElement>) {
  event.preventDefault()
  window.location.href = 'http://naago.tanc.red'
}

function joinSupportServer(event: React.MouseEvent<HTMLButtonElement>) {
  event.preventDefault()
  window.location.href = 'http://support.servant.gg'
}

const Finisher: React.FC = () => {
  return (
    <div className={classes.finisherWrapper}>
      <div className={classes.finisher}>
        <div className={classes.content}>
          <h3>Let's get started</h3>
          <p>
            Explore all features of M'naago and setup automated news in just a
            minute.
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
      </div>
    </div>
  )
}

export default Finisher
