import * as React from 'react'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'

const AboutPage = ({data}) =>{
    return(
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <MDXRenderer>
                {data.mdx.body}
            </MDXRenderer>
            </Layout>
    )
}
export const query = graphql`
query ($id: String) {
    mdx(id: {eq: $id}, frontmatter: {meta: {eq: "content"}}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default AboutPage