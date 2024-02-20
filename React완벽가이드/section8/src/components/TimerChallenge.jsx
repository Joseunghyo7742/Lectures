import React from 'react'
import {useState, useRef} from 'react'
import ResultModal from './ResultModal';


function TimerChallenge({title, targetTime}) {
  const dialog= useRef();
  const timer= useRef();

  const [timeRemaining, setTimeRemaining]= useState(targetTime*1000)
  const timerIsActive =timeRemaining >0 && timeRemaining < targetTime*1000

  if(timeRemaining <=0){
    clearInterval(timer.current)
    setTimeRemaining(targetTime*1000)
    dialog.current.open()
  }

  function handleReset(){
    setTimeRemaining(targetTime*1000)
  }
  function handleStart(){
    timer.current= setInterval(()=>{
      setTimeRemaining(prev=> prev-10)
    }, 10)
  }
  function handleStop(){
    dialog.current.open()
    clearInterval(timer.current)

  }
  return (
    <>
    <ResultModal ref={dialog} targetTime={targetTime} remainingTime={timeRemaining} onReset={handleReset}/>
    <section className="challenge">
      <h2>{title}</h2>
      <p className="challenge-time">
        {timeRemaining} second {targetTime >1 ? 's': ''}
      </p>
      <p>
        <button onClick={timerIsActive ? handleStop: handleStart}>
          {timerIsActive ? 'stop': 'start'} Challenge
        </button>
      </p>
      <p className={timerIsActive ? 'active': undefined}>
        {timerIsActive ? 'Time is running ...': ' Timer inactive'}
      </p>
    </section>
    </>
  )
}

export default TimerChallenge