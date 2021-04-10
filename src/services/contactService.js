import { utilService } from './utilService.js';
export const contactsService = {
  getContacts,
  getContactById,
  deleteContact,
  saveContact,
  getEmptyContact
}

const KEY = 'contact';
var gContacts;

const contacts = [
  {
    "_id": "5a56640269f443a5d64b32ca",
    "img": "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "name": "Ochoa Hyde",
    "email": "ochoahyde@renovize.com",
    "phone": "+1 (968) 593-3824"
  },
  {
    "_id": "5a5664025f6ae9aa24a99fde",
    "img": "https://images.unsplash.com/photo-1557862921-37829c790f19?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "name": "Hallie Mclean",
    "email": "halliemclean@renovize.com",
    "phone": "+1 (948) 464-2888"
  },
  {
    "_id": "5a56640252d6acddd183d319",
    "img": "https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "name": "Parsons Norris",
    "email": "parsonsnorris@renovize.com",
    "phone": "+1 (958) 502-3495"
  },
  {
    "_id": "5a566402ed1cf349f0b47b4d",
    "img": "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "name": "Rachel Lowe",
    "email": "rachellowe@renovize.com",
    "phone": "+1 (911) 475-2312"
  },
  {
    "_id": "5a566402abce24c6bfe4699d",
    "img": "https://images.unsplash.com/photo-1560241804-02b7b1bc9d55?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "name": "Dominique Soto",
    "email": "dominiquesoto@renovize.com",
    "phone": "+1 (807) 551-3258"
  },
  {
    "_id": "5a566402a6499c1d4da9220a",
    "img": "https://images.unsplash.com/photo-1590086782957-93c06ef21604?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "name": "Shana Pope",
    "email": "shanapope@renovize.com",
    "phone": "+1 (970) 527-3082"
  },
  {
    "_id": "5a566402f90ae30e97f990db",
    "img": "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "name": "Faulkner Flores",
    "email": "faulknerflores@renovize.com",
    "phone": "+1 (952) 501-2678"
  },
  {
    "_id": "5a5664027bae84ef280ffbdf",
    "img": "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "name": "Holder Bean",
    "email": "holderbean@renovize.com",
    "phone": "+1 (989) 503-2663"
  },
  {
    "_id": "5a566402e3b846c5f6aec652",
    "img": "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "name": "Rosanne Shelton",
    "email": "rosanneshelton@renovize.com",
    "phone": "+1 (968) 454-3851"
  },
  {
    "_id": "5a56640272c7dcdf59c3d411",
    "img": "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "name": "Pamela Nolan",
    "email": "pamelanolan@renovize.com",
    "phone": "+1 (986) 545-2166"
  },
  {
    "_id": "5a5664029a8dd82a6178b15f",
    "img": "https://images.unsplash.com/photo-1488716820095-cbe80883c496?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "name": "Roy Cantu",
    "email": "roycantu@renovize.com",
    "phone": "+1 (929) 571-2295"
  },
  {
    "_id": "5a5664028c096d08eeb13a8a",
    "img": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fHdvbWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "name": "Ollie Christian",
    "email": "olliechristian@renovize.com",
    "phone": "+1 (977) 419-3550"
  },
  {
    "_id": "5a5664026c53582bb9ebe9d1",
    "img": "https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "name": "Nguyen Walls",
    "email": "nguyenwalls@renovize.com",
    "phone": "+1 (963) 471-3181"
  },
  {
    "_id": "5a56640298ab77236845b82b",
    "img": "https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",

    "name": "Glenna Santana",
    "email": "glennasantana@renovize.com",
    "phone": "+1 (860) 467-2376"
  },
  {
    "_id": "5a56640208fba3e8ecb97305",
    "img": "https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTh8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "name": "Malone Clark",
    "email": "maloneclark@renovize.com",
    "phone": "+1 (818) 565-2557"
  },
  {
    "_id": "5a566402abb3146207bc4ec5",
    "img": "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "name": "Floyd Rutledge",
    "email": "floydrutledge@renovize.com",
    "phone": "+1 (807) 597-3629"
  },
  {
    "_id": "5a56640298500fead8cb1ee5",
    "img": "https://images.unsplash.com/flagged/photo-1574874897534-036671407eda?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "name": "Grace James",
    "email": "gracejames@renovize.com",
    "phone": "+1 (959) 525-2529"
  },
  {
    "_id": "5a56640243427b8f8445231e",
    "img": "https://images.unsplash.com/photo-1577880216142-8549e9488dad?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "name": "Tanner Gates",
    "email": "tannergates@renovize.com",
    "phone": "+1 (978) 591-2291"
  },
  {
    "_id": "5a5664025c3abdad6f5e098c",
    "img": "https://images.unsplash.com/photo-1559548331-f9cb98001426?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzd8fG1hbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "name": "Lilly Conner",
    "email": "lillyconner@renovize.com",
    "phone": "+1 (842) 587-3812"
  }
];

function sort(arr) {
  return arr.sort((a, b) => {
    if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
      return -1;
    }
    if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
      return 1;
    }

    return 0;
  })
}

function getContacts(filterBy = null) {
  return new Promise((resolve, reject) => {
    var contactsToReturn = utilService.loadFromStorage(KEY);
    if (!contactsToReturn || !contactsToReturn.length) {
      contactsToReturn = contacts;
    }
    gContacts = contactsToReturn
    if (filterBy) {
      gContacts = filter(filterBy)
    }
    utilService.saveToStorage(KEY, gContacts);
    resolve(sort(gContacts))
  })

  //   var contactsToReturn = contacts;
  //   if (filterBy) {
  //     contactsToReturn = filter(filterBy)
  //   }
  //   resolve(sort(contactsToReturn))
  // })
}

function getContactById(id) {
  return new Promise((resolve, reject) => {
    const contact = contacts.find(contact => contact._id === id)
    contact ? resolve(contact) : reject(`Contact id ${id} not found!`)
  })
}

function deleteContact(id) {
  // return new Promise((resolve, reject) => {
  //   const index = contacts.findIndex(contact => contact._id === id)
  //   if (index !== -1) {
  //     contacts.splice(index, 1)
  //   }

  //   resolve(contacts)
  // })
  return new Promise((resolve, reject) => {
    const index = gContacts.findIndex(contact => contact._id === id)
    if (index !== -1) {
      gContacts.splice(index, 1)
    }
    utilService.saveToStorage(KEY, gContacts);
    resolve(gContacts)
  })
}

function _updateContact(contact) {
  // return new Promise((resolve, reject) => {
  //   const index = contacts.findIndex(c => contact._id === c._id)
  //   if (index !== -1) {
  //     contacts[index] = contact
  //   }
  //   resolve(contact)
  // })
  return new Promise((resolve, reject) => {
    const index = gContacts.findIndex(c => contact._id === c._id)
    if (index !== -1) {
      gContacts[index] = contact
    }
    utilService.saveToStorage(KEY, gContacts);
    resolve(contact)
  })
}

function _addContact(contact) {
  // return new Promise((resolve, reject) => {
  //   contact._id = _makeId()
  //   contacts.push(contact)
  //   resolve(contact)
  // })
  return new Promise((resolve, reject) => {
    contact._id = _makeId()
    gContacts.push(contact)
    utilService.saveToStorage(KEY, gContacts);
    resolve(contact)
  })
}

function saveContact(contact) {
  return contact._id ? _updateContact(contact) : _addContact(contact)
}

function getEmptyContact() {
  return {
    name: '',
    email: '',
    phone: '',
    img: '',
  }
}

function filter(term) {
  console.log('term', term);
  term.name = term.name.toLocaleLowerCase()
  return contacts.filter(contact => {
    return contact.name.toLocaleLowerCase().includes(term.name) &&
      contact.phone.toLocaleLowerCase().includes(term.phone) &&
      contact.email.toLocaleLowerCase().includes(term.email)
  })
}



function _makeId(length = 10) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}
