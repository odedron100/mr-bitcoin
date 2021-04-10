// import { utilService } from './utilService.js';
export const userService = {
  getLoggedInUser,
  signup,
  updateUser
  // addMove,
  // updateUserAmount
}

const KEY = 'loggedinUser';
// let gUser = {
//   name: "Oded Ron",
//   coins: 100,
//   moves: []
// }

function getLoggedInUser() {
  const user = sessionStorage.getItem(KEY)
  console.log('user', user);
  return JSON.parse(user)
}

// function addMove(amount,contact) {
//   var user = JSON.parse(sessionStorage.getItem(KEY))
//   const userWithNewMove = {...user,moves:[...user.moves,{at:new Date(), amount,contact}]}
//   sessionStorage.setItem(KEY,JSON.stringify(userWithNewMove))
//   return userWithNewMove;
// }

function signup(user) {
  // utilService.saveToStorage(KEY, user);
  sessionStorage.setItem(KEY, JSON.stringify(user))
}

// function updateUserAmount(amount) {
//   var user = JSON.parse(sessionStorage.getItem(KEY))
//   const newUserAmount = user.coins-amount;
//   user = {...user,coins:newUserAmount}
//   sessionStorage.setItem(KEY,JSON.stringify(user))
//   return user
// }

function updateUser(amount, contact) {
  var user = JSON.parse(sessionStorage.getItem(KEY))
  user.coins = user.coins - amount;
  const today = new Date();
  user.moves.unshift({ at: today.toISOString(), amount, contact })
  sessionStorage.setItem(KEY, JSON.stringify(user))
  return user
}
