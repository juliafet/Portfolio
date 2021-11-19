import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
`

export const NavBtnLink = styled(LinkR)`
  background: ${({ primary }) => (primary ? '#56ecd6' : 'transparent')};
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: 2px solid #56ecd6;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? 'transparent' : '#56ecd6')};
    color: ${({ dark }) => (dark ? '#fff' : '#010606')};
    border: 2px solid #56ecd6;
  }
`

/* import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
    background: ${({primary}) => (primary ? '#56ecd6' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff ' :'#217875')};
    }
` */
