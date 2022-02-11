import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/Layout'

import profile from '../assets/profile-pic.png'
import avocado from '../assets/Avocado.png'
import github from '../assets/github.png'

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <header>
          <div className="container">
            <div className="flex-content">
              <div>
                <h2>Hey, I'm Mary.</h2>
                <h3>Student Developer</h3>
                <p className="subtitle small">I'm a launch school student in Chicago. Just starting my journey in programming. I love trying new <Link to="/projects">projects</Link> and writing about what I learn. This website is where I keep track of my progress - a compendium of the things I've learned on my new career journey.</p>
              </div>
              <img src={profile} alt="Me" className="main-image"/>
            </div>
            <p className="hero-buttons">
              <Link to="/about" className="hero-button">
                <img src={avocado} alt="Me" />
                About me
              </Link>
              <a
                href="https://github.com/marykasp"
                target="_blank"
                rel="noreferrer"
                className="hero-button"
                >
                  <img src={github} alt="Github" />
                  Github
              </a>
            </p>
          </div>
        </header>

        <div className="container">
          <h2 className="main-header">
            <span>Latests Posts</span> <Link to="/blog">View All</Link>
          </h2>

        </div>
      </section>
    </Layout>
  )
}
