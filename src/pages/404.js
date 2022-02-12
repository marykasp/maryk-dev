import React from 'react'
import Layout from '../components/Layout'

import moogle from '../assets/moogle-404.png'

export default function NotFound() {
  return (
    <Layout>
      <section className="hero">
        <div className="container">
          <div className='flex-content'>
            <div>
              <h2>Awww...Don't Cry.</h2>
              <p>It's just a 404 Error!</p>
              <p>What you are looking for may have been misplaced in the Moogle Post.</p>
            </div>
            <img src={moogle} alt="Moogle" className="main-image"/>
          </div>
        </div>
      </section>
    </Layout>
  )
}
