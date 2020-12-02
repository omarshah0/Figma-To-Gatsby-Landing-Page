import React from "react"
import SectionTitleLogo from "../../../assets/SectionTitle-Logo.svg"
import "./SectionTitle.css"

function SectionTitle({ mainTitle, subTitle }) {
  return (
    <div className="sectionTitle">
      <div className="sectionTitle__mainTitle">
        <h2>{mainTitle}</h2>
      </div>
      <div className="sectionTitle__divider"></div>
      <div className="sectionTitle__subTitle">
        <SectionTitleLogo />
        <h3>{subTitle}</h3>
      </div>
    </div>
  )
}

export default SectionTitle
