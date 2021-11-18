import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding: 80px 40px;
`

export const ProjectsH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin: 24px 40px 44px 40px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const ProjectsWrapper = styled.div`
  max-width: 1400px;
  margin: 10px 60px;
  padding: 0 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;

  @media screen and (max-width: 1190px) {
    grid-template-columns: 1fr 1fr;
    margin: 0 50px;
    padding: 0 20px;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 40px;
    margin: 0 20px;
  }

  @media screen and (max-width: 520px) {
    padding: 0 20px;
    margin: 0 10px;
  }
`

export const ProjectsCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 480px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 770px) {
    max-height: 550px;
  }
`

export const ProjectsImg = styled.img`
  /* height: 100%; */
  width: 100%;
  margin-bottom: 10px;
`

export const ProjectsH2 = styled.h2`
  font-size: 1rem;
  margin: 20px 0;
`

export const ProjectsP = styled.p`
  font-size: 1rem;
`
export const ProjectsIcons = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
`
