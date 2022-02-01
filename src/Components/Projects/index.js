import React from 'react'
import Icon1 from '../../images/App_1.jpg'
import Icon2 from '../../images/App_2.jpg'
import Icon3 from '../../images/App3.jpg'
import Icon4 from '../../images/App4.jpg'
import Icon5 from '../../images/App5.jpg'
import Icon6 from '../../images/App6.jpg'
import Icon7 from '../../images/App7.jpg'
import Icon8 from '../../images/App8.jpg'
import Icon9 from '../../images/App9.jpg'
import {
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiSass,
  DiBootstrap,
  DiGithubBadge,
  DiVisualstudio,
  DiJqueryLogo,
  DiNodejsSmall,
  DiPostgresql,
  DiFirebase,
  DiCss3,
} from 'react-icons/di'
import { SiPostman, SiFigma, SiExpress } from 'react-icons/si'
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsWrapper,
  ProjectsImg,
  ProjectsIcons,
  ProjectsCard,
  ProjectsP,
  ProjectsH2,
} from './ProjectsElements'

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Some things I have built</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsImg src={Icon1} />
          <ProjectsH2>The Client-Server App for a Movie Rating</ProjectsH2>
          <ProjectsP>
            HTML, CSS, Bootstrap, Express, Postgress, Node.js, Axios, API
            {/* The client-server App, where registered users are allowed to rate
            movies and thuse create there own community store. The list of
            movies and there information are retrieved through the YTS API. */}
          </ProjectsP>
          <ProjectsIcons>
            <DiJavascript1 size={28} />
            <SiPostman size={28} />
            <DiHtml5 size={28} />
            <DiBootstrap size={28} />
            <DiGithubBadge size={28} />
            <DiNodejsSmall size={28} />
            <DiPostgresql size={28} />
          </ProjectsIcons>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsImg src={Icon4} />
          <ProjectsH2>Portfolio</ProjectsH2>
          <ProjectsP>
            {/* Portfolio website, where I used React with styled-components. */}
            HTML, CSS, React, Styled-component
          </ProjectsP>
          <ProjectsIcons>
            <DiJavascript1 size={28} />
            <DiReact size={28} />
            <DiHtml5 size={28} />
            <DiGithubBadge size={28} />
            <DiSass size={28} />
          </ProjectsIcons>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsImg src={Icon7} />
          <ProjectsH2>The Client-server Web App with Autentication.</ProjectsH2>
          <ProjectsP>
            {/* The Web App for internal use of employees who are able to create
            accounts and their own schedules. Pages are only accessible to
            registared users. The data of registered users and schudule details
            are stored in PpostgresQl. */}
            HTML, CSS, Express, Postgress, Node.js
          </ProjectsP>
          <ProjectsIcons>
            <DiJavascript1 size={28} />
            <DiHtml5 size={28} />
            <DiGithubBadge size={28} />
            <DiNodejsSmall size={28} />
            <DiPostgresql size={28} />
            <SiPostman size={28} />
          </ProjectsIcons>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsImg src={Icon2} />
          <ProjectsH2>Online BeautyShop</ProjectsH2>
          <ProjectsP>
            {/* The BeautyShop is website, where costumers can buy beauty products.
            I used Google Firebase for storing items details. */}
            HTML, CSS, React, Firebase
          </ProjectsP>
          <ProjectsIcons>
            <DiJavascript1 size={28} />
            <DiReact size={28} />
            <DiHtml5 size={28} />
            <DiGithubBadge size={28} />
            <DiFirebase size={28} />
          </ProjectsIcons>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsImg src={Icon3} />
          <ProjectsH2>The WeatherApp</ProjectsH2>
          <ProjectsP>
            {/* The WeatherApp shows weather of any city by users search. The
            information of weather is retrieved through the API from
            Openweathermap.org. */}
            HTML, CSS, React, API
          </ProjectsP>
          <ProjectsIcons>
            <DiJavascript1 size={28} />
            <DiReact size={28} />
            <DiHtml5 size={28} />
            <DiGithubBadge size={28} />
          </ProjectsIcons>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsImg src={Icon5} />
          <ProjectsH2>Landing Page for Online Store.</ProjectsH2>
          <ProjectsP>
            {/* Through learning UI Design in Figma I created landing page for
            online store of around robot market products. */}
            Figma
          </ProjectsP>
          <ProjectsIcons>
            <SiFigma size={28} />
          </ProjectsIcons>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsImg src={Icon6} />
          <ProjectsH2>Landing Page for Hairdresser Website.</ProjectsH2>
          <ProjectsP>HTML, CSS</ProjectsP>
          <ProjectsIcons>
            <DiJavascript1 size={28} />
            <DiHtml5 size={28} />
            <DiGithubBadge size={28} />
            <DiSass size={28} />
          </ProjectsIcons>
        </ProjectsCard>

        <ProjectsCard>
          <ProjectsImg src={Icon8} />
          <ProjectsH2>The Color Game.</ProjectsH2>
          <ProjectsP>
            {/* Something more about project ONE. Something more about project ONE.
            Something more about project ONE. Something more about project ONE. */}
            HTML, CSS, Javascript
          </ProjectsP>
          <ProjectsIcons>
            <DiHtml5 size={28} />
            <DiJavascript1 size={28} />
            <DiJqueryLogo size={28} />
            <DiCss3 size={28} />
            <DiVisualstudio size={28} />
          </ProjectsIcons>
        </ProjectsCard>
        <ProjectsCard>
          <ProjectsImg src={Icon9} />
          <ProjectsH2>TODO LIST App.</ProjectsH2>
          <ProjectsP>
            {/*  Something more about project ONE. Something more about project ONE.
            Something more about project ONE. Something more about project ONE. */}
            HTML, CSS, Javascript, JQuery
          </ProjectsP>
          <ProjectsIcons>
            <DiHtml5 size={28} />
            <DiJavascript1 size={28} />
            <DiJqueryLogo size={28} />
            <DiCss3 size={28} />
            <DiVisualstudio size={28} />
          </ProjectsIcons>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects
