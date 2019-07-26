import React from "react"
import { navigate } from "gatsby";
import Layout from "../components/layout"

const IS_BROWSER = typeof window !== 'undefined'
const IndexPage = () => {
  let temp = true;
  if (IS_BROWSER){
  navigate("/en-ca")
  }
  return (
    <div>
    </div>
  )
}


export default IndexPage
