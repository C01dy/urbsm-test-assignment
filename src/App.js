import { Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import UserPage from './components/user-page'
import AuthForm from './components/auth-form'
import './App.css'

function App() {
  const user = useSelector(({ user }) => user)

  return (
    <div className='container'>
      <Route path='/' exact component={AuthForm} />
      <Route path='/user_page' render={() => <UserPage login={user.login} />} />
    </div>
  )
}

export default App
