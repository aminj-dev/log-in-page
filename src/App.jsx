import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Links } from './components/Links'
import { SignUp } from './pages/SignUp'
import { LogIn } from './pages/LogIn'
import { Dashboard } from './pages/Dashboard'

function App() {
  return (
    <Router>
      <Links/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </Router>

  )
}

export default App
