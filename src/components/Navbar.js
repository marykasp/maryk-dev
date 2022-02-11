import { Link } from 'gatsby'
import React from 'react'

import canteloupe from '../assets/Cantaloupe.png'
import avocado from '../assets/Avocado.png'
import blueberry from '../assets/Blueberry.png'
import peach from '../assets/Peach.png'

const mainNavItems = [
  { url: '/', icon: canteloupe, label: 'Home' },
  { url: '/about', icon: avocado, label: 'Me' },
  { url: '/blog', icon: peach, label: 'Blog' },
  { url: '/projects', icon: blueberry, label: 'Projects' },
]

export default function Navbar() {
  return (
    <header className='navigation'>
      <div className="navigation-inner">
        <nav className="brand-section">
          <Link to="/" className="brand">
            <span>Mary K.</span>
          </Link>
        </nav>
        <div>
          <nav>
            {mainNavItems.map((item) => (
              <Link to={item.url} key={item.label} activeClassName="active">
                <img src={item.icon} alt={item.label} />
                <div className="tooltip">{item.label}</div>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
