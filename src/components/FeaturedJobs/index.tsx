import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  Grid, 
  Button,
  Avatar,
  Chip,
  styled 
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// Custom styled components
const JobCard = styled(Card)({
    padding: '24px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
    }
  });
  
  const StyledChip = styled(Chip)<{ chiptype: 'fullTime' | 'marketing' | 'design' | 'business' | 'technology' }>(({ chiptype }) => ({
    borderRadius: '16px',
    height: '28px',
    ...(chiptype === 'fullTime' && {
      backgroundColor: '#EEF2FF',
      color: '#6366F1',
      border: '1px solid #6366F1',
    }),
    ...(chiptype === 'marketing' && {
      backgroundColor: 'rgba(245, 158, 11, 0.1)',
      color: '#F59E0B',
    }),
    ...(chiptype === 'design' && {
      backgroundColor: 'rgba(16, 185, 129, 0.1)',
      color: '#10B981',
    }),
    ...(chiptype === 'business' && {
      backgroundColor: '#EEF2FF',
      color: '#6366F1',
    }),
    ...(chiptype === 'technology' && {
      backgroundColor: 'rgba(239, 68, 68, 0.1)',
      color: '#EF4444',
    }),
  }));
  
  interface Job {
    logo: string;
    position: string;
    company: string;
    location: string;
    description: string;
    tags: Array<{
      label: string;
      type: 'fullTime' | 'marketing' | 'design' | 'business' | 'technology';
    }>;
  }
  
  const jobs: Job[] = [
    {
      logo: 'R',
      position: 'Email Marketing',
      company: 'Revolut',
      location: 'Madrid, Spain',
      description: 'Revolut is looking for Email Marketing to help team ma...',
      tags: [
        { label: 'Full Time', type: 'fullTime' },
        { label: 'Marketing', type: 'marketing' },
        { label: 'Design', type: 'design' }
      ]
    },
    {
      logo: 'D',
      position: 'Brand Designer',
      company: 'Dropbox',
      location: 'San Fransisco, US',
      description: 'Dropbox is looking for Brand Designer to help the team t...',
      tags: [
        { label: 'Full Time', type: 'fullTime' },
        { label: 'Design', type: 'design' },
        { label: 'Business', type: 'business' }
      ]
    },
    {
      logo: 'R',
      position: 'Email Marketing',
      company: 'Revolut',
      location: 'Madrid, Spain',
      description: 'Revolut is looking for Email Marketing to help team ma...',
      tags: [
        { label: 'Full Time', type: 'fullTime' },
        { label: 'Marketing', type: 'marketing' },
        { label: 'Design', type: 'design' }
      ]
    },
    {
      logo: 'D',
      position: 'Brand Designer',
      company: 'Dropbox',
      location: 'San Fransisco, US',
      description: 'Dropbox is looking for Brand Designer to help the team t...',
      tags: [
        { label: 'Full Time', type: 'fullTime' },
        { label: 'Design', type: 'design' },
        { label: 'Business', type: 'business' }
      ]
    },
    {
      logo: 'R',
      position: 'Email Marketing',
      company: 'Revolut',
      location: 'Madrid, Spain',
      description: 'Revolut is looking for Email Marketing to help team ma...',
      tags: [
        { label: 'Full Time', type: 'fullTime' },
        { label: 'Marketing', type: 'marketing' },
        { label: 'Design', type: 'design' }
      ]
    },
    {
      logo: 'D',
      position: 'Brand Designer',
      company: 'Dropbox',
      location: 'San Fransisco, US',
      description: 'Dropbox is looking for Brand Designer to help the team t...',
      tags: [
        { label: 'Full Time', type: 'fullTime' },
        { label: 'Design', type: 'design' },
        { label: 'Business', type: 'business' }
      ]
    },{
      logo: 'R',
      position: 'Email Marketing',
      company: 'Revolut',
      location: 'Madrid, Spain',
      description: 'Revolut is looking for Email Marketing to help team ma...',
      tags: [
        { label: 'Full Time', type: 'fullTime' },
        { label: 'Marketing', type: 'marketing' },
        { label: 'Design', type: 'design' }
      ]
    },
    {
      logo: 'D',
      position: 'Brand Designer',
      company: 'Dropbox',
      location: 'San Fransisco, US',
      description: 'Dropbox is looking for Brand Designer to help the team t...',
      tags: [
        { label: 'Full Time', type: 'fullTime' },
        { label: 'Design', type: 'design' },
        { label: 'Business', type: 'business' }
      ]
    },
    // Add other jobs here...
  ];
  
  const FeaturedJobs = () => {
    return (
      <Box sx={{ bgcolor: '#202430', py: 8 }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            mb: 4 
          }}>
            <Typography variant="h3" sx={{ 
              color: 'white',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              gap: 1
            }}>
              Featured <span style={{ color: '#60A5FA' }}>jobs</span>
            </Typography>
            
            <Button 
              endIcon={<ArrowForwardIcon />}
              sx={{ 
                color: '#6366F1',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'transparent',
                }
              }}
            >
              Show all jobs
            </Button>
          </Box>
  
          <Grid container spacing={3}>
            {jobs.map((job, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <JobCard>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Avatar 
                      sx={{ 
                        width: 48, 
                        height: 48,
                        backgroundColor: job.logo === 'R' ? '#000' : '#0061FF'
                      }}
                    >
                      {job.logo}
                    </Avatar>
                    <StyledChip 
                      label="Full Time"
                      chiptype="fullTime"
                    />
                  </Box>
  
                  <Box>
                    <Typography variant="h6" sx={{ mb: 1 }}>
                      {job.position}
                    </Typography>
                    <Typography sx={{ color: '#6B7280', fontSize: '0.875rem' }}>
                      {job.company} • {job.location}
                    </Typography>
                  </Box>
  
                  <Typography sx={{ color: '#6B7280', flex: 1 }}>
                    {job.description}
                  </Typography>
  
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    {job.tags.slice(1).map((tag, idx) => (
                      <StyledChip 
                        key={idx}
                        label={tag.label}
                        chiptype={tag.type}
                      />
                    ))}
                  </Box>
                </JobCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    );
  };
  
  export default FeaturedJobs;