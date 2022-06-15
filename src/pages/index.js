import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


const IndexPage = () =>{
  return (
    <Layout pageTitle="Home Page">
      <p>Here we're going to proove gatsby as an automatic generator of our content.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/icon.png"
      />
    </Layout>
      
  )
}
export default IndexPage