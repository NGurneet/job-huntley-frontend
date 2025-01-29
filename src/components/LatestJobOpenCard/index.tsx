import React from 'react';
import { Card, Box, Avatar, Typography, Chip, Grid } from '@mui/material';

interface LatestJobOpenCardProps {
  logo: string;
  title: string;
  location: string;
  jobType: string;
  domain1: string;
  domain2: string;
}

const LatestJobOpenCard: React.FC<LatestJobOpenCardProps> = ({ 
  logo, 
  title, 
  location, 
  jobType, 
  domain1, 
  domain2 
}) => {
  return (
    <Card sx={{ 
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      width: 350, 
      height: 150, 
      borderRadius: 3, 
      boxShadow: 2, 
      padding: 2 
    }}>
      {/* Logo section */}
      <Avatar 
        sx={{
          width: 60,
          height: 60,
        }}
        src={logo}
        alt="Logo"
      />
      
      {/* Card Content */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        marginLeft: 2,
        flex: 1 
      }}>
        {/* Title */}
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
          {title}
        </Typography>
        
        {/* Location */}
        <Typography sx={{ color: '#757575', fontSize: '0.9rem' }}>
          {location}
        </Typography>

        {/* Job Type (e.g., Full-Time) */}
        <Typography sx={{ 
          color: '#1976d2', 
          fontSize: '1rem', 
          fontWeight: 'bold', 
          marginTop: 1 
        }}>
          {jobType}
        </Typography>

        {/* Domains */}
        <Box sx={{ display: 'flex', marginTop: 1 }}>
          <Chip 
            label={domain1} 
            sx={{ 
              marginRight: 1, 
              backgroundColor: '#ffcc00', 
              color: '#fff', 
              borderRadius: 15 
            }} 
          />
          <Chip 
            label={domain2} 
            sx={{ 
              backgroundColor: '#1976d2', 
              color: '#fff', 
              borderRadius: 15 
            }} 
          />
        </Box>
      </Box>
    </Card>
  );
};

export default LatestJobOpenCard;
