import React from 'react'
import Layout from '../components/Layout'

export default function About() {
  return (
    <Layout>
      <article>
        <header>
          <div className="container">
              <h1>About Me.</h1>
              <p className="description">Software engineer student at Launch School (Ruby Track) & Front End Developer Student at Skillcrush</p>
          </div>
        </header>
        <section className="container">
          <p>This site was created to share my coding journey experience. To help flesh out the knowledge in my own mind and maybe help a few who are also pushing through the world of tech. My main motivation for this site is to share and document notes for myself, and hopefully connect with other students or developers.</p>
          <p>Check out my <a href="https://github.com/marykasp"> Github </a> page to see the things I have worked on in the past, before deciding to join Launch School & Skillcrush. Hoping to add more open-source projects I've made as I continue through the courses.</p>
          <p>A little about myself for those who are curious: I used to work as a research scientist in a <strong>Genetics</strong> lab for nearly a decade. Before that I worked as a chemist before realizing my passion was more in the medical field. So I spent more time in school and moved on to working in a biology lab in Chicago.</p>
          <p>Fast forward to the present and I have decided to switch careers again. Maybe third time is a charm? We shall see, so I found myself taking the plunge and subscribing to Launch School Program the beginning of 2022. At the same time I also decided to continue my journey through Skillcrush since I paused it many years ago not having time. About a month later into both programs and I am finally here to share what I have learned. </p>

          <h3>Currently Enjoying</h3>
          <p>
            <em>Updated April 26, 2022</em>
          </p>
          <ul>
            <li>
              Cuddling with my dogs & a good book
            </li>
            <li>
              Finding puzzle solving or cozy video games to enjoy
            </li>
            <li>
              Studying for Launch School RB109 Interview Assessment (had to take a pause)
            </li>
            <li>
              Having fun coding small JS projects
            </li>
            <li>
              Diving into patch 6.1 in FFXIV - ???? to fellow nerds!
            </li>
          </ul>
          <h2>Random Facts</h2>
          <p>Little tidbits about myself <em>(that you don't care to know)</em></p>
          <ul>
            <li>
              I've been interested in coding since fiddling with MySpace
            </li>
            <li>
              I read a lot of fantasy books - one of my all time favorites is  <a href="https://www.goodreads.com/book/show/186074.The_Name_of_the_Wind" target="_blank" rel="noreferrer">Name of the Wind</a>
            </li>
            <li>
              I've worked in genetics research for nearly a decade before deciding to change careers
            </li>
            <li>
              I used to be a tap dancer and I try to dabble in that in my free time
            </li>
          </ul>
          <h2>Connect</h2>
          <p>You can contact me by email at <strong>kasparian.mary@gmail.com</strong> I love meeting new people!</p>
        </section>
      </article>
    </Layout>
  )
}
