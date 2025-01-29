import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
  styled
} from '@mui/material';

// Interfaces
interface CompanyTag {
  label: string;
  color?: 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
}

interface Company {
  id: string;
  logo: string;
  name: string;
  description: string;
  jobCount: number;
  tags: CompanyTag[];
}

// Styled Components
const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  border: '1px solid #eaeaea',
  boxShadow: 'none',
  '&:hover': {
    boxShadow: theme.shadows[2],
  },
}));

const CompanyLogo = styled(Avatar)(({ theme }) => ({
  width: 64,
  height: 64,
  marginBottom: theme.spacing(2),
  borderRadius: 12,
}));

const JobCountChip = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  color: '#5E5CFF',
}));

const TagChip = styled(Chip)({
  margin: '4px',
  borderRadius: 16,
  '&.business': {
    backgroundColor: 'rgba(255, 171, 0, 0.1)',
    color: '#FFB74D',
    border: '1px solid #FFB74D',
  },
  '&.technology': {
    backgroundColor: 'rgba(255, 86, 86, 0.1)',
    color: '#FF5656',
    border: '1px solid #FF5656',
  },
  '&.crypto': {
    backgroundColor: 'rgba(94, 92, 255, 0.1)',
    color: '#5E5CFF',
    border: '1px solid #5E5CFF',
  },
});

// Sample data
const companiesData: Company[] = [
  {
    id: '1',
    logo: '/api/placeholder/64/64',
    name: 'Nomad',
    description: 'Nomad is located in Paris, France. Nomad has generates $728,000 in sales (USD).',
    jobCount: 3,
    tags: [{ label: 'Business Service' }]
  },
  {
    id: '2',
    logo: '/api/placeholder/64/64',
    name: 'Discord',
    description: 'We\'d love to work with someone like you. We care about creating a delightful experience.',
    jobCount: 3,
    tags: [{ label: 'Business Service' }]
  },
  {
    id: '3',
    logo: '/api/placeholder/64/64',
    name: 'Maze',
    description: 'We\'re a passionate bunch working from all over the world to build the future of rapid testing together.',
    jobCount: 3,
    tags: [{ label: 'Business Service' }]
  },
  {
    id: '4',
    logo: '/api/placeholder/64/64',
    name: 'Udacity',
    description: 'Udacity is a new type of online university that teaches the actual programming skills.',
    jobCount: 3,
    tags: [{ label: 'Business Service' }]
  },
  {
    id: '5',
    logo: '/api/placeholder/64/64',
    name: 'Webflow',
    description: 'Webflow is the first design and hosting platform built from the ground up for the mobile age.',
    jobCount: 3,
    tags: [
      { label: 'Business Service' },
      { label: 'Technology' }
    ]
  },
  {
    id: '6',
    logo: '/api/placeholder/64/64',
    name: 'Foundation',
    description: 'Foundation helps creators mint and auction their digital artworks as NFTs on the Ethereum blockchain.',
    jobCount: 3,
    tags: [
      { label: 'Business Service' },
      { label: 'Crypto' }
    ]
  }
];

const RecommendedCompanies: React.FC = () => {
  const getTagClassName = (label: string): string => {
    const normalized = label.toLowerCase().replace(/\s+/g, '');
    return normalized;
  };

  return (
    <Box sx={{ py: 6, px: 3, maxWidth: 1200, mx: 'auto' }}>
      <Typography variant="h4" component="h2" gutterBottom>
        Recommended Companies
      </Typography>
      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
        Based on your profile, company preferences, and recent activity
      </Typography>

      <Grid container spacing={3} sx={{ mt: 3 }}>
        {companiesData.map((company) => (
          <Grid item xs={12} sm={6} md={4} key={company.id}>
            <StyledCard>
              <CardContent sx={{ position: 'relative' }}>
                <JobCountChip variant="subtitle2">
                  {company.jobCount} Jobs
                </JobCountChip>
                
                <CompanyLogo src={company.logo} alt={company.name} />
                
                <Typography variant="h6" gutterBottom>
                  {company.name}
                </Typography>
                
                <Typography variant="body2" color="textSecondary" paragraph>
                  {company.description}
                </Typography>
                
                <Box sx={{ mt: 2 }}>
                  {company.tags.map((tag) => (
                    <TagChip
                      key={tag.label}
                      label={tag.label}
                      className={getTagClassName(tag.label)}
                      variant="outlined"
                    />
                  ))}
                </Box>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RecommendedCompanies;