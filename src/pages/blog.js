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
                const { frontmatter, id } = post;
                const { title, date} = frontmatter;
                return (
                  <div className="posts">
                    <Link to={post.fields.slug} className="post">
                      <span key={id} className="flex flex-align-center flex-justify-between">
                        <h3>{title}</h3>
                        <span className="new-badge"></span>
                        <div>
                          <time className="post-date">{date}</time>
                        </div>
                      </span>
                    </Link>
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
        date(formatString: "dddd DD MMMM YYYY")
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

