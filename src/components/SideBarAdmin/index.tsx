import React from "react"
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa"
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar"
import { Link } from "gatsby"
import "react-pro-sidebar/dist/css/styles.css"

import sidebarBg from "../../images/bg1.jpg"

const SideBar = () => {
  return (
    <ProSidebar image={sidebarBg}>
      <SidebarHeader>
        <div
          style={{
            padding: "24px",
            textTransform: "uppercase",
            fontWeight: "bold",
            fontSize: 14,
            letterSpacing: "1px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
          className="text-yellow-1"
        >
          Sidebar Title
        </div>
      </SidebarHeader>

      <SidebarContent>
        <Menu iconShape="circle">
          <Link to="/">
            <MenuItem
              icon={<FaTachometerAlt />}
              suffix={<span className="badge red">New</span>}
            >
              Dashboard
            </MenuItem>
          </Link>
          <MenuItem icon={<FaGem />}>Components</MenuItem>
        </Menu>
        <Menu iconShape="circle">
          <SubMenu
            suffix={<span className="badge yellow">3</span>}
            title={"withSuffix"}
            icon={<FaRegLaughWink />}
          >
            <Link to="/about">
              <MenuItem>Submenu 1</MenuItem>
            </Link>
            <MenuItem>Submenu 2</MenuItem>
            <MenuItem>Submenu 3</MenuItem>
          </SubMenu>
          <SubMenu
            // prefix={<span className="badge gray">3</span>}
            title={"withPrefix"}
            icon={<FaHeart />}
          >
            <MenuItem>Submenu 1</MenuItem>
            <Link to="/contact">
              <MenuItem>Submenu 2</MenuItem>
            </Link>
            <MenuItem>Submenu 3</MenuItem>
          </SubMenu>
          <SubMenu title={"MultiLevel"} icon={<FaList />}>
            <MenuItem>submenu 1 </MenuItem>
            <MenuItem>submenu 2 </MenuItem>
            <SubMenu title={`$submenu 3`}>
              <MenuItem>submenu 3.1 </MenuItem>
              <MenuItem>submenu 3.2 </MenuItem>
              <SubMenu title={"submenu 3.3"}>
                <MenuItem>submenu 3.3.1 </MenuItem>
                <MenuItem>submenu 3.3.2 </MenuItem>
                <MenuItem>submenu 3.3.3 </MenuItem>
              </SubMenu>
            </SubMenu>
          </SubMenu>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: "center" }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: "20px 24px",
          }}
        >
          <a
            href="https://github.com/azouaoui-med/react-pro-sidebar"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
          >
            <FaGithub />
            <span> viewSource</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  )
}

export default SideBar
