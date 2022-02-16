import React from 'react'

const links = [
  { url: 'https://www.github.com/marykasp', label: 'Github' },
  { url: 'https://www.marykasparian.com/rss.xml', label: 'Tweet' },
  { url: "mailto: abc@example.com", label: "Send email"}
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
                </a>
          ))}
        </nav>
      </div>
    </div>
  )
}
