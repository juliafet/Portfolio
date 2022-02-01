import styled from 'styled-components'

export const InfoContainer = styled.div`
  color: #fff;
  background: #52bed1;

  @media screen and (max-width: 768px) {
    padding: 80px 0;
  }
`

export const InfoWrapper = styled.div`
  z-index: 1;
  height: 800px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  display: flex;
  justify-content: center;
`

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 968px) {
  }
`

export const Column1 = styled.div`
  margin-bottom: 15px;
  margin-right: -20%;
  padding: 0 15px;
  overflow: visible;
  display: flex;
`

export const Column2 = styled.div`
  margin-bottom: 15px;
`

export const TextWrapper = styled.div`
  max-width: 640px;
  padding-top: 0;
  padding-bottom: 60px;
`

export const TopLine = styled.p`
  color: #046677;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
`

export const Subtitle = styled.div`
  max-width: 640px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  overflow-x: visible;
  position: relative;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`

export const ImgWrap = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
`
export const Img = styled.img`
  width: 120%;
  margin-left: -100px;
  overflow: hidden;
  margin: 0 0 0 0%;
  padding-right: 0;
  filter: blur(1px);
`
