import React from 'react'

export function MovesList({moves, toUser}) {
  // formmatedTime(time){

  // }
  return (
    moves && <ul>
      <li>Your moves:</li>
      {moves.map(move=>{
        if (move.contact._id !== toUser._id) {
          return null;
        }

        return (<li>
          <p>{move.contact.name}</p>
          <p>{move.at}</p>
          <p>{move.amount}</p>
        </li>)
      })}
    </ul>
  )
}
