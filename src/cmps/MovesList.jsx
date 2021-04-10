import React from 'react'
import moment from "moment";

export function MovesList({moves, toUser}) {
  return (
    moves && <ul className="move-list">
     {toUser && <li className="title">Your moves:</li>}
      {moves.map(move=>{
        if(toUser){
          if (move.contact._id !== toUser._id) {
            return null;
          }
        }

        return (<li class="list-item">
          {toUser&&<p>You transfer <span>$ {move.amount}</span> {moment(move.at).fromNow()} to {toUser.name}</p>}
          {!toUser&&<p style={{textAlign: `left`}}>You transfer <span>$ {move.amount}</span> {moment(move.at).fromNow()} to {move.contact.name}</p>}
        </li>)
      })}
    </ul>
  )
}
