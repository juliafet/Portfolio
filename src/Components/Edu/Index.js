import React from 'react'
import { IoIosRibbon } from 'react-icons/io'
import {
  EduContainer,
  EduH1,
  EduH2,
  EduWrapper,
  EduLists,
  EduList,
  EduListH3,
  EduListP,
} from './EduElements'

const EduSection = () => {
  return (
    <div>
      <EduContainer id="education">
        <EduH1>Career changing process</EduH1>
        <EduH2>Bootcamps</EduH2>
        <EduWrapper>
          <EduLists>
            <EduList>
              <IoIosRibbon />
              <EduListH3>INCO Academy </EduListH3>
              <EduListP>INCODE - Web Development Bootcamp</EduListP>
            </EduList>
            <EduList>
              <IoIosRibbon />
              <EduListH3>Code Like a Girl </EduListH3>
              <EduListP>FOUNDATIONS OF WEB DEV</EduListP>
            </EduList>
            <EduList>
              <IoIosRibbon />
              <EduListH3>Udemy </EduListH3>
              <EduListP>The Web Developer Bootcamp by Colt Steel</EduListP>
            </EduList>
            <EduList>
              <IoIosRibbon />
              <EduListH3>Coursera </EduListH3>
              <EduListP>Introduction to Programming Using Python</EduListP>
            </EduList>
            <EduList>
              <IoIosRibbon />
              <EduListH3>Udemy</EduListH3>
              <EduListP>Python Bootcamp From Zero to Hero</EduListP>
            </EduList>
            <EduList>
              <IoIosRibbon />
              <EduListH3>uTest</EduListH3>
              <EduListP>
                uTest Academy. Functional testing, API testing, Usability, Bug
                reports, Test cases, Reviews
              </EduListP>
            </EduList>
          </EduLists>
        </EduWrapper>
        <EduH2>Training Tools</EduH2>
        <EduWrapper>
          <EduLists>
            <EduList>
              <IoIosRibbon />
              <EduListP>
                HackerRank, Codecademy, FreeCodeCamp, CheckiO, CodeWars,
                Leetcode, Frontend Mentor, YouTube
              </EduListP>
            </EduList>
          </EduLists>
        </EduWrapper>
      </EduContainer>
    </div>
  )
}

export default EduSection
