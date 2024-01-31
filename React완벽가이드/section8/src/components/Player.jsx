import { useState } from "react";

export default function Player() {
  const [name,setName]= useState('')
  const [submitted, setSubmitted] = useState(false)
  function handleChange(event){
    setName(event.target.value)
  }
  function handleClick(){
    setSubmitted(true)
  }
  return (
    <section id="player">
      <h2>Welcome {submitted? name: 'unknown entity'}</h2>
      <p>
        <input value={name} type="text" onChange={handleChange} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
