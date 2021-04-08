import { userService } from '../../services/userService';
export function spendBalance(spendAmount) {
  return async dispatch => {
    // Update the userService
    dispatch({ type: 'SPEND_BALANCE', spendAmount })
  }
}
  export function setUser(user) {
    console.log('hi');
    return async dispatch => {
      const userToSave = { ...user, coins: 100, moves: [] }
      const userAfterSave = await userService.signup(userToSave)
      dispatch({ type: 'SET_USER', userAfterSave })
    }
  }
