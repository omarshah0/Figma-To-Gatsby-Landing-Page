import React from "react"
import { Link } from "gatsby"
import Logo from "../../assets/Header-Logo.svg"
import "./Header.css"

function Header() {
  return (
    <header>
      <Link to="/">
        <div className="header__branding">
          <div className="header__branding__logo">
            <Logo />
          </div>
          <div className="header__branding__siteTitle">
            <h1 className="siteTitle">WOODIES</h1>
          </div>
        </div>
      </Link>
      <div className="header__navigation">
        <nav>
          <ul className="header__navigation__list">
            <li className="header__navigation__list__item">
              <Link to="/" activeClassName="active">
                Home
              </Link>
            </li>
            <li className="header__navigation__list__item">
              <Link to="#about" activeClassName="active">
                About Us
              </Link>
            </li>
            <li className="header__navigation__list__item">
              <Link to="#how-it-works" activeClassName="active">
                How it works
              </Link>
            </li>
            <li className="header__navigation__list__item">
              <Link to="#categories" activeClassName="active">
                Categories
              </Link>
            </li>
            <li className="header__navigation__list__item">
              <Link to="#testimony" activeClassName="active">
                Testimony
              </Link>
            </li>
          </ul>
        </nav>
        <button className="header__navigation__cta__button">SIGN UP</button>
      </div>
    </header>
  )
}

export default Header
