import React from 'react'
import twitter from '../assets/nav-twitter.png'
import github from '../assets/nav-github.png'
import mail from "../assets/nav-mail.png"

const links = [
  { url: 'https://www.github.com/marykasp', label: 'Github', icon: github },
  { url: 'https://twitter.com/mary_kasparian', label: 'Twitter', icon: twitter },
  { url: "mailto: kasparian.mary@gmail.com", label: "Send email", icon: mail },
]

export default function Contact() {
  return (
    <div className="container contact">
      <hr />
      <h4>Thank you for reading!</h4>
      <p>Please feel free to reach out if you spot an error, have a suggestion, or want to say hello.</p>
      <div className="contact-buttons">
        <nav>
          {links.map((link) => (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={link.url}
                >
                  {link.label}
                  <img src={link.icon} alt={link.label} />
                </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
