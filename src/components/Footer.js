import React from 'react'

import gatsby from '../assets/gatsby.png'
import github from '../assets/github.png'

const links = [
  { url: 'https://www.github.com/marykasp', label: 'Github' },
  { url: 'https://www.marykasparian.com/rss.xml', label: 'RSS' }
]

const madeWithLinks = [
  { url: 'https://www.gatsbyjs.org', label: 'Gatsby', icon: gatsby },
  { url: 'https://www.github.com', label: 'Github', icon: github }
]

export default function Footer() {
  return (
    <footer className="footer">
      <section>
        <nav>
          <span className="desktop-only">Made with
            ❤️ by Mary K</span>
            {links.map((link) => (
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                key={link.url}
              >
                {link.label}
              </a>
            ))}
        </nav>
        <nav>
          {madeWithLinks.map((link) => (
            <a
              href={link.url}
              title={link.label}
              target='_blank'
              rel="noopener noreferrer"
              key={link.url}
            >
              <span>{link.label}</span>
              <img src={link.icon} alt={link.label} />
            </a>
          ))}
        </nav>
      </section>
    </footer>
  )
}
