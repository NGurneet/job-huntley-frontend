import React from 'react';
import FeaturedJobCard from '../FeaturedJobCard.tsx'; // Import the FeaturedJobCard component
import designLogo from '../../assets/designlogo.png';
import humanResourcelogo from '../../assets/humanResourcelogo.png';
import marketingLogo from '../../assets/marketinglogo.png';
import businessLogo from '../../assets/businesslogo.png';
import salesLogo from '../../assets/saleslogo.png';
import financeLogo from '../../assets/financelogo.png';
import technologyLogo from '../../assets/technologylogo.png';
import engineeringLogo from '../../assets/engineeringlogo.png';
import { Grid } from '@mui/material'; // Import Material UI Grid for layout

const FeaturedJobList: React.FC = () => {
  return (
    <div>
      <Grid container spacing={3} justifyContent="center"> {/* Grid to arrange the cards */}
        
        <Grid item xs={12} sm={6} md={3}> {/* Each item takes up 3 columns on medium devices */}
          <FeaturedJobCard 
            logo={designLogo}
            title="Senior Product Designer"
            place="Remote"
            description="We are looking for a senior product designer who will work on the user experience of our platform."
            domain1="Marketing"
            domain2="Design"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FeaturedJobCard 
            logo={humanResourcelogo}
            title="Human Resources Manager"
            place="New York"
            description="We are hiring an HR manager to oversee recruitment, employee relations, and more."
            domain1="Human Resources"
            domain2="Leadership"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FeaturedJobCard 
            logo={marketingLogo}
            title="Digital Marketing Specialist"
            place="Remote"
            description="We're looking for a skilled digital marketing specialist with experience in online campaigns."
            domain1="Marketing"
            domain2="Sales"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FeaturedJobCard 
            logo={businessLogo}
            title="Business Analyst"
            place="Chicago"
            description="We're seeking a business analyst who will help us gather and analyze business data for improvement."
            domain1="Business"
            domain2="Data"
          />
        </Grid>

        {/* Second row */}
        <Grid item xs={12} sm={6} md={3}>
          <FeaturedJobCard 
            logo={salesLogo}
            title="Sales Executive"
            place="San Francisco"
            description="We need a results-driven sales executive to grow the revenue and customer base."
            domain1="Sales"
            domain2="Customer Success"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FeaturedJobCard 
            logo={financeLogo}
            title="Financial Analyst"
            place="Los Angeles"
            description="A finance analyst position with the opportunity to contribute to budget planning and analysis."
            domain1="Finance"
            domain2="Accounting"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FeaturedJobCard 
            logo={technologyLogo}
            title="Software Engineer"
            place="Remote"
            description="Looking for a software engineer with experience in building scalable systems."
            domain1="Technology"
            domain2="Engineering"
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <FeaturedJobCard 
            logo={engineeringLogo}
            title="Mechanical Engineer"
            place="Detroit"
            description="We are hiring a mechanical engineer to design and test manufacturing systems."
            domain1="Engineering"
            domain2="Manufacturing"
          />
        </Grid>
      </Grid>
    </div>
  );
};

export default FeaturedJobList;
