import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <article>
        <header>
          <div className="container">
              <h1>About Me.</h1>
              <p className="description">Software engineer student at Launch School - Ruby Track</p>
          </div>
        </header>
        <section className="container">
          <p>This site was created to share my coding journey experience. To help flesh out the knowledge in my own mind and maybe help a few who are also pushing through the world of tech. My main motivation for this site (besides being a requirement from LS) is to share and document notes for myself, and hopefully connect with other students or developers.</p>
          <p>Check out the <Link to="/projects">projects</Link> page to see the things I have worked on in the past, before deciding to join Launch School. Hoping to add more open-source projects I've made as I continue through the courses.</p>
          <p>This is currently a work in progress. So pages on the site will be updated and things here and there will be fixed. Just wanted to get this deployed to see how things turned out. Thanks for your patience.</p>
          <h3>Currently Working On</h3>
          <p>
            <em>Updated February 11, 2022</em>
          </p>
          <ul>
            <li>
              Cuddling with my pups & a good book
            </li>
            <li>
              Playing FFXIV - almost to Endwalker
            </li>
            <li>
              Finding other video games to enjoy
            </li>
            <li>
              Studying for Launch School RB101 Assessment
            </li>
            <li>
              Writing about my coding journey
            </li>
          </ul>
          <h3>Random Facts</h3>
          <p>Little tidbits about myself <em>(that you don't care to know)</em></p>
          <ul>
            <li>
              I've been interested in coding since fiddling with MySpace
            </li>
            <li>
              I read a lot of fantasy books - favorites are <strong>Name of the Wind</strong>
            </li>
            <li>
              I've worked in genetics research for nearly a decade before deciding ot change careers
            </li>
          </ul>
          <h3>Connect</h3>
          <p>You can contact me by email at <strong>marykasparian@gmail.com</strong> I love meeting new people!</p>
        </section>
      </article>
    </Layout>
  )
}
