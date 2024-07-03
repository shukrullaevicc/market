import { NavLink } from "react-router-dom"
import './Nav.css'

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><NavLink to="/">Home</NavLink></li>
        <li className="nav-item"><NavLink to="/favourite">Favourite</NavLink></li>
        <li className="nav-item"><NavLink to="/auth">Login/Signup</NavLink></li>
      </ul>
    </nav>
  )
}

export default Nav