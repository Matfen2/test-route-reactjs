import { Link } from "react-router-dom"
import InstantGamingLogo from "../assets/picts/instantGamingLogo.png"

function Header() {
  return (
    <>
      <header>
        <img src={InstantGamingLogo} alt="Instant Gaming Logo" className="img-fluid w-100" />
        <nav className="navbar navbar-expand-lg">
          <ul className="navbar-nav">
            <li className="nav-item"><Link to="/games" className="nav-link">GAMES</Link></li>
            <li className="nav-item"><Link to="/bundle" className="nav-link">BUNDLE</Link></li>
            <li className="nav-item"><Link to="/whislist" className="nav-link">WHISLIST</Link></li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header