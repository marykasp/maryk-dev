import React from "react"
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

import profile from '../assets/profile-pic.png'
import avocado from '../assets/Avocado.png'
import github from '../assets/github.png'

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata
  return (
    <Layout>
      <article className="hero">
        <header>
          <div className="container">
            <div className="flex-content">
              <div>
                <h1>{title}</h1>
                <h2>{description}</h2>
                <p className="subtitle small">I'm a launch school student in Chicago. Just starting my journey in programming. I love trying new <Link to="/projects">projects</Link> and writing about what I learn. This website is where I keep track of my progress - a collection of the things I've learned throughout my new career journey.</p>
              </div>
              <img src={profile} alt="Me" className="main-image"/>
            </div>
            <p>
              <span>This site is a work in progress...</span>
            </p>
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
            <span>Information</span> <Link to="/blog">View All</Link>
          </h2>
          <p>My site has no ads, no affiliate links, no tracking or analytics, no sponsored posts, and no paywall. My only motivation for this site is to share what I've learned with the world and document notes for myself as I go through the curriculum. Hopefully by documenting my journey I will be able to connect and meet new people along the way.</p>
        </div>
      </article>
    </Layout>
  )
}


export const pageQuery = graphql`
query MetadataQuery {
  site {
    siteMetadata {
      title
      description
    }
  }
}
`
