import React from 'react';
import LatestJobOpenCard from '../LatestJobOpenCard'; // Import the LatestJobOpenCard component
import designLogo from '../../assets/designlogo.png';
import salesLogo from '../../assets/saleslogo.png';
import marketingLogo from '../../assets/marketinglogo.png';
import businessLogo from '../../assets/businesslogo.png';
import { Grid } from '@mui/material'; // Import Material UI Grid for layout

const LatestJobList: React.FC = () => {
  return (
    <Grid container spacing={1} justifyContent="center" sx={{ padding: '0 20px' }}> {/* Adjust padding around container */}
      {/* First Row (2 items) */}
      <Grid item xs={12} sm={6} md={6}>
        <LatestJobOpenCard 
          logo={designLogo}
          title="Senior Product Designer"
          location="Remote"
          jobType="Full-Time"
          domain1="Marketing"
          domain2="Design"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={6}>
        <LatestJobOpenCard 
          logo={salesLogo}
          title="Sales Executive"
          location="San Francisco"
          jobType="Full-Time"
          domain1="Sales"
          domain2="Business"
        />
      </Grid>

      {/* Second Row (2 items) */}
      <Grid item xs={12} sm={6} md={6}>
        <LatestJobOpenCard 
          logo={marketingLogo}
          title="Digital Marketing Specialist"
          location="New York"
          jobType="Part-Time"
          domain1="Marketing"
          domain2="Social Media"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={6}>
        <LatestJobOpenCard 
          logo={businessLogo}
          title="Business Analyst"
          location="Chicago"
          jobType="Full-Time"
          domain1="Business"
          domain2="Analytics"
        />
      </Grid>

      {/* Third Row (2 items) */}
      <Grid item xs={12} sm={6} md={6}>
        <LatestJobOpenCard 
          logo={designLogo}
          title="Graphic Designer"
          location="Remote"
          jobType="Contract"
          domain1="Design"
          domain2="Art"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={6}>
        <LatestJobOpenCard 
          logo={salesLogo}
          title="Sales Manager"
          location="Los Angeles"
          jobType="Full-Time"
          domain1="Sales"
          domain2="Team Leadership"
        />
      </Grid>

      {/* Fourth Row (2 items) */}
      <Grid item xs={12} sm={6} md={6}>
        <LatestJobOpenCard 
          logo={marketingLogo}
          title="SEO Expert"
          location="San Francisco"
          jobType="Freelance"
          domain1="Marketing"
          domain2="SEO"
        />
      </Grid>

      <Grid item xs={12} sm={6} md={6}>
        <LatestJobOpenCard 
          logo={businessLogo}
          title="Product Manager"
          location="Remote"
          jobType="Full-Time"
          domain1="Business"
          domain2="Product"
        />
      </Grid>
    </Grid>
  );
};

export default LatestJobList;
