import styled from 'styled-components'

export const SkillsContainer = styled.div`
    padding: 40px 40px;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;

    @media screen and (max-width: 820px) {
        padding: 80px 40px;
    }
`

export const SkillsH1 = styled.div`
    font-size: 2.5rem;
    color: black;
    margin-bottom: 24px;
    margin-top: 24px;


    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const SkillsWrapper = styled.div`
    max-width: auto;
    margin: 10px;
    padding-bottom: 20px;
    display: flex;
    flex-direction: row;

    @media screen and (max-width: 690px) {
        display: flex;
        flex-direction: column;
    }
`
export const SkillsCol = styled.div`
    margin-right: 50px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: flex-start;
`
export const SkillsH2 = styled.h2`
    margin-bottom: 20px;
    font-weight: 400;
    color: #046677;
`

export const SkillsLists = styled.ul`
    margin: 0;
    list-style-type: none;
`

export const SkillsList = styled.li`
    font-size: 1.1em;
    margin-bottom: 1em;
    display: flex;
    flex-direction: row;
`

export const SkillsP = styled.p`
    font-size: 1rem;
    color: black;
    margin-left: 14px;
`

