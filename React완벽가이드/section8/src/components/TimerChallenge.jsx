import React from 'react'
import {useState, useRef} from 'react'
import ResultModal from './ResultModal';


function TimerChallenge({title, targetTime}) {
  const dialog= useRef();
  const timer= useRef();
  const [timerExpired, setTimerExpired]= useState(false)
  const [timerStarted,setTimerStarted]=useState(false)

  
  function handleStart(){
    timer.current= setTimeout(()=>{
      setTimerExpired(true);
      dialog.current.showModal();
    }, targetTime*1000)
    setTimerStarted(true)
  }
  function handleStop(){
    clearTimeout(timer.current)
    // setTimerStarted(false)
    // setTimerExpired(false)
  }
  return (
    <>
    <ResultModal ref={dialog} targetTime={targetTime} result="lost"/>
    <section className="challenge">
      <h2>{title}</h2>
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
    </>
  )
}

export default TimerChallenge