import React from 'react'
import Layout from '../components/Layout'
import Contact from '../components/Contact'
import { graphql } from 'gatsby'

export default function BlogPost({ data }) {
  const post = data.markdownRemark

  return (
    <Layout>
      <article>
        <div className="container">
          <header>
            <div className="post-details">
              <h5>Written by {post.frontmatter.author}</h5>
              <small>{post.frontmatter.date}</small>
              <h1>{post.frontmatter.title}</h1>
              <h3>{post.frontmatter.subtitle}</h3>
            </div>
          </header>
          <div className="post">
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
          </div>
        </div>
      </article>
      <Contact />
    </Layout>
  )
}


export const query = graphql`
  query BlogQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        subtitle
        date(formatString: "MM/DD/YYYY")
        author
      }
    }
  }
`
