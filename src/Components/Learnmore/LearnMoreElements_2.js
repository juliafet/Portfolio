import styled from 'styled-components'

/* export const InfoContainer = styled.div`` */

export const InfoWrapper = styled.div`
  background: #52bed1;
  position: relative;
  height: auto;
  /* width: 100%;
  max-width: 1100px; */
  margin-right: auto;
  margin-left: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 655px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
  }
`

export const Column1 = styled.div`
  width: auto;
  height: auto;
  padding: 15px;
  display: flex;
  justify-content: left;
`

/* export const Column2 = styled.div`
  display: flex;
  justify-content: right;
`
 */
export const TextWrapper = styled.div`
  padding: 15px 35px;
  background: #ffffffb6;
  /* overflow-x: visible; */
  position: absolute;
  z-index: 1;
  max-width: 690px;

  @media screen and (max-width: 655px) {
    position: relative;
  }
`

export const TopLine = styled.p`
  color: #046677;
  padding-top: 10px;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  padding-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #010606;
`

export const Subtitle = styled.div`
  padding-bottom: 10px;

  font-size: 16px;
  line-height: 28px;
  /* overflow-x: visible; */
`
export const ImgWrap = styled.div`
  max-width: 655px;
  height: auto;
  padding: 0 15px;
  /* display: flex;
  justify-content: right; */
  align-items: center;

  @media screen and (max-width: 655px) {
    position: relative;
    max-width: 455;
    height: 225px; /* 
    justify-content: center; */
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  filter: blur(0px);

  @media screen and (max-width: 655px) {
  }

  @media screen and (max-width: 655px) {
    /* position: relative; */
    height: 355px;
    width: auto;
    align-items: center;
    align-self: center;
  }
`
