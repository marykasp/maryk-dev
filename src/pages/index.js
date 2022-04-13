import React from "react"
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGamepad, faBook, faCode, faMicroscope } from '@fortawesome/free-solid-svg-icons'
import { Helmet } from "react-helmet"


import profile from '../assets/profile-pic.png'
import avocado from '../assets/Avocado.png'
import github from '../assets/github.png'
import watermelon from '../assets/Watermelon.png'

export default function Home({ data }) {
  const { title, description } = data.site.siteMetadata
  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mary Kasparian | Blog</title>
      </Helmet>
      <article className="hero">
        <header>
          <div className="container">
            <div className="flex-content">
              <div>
                <h1>{title}</h1>
                <h2>{description}</h2>
                <p className="subtitle small">I'm a Software Engineer student in Chicago. Just starting my journey in programming. I love trying new <Link to="/projects">projects</Link> and writing about what I learn. This website is where I keep track of my progress - a collection of the things I've learned throughout my new career journey.</p>
              </div>
              <div class="profile-area">
                <div class="outer-circle">
                  <span><FontAwesomeIcon icon={faGamepad}/></span>
                  <span><FontAwesomeIcon icon={faCode}/></span>
                  <span><FontAwesomeIcon icon={faBook}/></span>
                  <span><FontAwesomeIcon icon={faMicroscope}/></span>
                </div>
                <div class="inner-circle">
                  <img src={profile} alt="me" class="main-image"></img>
                </div>
            </div>
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
            <span>Information</span> <Link to="/blog">View All</Link>
          </h2>
          <div className='flex-content'>
            <img src={watermelon} alt="watermelon" width="60" height="60"/>
            <p className="description">My motivation for this site is to share what I've learned with the world and document notes for myself as I learn programming. I also love to read and listen to podcasts, so you may also find blog posts on my other interests as well. Hopefully by documenting my journey and sharing my interests I will be able to connect and meet new people along the way.</p>
          </div>
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
