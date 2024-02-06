import React from 'react'
import {useState} from 'react'
function TimerChallenge({title, targetTime}) {

  const [timerExpired, setTimerExpired]= useState(false)
  const [timerStarted,setTimerStarted]=useState(false)

  let timer;
  
  function handleStart(){
    timer= setTimeout(()=>{setTimerExpired(true)}, targetTime*1000)
    setTimerStarted(true)
  }
  function handleStop(){
    clearTimeout(timer)
    // setTimerStarted(false)
    // setTimerExpired(false)
  }
  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You lost</p>}
      <p className="challenge-time">
        {targetTime} second {targetTime >1 ? 's': ''}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop: handleStart}>
          {timerStarted ? 'stop': 'start'} Challenge
        </button>
      </p>
      <p className={timerStarted ? 'active': undefined}>
        {timerStarted ? 'Time is running ...': ' Timer inactive'}
      </p>
    </section>
  )
}

export default TimerChallenge