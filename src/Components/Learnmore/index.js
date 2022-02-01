import React from 'react'
import {
  /* InfoContainer, */
  InfoWrapper,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  /* Column2, */
  ImgWrap,
  Img,
} from './LearnMoreElements_2'
import Image from '../../images/photo_2.jpg'

const Learnmore = () => {
  return (
    <div>
      {/* <InfoContainer> */}
      <InfoWrapper>
        <Column1>
          <TextWrapper>
            <TopLine></TopLine>
            <Heading>More About Me</Heading>
            <Subtitle>
              I am a self-taught career-changer, in my past I sold wide range of
              IT hardware sollutions. I am the lucky one who took a chance to
              change the life. After moving to Australia and during long
              maternity leave I decided to take a chance to switch the job for
              something really interesting and I have found a new passion for
              creating and building clean, modern websites.{' '}
            </Subtitle>
            <Subtitle>
              I am at the very beginning, I finished multiple courses on INCO,
              Code Like a Girl, Coursera, Udemy. I learned a lot by creating
              projects using Python, HTML, CSS, JS, Figma, React, Node.JS,
              Express.js, JQuery, Ajax, PostgreSQl, API, Git. I practise coding
              skills on Check.io, HackerRank, CodeWars, FreeCodeCamp, FrontEnd
              Mentor and started creating code in real-life MERN unpaid project.
              I have experience in software testing in real test cycle on
              Crowdsourced testing platforms (uTest, Testbirds, testio).
            </Subtitle>
            <Subtitle>
              And the process of change began! I realized that I had chosen that
              very red pill.
            </Subtitle>
            <TopLine>What an incredible world it is!</TopLine>
          </TextWrapper>
        </Column1>
        {/* <Column2> */}
        <ImgWrap>
          <Img src={Image} />
        </ImgWrap>
        {/*</Column2>*/}
      </InfoWrapper>
      {/*  </InfoContainer> */}
    </div>
  )
}

export default Learnmore
