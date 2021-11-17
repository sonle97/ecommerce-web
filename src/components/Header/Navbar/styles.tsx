import styled from "@emotion/styled"
import { FaMagento } from "react-icons/fa"
import { Link } from "gatsby"

interface NavMenuProps {
  isOpenMobileMenu?: any
  isHover?: boolean
}

export const Nav = styled.nav`
  background: #0f7cb6;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  @media screen and (max-width: 768px) {
    height: 60px;
  }
`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
  width: 100%;
  padding: 0 15px;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
  display: none;
  @media screen and (max-width: 768px) {
    display: flex;
  }
`

export const NavIcon = styled(FaMagento)`
  margin-right: 0.5rem;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff;
  }
`

export const NavMenu = styled.ul<NavMenuProps>`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    width: 270px;
    height: calc(100vh - 60px);
    overflow-y: auto;
    position: absolute;
    top: 60px;
    left: ${({ isOpenMobileMenu }) => (isOpenMobileMenu ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
    z-index: 2;
  }
`

export const NavItem = styled.li`
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  .icon {
    display: none;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    height: auto;
    padding-right: 1rem;

    &:hover {
      border: none;
    }
    .icon {
      display: block;
    }
  }
  &:hover .nav-dropdown {
    display: block;
    left: 0;
    top: 41px;
    transform: translate(0%, 5px);

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.75rem 1rem;
  height: 100%;
  text-transform: uppercase;
  font-size: 16px;
  @media screen and (max-width: 768px) {
    text-align: left;
    padding: 0.5rem 1rem;
    width: 100%;
    font-size: 14px;

    &:hover {
      color: #4b59f7;
      transition: all 0.3s ease;
    }
  }
`

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`

export const NavDropdown = styled.ul<NavMenuProps>`
  background-color: #f3f3f3;
  padding: 0;
  border: 0;
  box-shadow: none;
  border-top: 3px solid #f58634;
  position: absolute;
  min-width: 260px;
  text-align: left;
  transition: opacity 0.25s;
  display: none;
  & li {
    color: #1a80b6;
    letter-spacing: 0;
    border-right: 0;
    padding: 8px 20px;
    &:hover {
      color: #f58634;
    }
  }
`

export const BackgroundMobile = styled.div<NavMenuProps>`
  display: none;
  @media screen and (max-width: 768px) {
    display: ${({ isOpenMobileMenu }) => (isOpenMobileMenu ? "block" : "none")};
    position: absolute;
    width: 100%;
    height: calc(100vh - 60px);
    top: 60px;
    left: 0;
    transition: opacity 0.25s;
    background: #0b0b0b;
    opacity: 0.6;
    z-index: 1;
  }
`
export const SearchMobile = styled.div`
  display: none;
  box-sizing: border-box;
  border: 1px solid #ddd;
  padding: 0 0.75em;
  height: 2.507em;
  position: relative;
  max-height: 30px;
  height: 100%;
  font-size: 0.97em;
  border-radius: 0;
  max-width: 270px;
  margin: 0 10px;
  width: 100%;
  vertical-align: middle;
  color: #fff;
  box-shadow: inset 0 1px 2px rgb(0 0 0 / 10%);
  transition: color 0.3s, border 0.3s, background 0.3s, opacity 0.3s;
  background-color: rgba(0, 0, 0, 0.03);
  box-shadow: none;
  border-color: #fff;
  border-radius: 99px;
  input {
    outline: none;
    background: transparent;
    height: 100%;
    width: 100%;
    padding-right: 30px;
    font-size: 14px;
    position: absolute;
    ::placeholder {
      color: #fff;
    }
  }
  .icon-search {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    height: 100%auto;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) {
    display: block;
    input {
      padding-right: 60px;
    }
  }
  @media screen and (max-width: 415px) {
    max-width: 200px;
    max-height: 28px;
    input {
      font-size: 12px;
    }
    .icon-search {
      width: 15px;
    }
  }
`
export const SubnavWrapperMobile = styled.div`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 769px) {
    display: none;
  }
`
