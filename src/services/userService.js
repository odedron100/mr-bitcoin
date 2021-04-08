import { utilService } from './utilService.js';
export const userService = {
  getUser,
  signup,
  addMove
}

const KEY = 'user';
let gUser = {
  name: "Oded Ron",
  coins: 100,
  moves: []
}

// return new Promise((resolve, reject) => {
//   var contactsToReturn = utilService.loadFromStorage(KEY);
//   if (!contactsToReturn || !contactsToReturn.length) {
//     contactsToReturn = contacts;
//   }
//   gContacts = contactsToReturn
//   if (filterBy) {
//     gContacts = filter(filterBy)
//   }
//   utilService.saveToStorage(KEY, gContacts);
//   resolve(sort(gContacts))
// })
function getUser() {
  return Promise.resolve(gUser);
}

function signup(user) {
  gUser = user;
  utilService.saveToStorage(KEY, user);
}

function addMove(contact, amount) {

}
