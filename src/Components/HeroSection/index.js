import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {NavBtn, NavBtnLink} from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContent, TopLine, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    const downloadFile = () => {
        window.location.href = "https://drive.google.com/file/d/10bEnkOmQQ-rZOM6R4rWEtinqfF8Bb2Pi/view"
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <TopLine>Hi, My name is </TopLine>
                <HeroH1>Julia Fetisova.</HeroH1>
                <HeroP>
                    I love to build beautiful and clean websites.
                </HeroP>
                <HeroBtnWrapper>
                    {/* <Button to='resume'
                    onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'
                    >
                    Download CV {hover ? <ArrowForward /> : <ArrowRight/>}
                    </Button> */}
                    <NavBtn>
                        <NavBtnLink
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            onClick={downloadFile}
                            primary='true'
                            dark='true'
                            >
                            Download CV {hover ? <ArrowForward /> : <ArrowRight/>}
                        </NavBtnLink>
                    </NavBtn>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection