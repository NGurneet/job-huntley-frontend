import React from 'react';
import JobCategories from '../components/JobCategories';
import FeaturedJobList from '../components/FeaturedJobList';
import LatestJobList from '../components/LatestJobList';
import styles from '../styles/landing-page.module.css';
import compainesSection from "../assets/companies-section.png";
import JobPostingSection from '../components/JobPostingSection';
import Navbar from '../components/Navbar';
import LandingHero from '../components/LandingHero';
import { AppBar, Box, Button, styled, Toolbar, Typography } from '@mui/material';
import FeaturedJobs from '../components/FeaturedJobs';
import JobPostingCTA from '../components/JobPostingCta';
import Footer from '../components/Footer';
import AppNavbar from '../components/AppNavbar';

const LandingPage: React.FC = () => {
  const LogoTypography = styled(Typography)({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: '#5E5CFF',
    fontWeight: 'bold',
    fontSize: '24px',
  });
  return (
    <div className={styles.landingPage}>
      <header>
        {/* <Navbar /> */}
        <AppNavbar/>
      </header>

      <section>
        {/* Hero Section aligned left */}
        <Box sx={{ display: "flex", justifyContent: "flex-start", width: "100%" }}>
          <LandingHero />
        </Box>
      </section>

      {/* Companies Section */}
      <section className={styles.companiesSection}>
        <img src={compainesSection} alt="Companies Section" className={styles.companiesSectionImage} />
      </section>

      <section className={styles.jobCategoriesSection}>
        <h2>Browse Job Categories</h2>
        <JobCategories />
      </section>

      <section className={styles.landingPage} >
        <JobPostingCTA/>
      </section>

      <section className={styles.featuredJobsSection}>
        <h2>Featured Jobs</h2>
        {/* <FeaturedJobList /> */}
        <FeaturedJobs />
      </section>

      <section className={styles.latestJobOpeningsSection}>
        <h2>Latest Job Openings</h2>
        <LatestJobList />
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
};

export default LandingPage;
