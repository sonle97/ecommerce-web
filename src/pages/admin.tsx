import React from "react"
import SideBar from "../components/SideBarAdmin/index"
import { AdminContainerStyled } from "../styles/index"

const AdminPage = () => {
  return (
    <AdminContainerStyled>
      <SideBar />
      <div>Home</div>
    </AdminContainerStyled>
  )
}

export default AdminPage
