import * as React from 'react'
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
// import { graphql,useStaticQuery} from 'gatsby'



const SpecPage = ({url}) => {
  // const data = {'relativePath':"/Spec/"} 
  return (
      
          <SwaggerUI url= {url} />
   
    )
  }
 

export default SpecPage