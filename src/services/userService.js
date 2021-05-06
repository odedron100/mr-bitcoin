// import { utilService } from './utilService.js';
export const userService = {
  getLoggedInUser,
  signup,
  updateUser
}

const KEY = 'loggedinUser';

function getLoggedInUser() {
  const user = sessionStorage.getItem(KEY)
  console.log('user', user);
  return JSON.parse(user)
}


function signup(user) {
  sessionStorage.setItem(KEY, JSON.stringify(user))
}

function updateUser(amount, contact) {
  var user = JSON.parse(sessionStorage.getItem(KEY))
  user.coins = user.coins - amount;
  const today = new Date();
  user.moves.unshift({ at: today.toISOString(), amount, contact })
  sessionStorage.setItem(KEY, JSON.stringify(user))
  return user
}
