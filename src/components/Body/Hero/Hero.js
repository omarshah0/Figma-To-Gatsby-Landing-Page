import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import HeroLogo from "../../../assets/Hero-Logo.svg"
import "./Hero.css"
function Hero() {
  const data = useStaticQuery(graphql`
    query {
      heroImage: file(relativePath: { eq: "Furniture-Table.png" }) {
        childImageSharp {
          fluid(maxWidth: 568) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <section id="hero">
      <div className="hero__container">
        <div className="hero__description">
          <p className="hero__description_mainTitle">
            Are you looking for <strong>wooden furniture</strong> for your
            place?
          </p>
          <span className="hero__description_subTitle">
            This is the <br />
            Right Place
          </span>
          <button className="hero__description__cta__button">
            Explore Furniture
          </button>
        </div>
        <div className="hero__image">
          <Img
            fluid={data.heroImage.childImageSharp.fluid}
            alt="Furniture Table"
          />
        </div>
        <div className="hero__background__logo">
          <HeroLogo />
        </div>
      </div>
    </section>
  )
}

export default Hero
