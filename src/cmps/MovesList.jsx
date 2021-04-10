import React from 'react'
import moment from "moment";

export function MovesList({moves, toUser}) {
  return (
    moves && <ul className="move-list">
      <li className="title">Your moves:</li>
      {moves.map(move=>{
        if (move.contact._id !== toUser._id) {
          return null;
        }

        return (<li class="list-item">
          {/* <p>{moment(move.at).fromNow()}</p> */}
          <p>You transfer <span>$ {move.amount}</span> {moment(move.at).fromNow()} to {toUser.name}</p>
        </li>)
      })}
    </ul>
  )
}
