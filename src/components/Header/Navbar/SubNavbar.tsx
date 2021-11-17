import React, { useState } from "react"

import { BiChevronUp, BiChevronDown } from "react-icons/bi"
import { Link } from "gatsby"

import { NavItem, NavLinks, NavDropdown, SubnavWrapperMobile } from "./styles"

const SubNavbar = (props: any) => {
  const { navbar } = props

  const [isOpenSubnav, setIsOpenSubnav] = useState(false)
  const showSubnav = () => setIsOpenSubnav(!isOpenSubnav)

  return (
    <>
      <NavItem>
        <NavLinks to={navbar.slug}>{navbar.title}</NavLinks>
        {navbar.subTitle && navbar.subTitle.length && (
          <div
            className="icon cursor-pointer"
            onClick={navbar.subTitle && showSubnav}
          >
            {isOpenSubnav ? (
              <BiChevronUp size={27} className="text-white" />
            ) : (
              <BiChevronDown size={27} className="text-white" />
            )}
          </div>
        )}
        {navbar.subTitle && navbar.subTitle.length && (
          <NavDropdown className="nav-dropdown">
            {navbar.subTitle.map((sub: any, idx: number) => (
              <li key={idx}>
                <Link to="/">{sub}</Link>
              </li>
            ))}
          </NavDropdown>
        )}
      </NavItem>

      <SubnavWrapperMobile>
        {isOpenSubnav &&
          navbar.subTitle &&
          navbar.subTitle.map((item: any, index: number) => {
            return (
              <div key={index} className="text-left pl-8">
                <Link to="/" className="text-white text-sm">
                  {item}
                </Link>
              </div>
            )
          })}
      </SubnavWrapperMobile>
    </>
  )
}

export default SubNavbar
