import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'

export default function Blog({ data }) {
  const { posts } = data.blog
  return (
    <Layout>
      <section className="blog-page">
          <header>
            <div className="container">
              <h1>Blog.</h1>
              <p className="description">Thoughts, tutorials, snippets, reference materials, and all resources I've written for my journey through Launch School and beyond.</p>
            </div>
          </header>
          <div className="container">
              {posts.map(post => {
                const { frontmatter, excerpt, id } = post;
                const { title, date, author } = frontmatter;
                return (
                  <div>
                    <div key={id} className="post">
                      <Link to={post.fields.slug} className="post-link">
                      <h2>{title}</h2>
                      </Link>
                      <p>{excerpt}</p>
                    </div>
                    <div className="post-details">
                      <small>
                        Written by <Link to="/about">{author}  </Link>
                      </small>
                      <small>{date}</small>
                    </div>
                  </div>
                )
              })}
          </div>
      </section>

    </Layout>
  )
}

export const pageQuery = graphql`
query MyQuery {
  blog: allMarkdownRemark {
    posts: nodes {
      frontmatter {
        author
        date(formatString: "MM/DD/YYYY")
        title
      }
      excerpt
      id
      fields {
        slug
      }
    }
  }
}
`

