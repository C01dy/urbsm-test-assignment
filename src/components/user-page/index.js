import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { CHANGE_LOGIN, CHANGE_PASSWORD } from '../../constants'

const UserPage = ({ login }) => {
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{login}</h1>
      <NavLink
        to='/'
        onClick={() => {
          dispatch({
            type: CHANGE_LOGIN,
            login: '',
          })
          dispatch({
            type: CHANGE_PASSWORD,
            password: '',
          })
        }}>
        Home
      </NavLink>
    </div>
  )
}

export default UserPage
