import React from 'react'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

export default function Blog({ data }) {
  const { posts } = data.blog
  return (
    <Layout>
      <article className="blog-page">
          <header>
            <div className="container">
              <h1>Blog Posts</h1>
              <p className="description">Thoughts, tutorials, snippets, reference materials, and all resources I've written for my journey through Launch School and beyond.</p>
            </div>
          </header>
          <section>
            <div className="container">
              {posts.map(post => {
                const { frontmatter, excerpt, id } = post;
                const { title, date, author } = frontmatter;
                return (
                  <article key={id}>
                    <h2>{title}</h2>
                    <small>{author}, {date}</small>
                    <p>{excerpt}</p>
                  </article>
                )
              })}
          </div>
        </section>
      </article>

    </Layout>
  )
}

export const pageQuery = graphql`
query MyQuery {
  blog: allMarkdownRemark {
    posts: nodes {
      frontmatter {
        author
        date(fromNow: true)
        title
      }
      excerpt
      id
    }
  }
}
`

