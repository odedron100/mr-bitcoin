export const userService = {
  getUser
}

const gUser = {
  name: "Oded Ron",
  coins: 1000,
  moves: []
}


function getUser() {
  return Promise.resolve(gUser);
}
