import React, { useState } from 'react'
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from './SidebarElements'

const Sidebar = ({ isOpen, toggle }) => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  const downloadFile = () => {
    window.location.href = 'Resources/CV.pdf'
  }

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="projects" onClick={toggle}>
            Projects
          </SidebarLink>
          <SidebarLink to="skills" onClick={toggle}>
            Skills
          </SidebarLink>
          <SidebarLink to="education" onClick={toggle}>
            Edu
          </SidebarLink>
          {/* <SidebarLink to="contact" onClick={toggle}>
            Contact
          </SidebarLink> */}
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            onClick={downloadFile}
            primary="true"
            dark="true"
          >
            Resume
          </SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
