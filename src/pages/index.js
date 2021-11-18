import React, {useState} from 'react'
import HeroSection from '../Components/HeroSection'
import InfoSection from '../Components/InfoSection'
import EduSection from '../Components/Edu/Index'
import Projects from '../Components/Projects'
import SkillsSection from '../Components/Skills'
import { homeObjOne } from '../Components/InfoSection/Data'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Footer from '../Components/Footer'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <EduSection />
            <Projects />
            <SkillsSection />
            <Footer />
        </>
    )
}

export default Home
