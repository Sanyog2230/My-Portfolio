import React from 'react'
import HeroPage from './HeroPage'
import ExperiencePage from './ExperiencePage'
import EducationPage from './EducationPage'
import ProjectsPage from './ProjectsPage'
import SkillsPage from './SkillsPage'
import ContactPage from './ContactPage'
import ThankingPage from './ThankingPage'
import MainLayout from './MainLayout'


const Home = () => {
  return (
    <div>
        <MainLayout/>
        <HeroPage/>
        <ExperiencePage/>
        <ProjectsPage/>
        <EducationPage/>
        <SkillsPage/>
        <ContactPage/>
        <ThankingPage/>
    </div>
  )
}

export default Home