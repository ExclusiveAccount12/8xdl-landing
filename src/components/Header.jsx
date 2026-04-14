import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '../content/site'
import Logo8XDL from './Logo'
import './Header.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const closeMenu = () => setIsOpen(false)
  const { brandName, websiteUrl, urls } = siteConfig

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">
            <span className="logo-mark">
              <Logo8XDL size={36} />
            </span>
            <span className="logo-copy">
              <span className="logo-title">{brandName}</span>
              <span className="logo-tag">{websiteUrl.replace('https://', '')}</span>
            </span>
          </Link>

          <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
            <li><Link to={urls.home} onClick={closeMenu}>Home</Link></li>
            <li><a href="/#overview" onClick={closeMenu}>Overview</a></li>
            <li><Link to={urls.features} onClick={closeMenu}>Features</Link></li>
            <li><Link to={urls.permissions} onClick={closeMenu}>Permissions</Link></li>
            <li><Link to={urls.privacy} onClick={closeMenu}>Privacy</Link></li>
            <li><Link to={urls.bugReport} onClick={closeMenu}>Support</Link></li>
            <li>
              <a href="/#download" className="nav-cta" onClick={closeMenu}>
                Get Build
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
