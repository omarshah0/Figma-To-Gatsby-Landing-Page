import React from "react"
import Layout from "../components/layout"
import Hero from "../components/Body/Hero/Hero"
import About from "../components/Body/About/About"
import HowItWorks from "../components/Body/HowItWorks/HowItWorks"
import Categories from "../components/Body/Categories/Categories"
import Testimony from "../components/Body/Testimony/Testimony"
const IndexPage = () => (
  <Layout>
    <Hero />
    <About />
    <HowItWorks />
    <Categories />
    <Testimony />
  </Layout>
)

export default IndexPage
