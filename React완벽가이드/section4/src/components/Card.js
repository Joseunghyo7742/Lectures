import React from 'react';
import './Card.css';
function Card(props) {
  return <li className="concept">
          <img src={props.img} alt="TODO: TITLE" />
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </li>
}

export default Card;
