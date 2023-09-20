import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Signup from './SignUp'
import Login from './Login'
import Home from './Home'
import { useState } from 'react'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);


  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.removeItem('user');
    window.location.href = '/login';
  };


  return (
    <>
      <BrowserRouter>
        <header>
          <Link className="site-logo">#Habit Tracker</Link>
          <nav>
            {loggedIn ? (
              <>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : null}
            {!loggedIn && (
              <>
                <Link to="/sign-up">SignUp</Link>
                <Link to="/login">Login</Link>
              </>
            )}
          </nav>
        </header>
        <Routes>
          <Route path='/home' element={<Home />} />

          <Route path="/sign-up" element={<Signup handleLogin={handleLogin} />} />

          <Route path="/login" element={<Login handleLogin={handleLogin} />} />


        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
