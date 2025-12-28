import React from 'react';
import HeroPage from './HeroPage';
import ExperiencePage from './ExperiencePage';
import EducationPage from './EducationPage';
import ProjectsPage from './ProjectsPage';
import SkillsPage from './SkillsPage';
import ContactPage from './ContactPage';
import MainLayout from './MainLayout';

const Home = () => {
  return (
    <MainLayout>
      {({ setHeroProgress }) => (
        <div className="w-full flex flex-col">
          {/* Hero */}
          <HeroPage setHeroProgress={setHeroProgress} />

          {/* All other sections */}
          <ExperiencePage />
          <ProjectsPage />
          <EducationPage />
          <SkillsPage />
          <ContactPage />
        </div>
      )}
    </MainLayout>
  );
};

export default Home;
