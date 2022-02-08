import React from 'react'
import { FaLinkedin, FaGithub, FaCodepen, FaFigma } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll'
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebSiteRights,
  SocialIcons,
  SocialIconLinks,
} from './FooterElements'

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop()
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Julia Fetisova
            </SocialLogo>
            <WebSiteRights>© {new Date().getFullYear()}</WebSiteRights>
            <SocialIcons>
              <SocialIconLinks
                href="https://www.linkedin.com/in/julia-fetisova"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLinks>
              <SocialIconLinks
                href="https://github.com/juliafet"
                target="_blank"
                aria-label="GitHab"
              >
                <FaGithub />
              </SocialIconLinks>
              <SocialIconLinks
                href="https://codepen.io/ulkaru"
                target="_blank"
                aria-label="Codepen"
              >
                <FaCodepen />
              </SocialIconLinks>
              <SocialIconLinks
                href="//www.figma.com/files/user/913272717719460432?fuid=913272717719460432"
                target="_blank"
                aria-label="Figma"
              >
                <FaFigma />
              </SocialIconLinks>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
