import { CHANGE_LOGIN, CHANGE_PASSWORD } from '../constants'

const isValidLogin = (login) => {
  return login === 'developer21'
}

const isValidPassword = (password) => {
  return password === '123456'
}

const initialState = {
  login: '',
  password: '',
  isValidLogin: false,
  isValidPassword: false,
}

export const user = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_LOGIN:
      return {
        ...state,
        login: action.login,
        isValidLogin: isValidLogin(action.login),
      }
    case CHANGE_PASSWORD:
      return {
        ...state,
        password: action.password,
        isValidPassword: isValidPassword(action.password),
      }
    default:
      return state
  }
}
