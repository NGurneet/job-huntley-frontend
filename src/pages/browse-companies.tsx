// BrowseCompanies.tsx
import React from 'react';
import JobSearch from '../components/JobSearch'; // Import JobSearch component
import { Typography, Box, Container } from '@mui/material';
import { Recommend } from '@mui/icons-material';
import RecommendedCompanies from '../components/RecommendedCompainesComponent';
import JobPostingCTA from '../components/JobPostingCta';

const BrowseCompanies: React.FC = () => {
  return (
    <Box sx={{ bgcolor: '#f5f5f5', minHeight: '100vh' }}>
      <Container maxWidth="lg" sx={{ mt: 8 }}>    
     

        <JobSearch popularCompanies={['Netflix', 'Amazon', 'Google', 'Adobe']} /> {/* Pass custom popular companies */}
      </Container>
      <RecommendedCompanies />
      <section>
        <JobPostingCTA />
      </section>
    </Box>
    
  );
};

export default BrowseCompanies;
