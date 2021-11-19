import styled from 'styled-components'

export const EduContainer = styled.div`
  height: auto;
  padding: 100px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #52bed1;
`

export const EduH1 = styled.h1`
  font-size: 2.5rem;
  color: black;
  margin: 24px 40px 44px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`

export const EduH2 = styled.h2`
  margin-bottom: 10px;
`

export const EduWrapper = styled.div`
  max-width: auto;
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export const EduLists = styled.ul`
  margin: 0;
  padding-left: 0.1em;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const EduList = styled.li`
  font-size: 1.1em;
  margin-bottom: 1em;
  margin-left: 2em;
  display: flex;
  flex-direction: row;
`

export const EduListH3 = styled.h3`
  font-size: 1rem;
  color: black;
  margin-bottom: 10px;
  margin-left: 2em;
  margin-right: 1.5em;
`

export const EduListP = styled.p`
  font-size: 1rem;
  color: black;
  margin-bottom: 10px;
  margin-left: 2em;
  margin-right: 1.5em;
`
