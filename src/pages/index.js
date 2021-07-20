import * as React from "react";
import Layout from "../components/layout.js"
import * as style from "../components/layout.module.css"



const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
    
    <div className="bio">
      <p> i am a developer from london</p>
    </div>
    <div className="project" >
      <p>Here are my projects</p>
    </div>
    <div className="contact">Contact me on</div>
    </Layout>
  )
}

export default IndexPage
