import { CHANGE_LOGIN, CHANGE_PASSWORD } from '../constants'

export const changeLogin = (login) => {
  return {
    type: CHANGE_LOGIN,
    login,
  }
}

export const changePassword = (password) => {
  return {
    type: CHANGE_PASSWORD,
    password,
  }
}
