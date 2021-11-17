import React, { useState } from "react"
import { IoMdClose, IoMdSearch } from "react-icons/io"
import { AiOutlineBars } from "react-icons/ai"

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  BackgroundMobile,
  SearchMobile,
} from "./styles"
import { navbars } from "./data"
import SubNavbar from "./SubNavbar"

// import useWindowDimensions from "../../../hooks/useWindowDimensions"

const index = () => {
  // const { width } = useWindowDimensions()

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)

  const handleToggleMenu = () => setIsOpenMobileMenu(!isOpenMobileMenu)
  const closeMobileMenu = () => setIsOpenMobileMenu(false)

  // useEffect(() => {
  //   if (isOpenMobileMenu && width <= 768) {
  //     document.body.classList.add("overflow-hidden")
  //   } else {
  //     document.body.classList.remove("overflow-hidden")
  //   }
  // }, [isOpenMobileMenu, width])

  // document.body.addEventListener("click", () => {
  //   if (width <= 768) {
  //     closeMobileMenu()
  //   }
  // })

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={closeMobileMenu}>
            <NavIcon />
            ULTRA
          </NavLogo>
          <SearchMobile>
            <input placeholder="Tìm kiếm" />
            <IoMdSearch className="icon-search" size={20} />
          </SearchMobile>
          <MobileIcon onClick={handleToggleMenu}>
            {isOpenMobileMenu ? <IoMdClose /> : <AiOutlineBars />}
          </MobileIcon>

          <BackgroundMobile
            onClick={closeMobileMenu}
            isOpenMobileMenu={isOpenMobileMenu}
          />
          <NavMenu
            // onClick={handleToggleMenu}
            isOpenMobileMenu={isOpenMobileMenu}
          >
            {navbars.map((navbar, idx) => (
              <SubNavbar navbar={navbar} key={idx} />
            ))}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default index
