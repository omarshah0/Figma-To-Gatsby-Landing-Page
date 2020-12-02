import React, { useState, useEffect } from "react"
import { Link as ScrollLink } from "react-scroll"
import Logo from "../../assets/Header-Logo.svg"
import "./Header.css"

function Header() {
  const [sticky, setSticky] = useState(false)

  function handleScroll() {
    if (window.scrollY > 100) {
      setSticky(true)
    } else if (window.scrollY < 100) {
      setSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  })

  return (
    <header className={`${sticky && "sticky"}`}>
      <ScrollLink
        to="hero"
        spy={true}
        smooth={true}
        offset={-70}
        duration={300}
      >
        <div className="header__branding">
          <div className="header__branding__logo">
            <Logo />
          </div>
          <div className="header__branding__siteTitle">
            <h1 className="siteTitle">WOODIES</h1>
          </div>
        </div>
      </ScrollLink>
      <div className="header__navigation">
        <nav>
          <ul className="header__navigation__list">
            <li className="header__navigation__list__item">
              <ScrollLink
                activeClass="active"
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
              >
                Home
              </ScrollLink>
            </li>
            <li className="header__navigation__list__item">
              <ScrollLink
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                About Us
              </ScrollLink>
            </li>
            <li className="header__navigation__list__item">
              <ScrollLink
                activeClass="active"
                to="how-it-works"
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
              >
                How it works
              </ScrollLink>
            </li>
            <li className="header__navigation__list__item">
              <ScrollLink
                activeClass="active"
                to="categories"
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
              >
                Categories
              </ScrollLink>
            </li>
            <li className="header__navigation__list__item">
              <ScrollLink
                activeClass="active"
                to="testimony"
                spy={true}
                smooth={true}
                offset={-70}
                duration={300}
              >
                Testimony
              </ScrollLink>
            </li>
          </ul>
        </nav>
        <button className="header__navigation__cta__button">SIGN UP</button>
      </div>
    </header>
  )
}

export default Header
