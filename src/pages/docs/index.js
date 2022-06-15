import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, Link } from 'gatsby'

const Doc = ({ data }) => {
    return (
        <Layout pageTitle="API Reference">
    <ul>
    {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2><Link to={`../docs/${node.slug}`}>
                {node.frontmatter.title}
                </Link>
            </h2>
          </article>
        ))
      }
      </ul>
        </Layout>
    )
}
export const query = graphql`
  query {
    allMdx{
      nodes {
        frontmatter {
          title
        }
        id
        slug
      }
    }
  }
`

export default Doc