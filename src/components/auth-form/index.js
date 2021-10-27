import { useDispatch, useSelector } from 'react-redux'
import debounce from 'lodash.debounce'
import './style.css'
import { CHANGE_LOGIN, CHANGE_PASSWORD } from '../../constants'
import { NavLink } from 'react-router-dom'

const AuthForm = () => {
  const user = useSelector(({ user }) => user)

  const dispatch = useDispatch()

  const onLoginChange = (login) => {
    const debounced = debounce(() => {
      dispatch({
        type: CHANGE_LOGIN,
        login,
      })
    }, 40)

    debounced()
  }

  const onPasswordChange = (password) => {
    const debounced = debounce(() => {
      dispatch({
        type: CHANGE_PASSWORD,
        password,
      })
    }, 40)

    debounced()
  }

  return (
    <form id='auth-form'>
      <input
        onChange={(e) => onLoginChange(e.target.value)}
        value={user.login}
        className='auth-form__input auth-form__control'
        type='text'
        placeholder='Login'
      />
      <input
        onChange={(e) => onPasswordChange(e.target.value)}
        value={user.password}
        className='auth-form__input auth-form__control'
        type='text'
        placeholder='Password'
      />

      <NavLink to='/user_page'>
        <button
          className='auth-form__submit-btn auth-form__control'
          disabled={!user.isValidLogin || !user.isValidPassword}>
          Login
        </button>
      </NavLink>
    </form>
  )
}

export default AuthForm
