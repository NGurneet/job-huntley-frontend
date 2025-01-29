import React from 'react';
import { Box, Button, Typography, Avatar, Grid } from '@mui/material';

interface FeaturedJobCardProps {
  logo: string;
  title: string;
  place: string;
  description: string;
  domain1: string;
  domain2: string;
}

const FeaturedJobCard: React.FC<FeaturedJobCardProps> = ({ 
  logo, 
  title, 
  place, 
  description, 
  domain1, 
  domain2 
}) => {
  return (
    <Box
      sx={{
        width: '240px',  // Reduced width for smaller card
        height: '320px', // Reduced height for smaller card
        backgroundColor: 'white', 
        borderRadius: '12px', 
        boxShadow: 2, 
        position: 'relative',
        padding: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* Logo at top left corner */}
      <Avatar
        sx={{
          width: 30,  // Smaller logo size
          height: 30, // Smaller logo size
          position: 'absolute',
          top: 12,  // Adjusted top margin for the smaller card
          left: 12, // Adjusted left margin for the smaller card
        }}
        src={logo}
        alt="logo"
      />
      
      {/* Button at top right corner */}
      <Button 
        sx={{
          position: 'absolute', 
          top: 12,  // Adjusted top margin for the smaller card
          right: 12,  // Adjusted right margin for the smaller card
          fontWeight: 'bold', 
          padding: '4px 8px',  // Reduced padding for smaller button
          backgroundColor: '#1976d2', 
          color: 'white',
          fontSize: '0.8rem' // Adjusted font size for smaller button text
        }}
        variant="contained"
      >
        Apply Now
      </Button>

      {/* Title */}
      <Typography variant="h6" sx={{ fontWeight: 'bold', mt: 3, fontSize: '1rem' }}>
        {title}
      </Typography>

      {/* Place */}
      <Typography sx={{ fontSize: '0.8rem', color: '#757575' }}>
        {place}
      </Typography>

      {/* Description */}
      <Typography sx={{ fontSize: '0.8rem', color: '#757575', mt: 1.5 }}>
        {description.length > 90 ? description.substring(0, 90) + '...' : description}
      </Typography>

      {/* Domain Texts at bottom corners */}
      <Grid container spacing={1} sx={{ mt: 2 }}>
        <Grid item xs={6}>
          <Typography sx={{ fontWeight: 'bold', color: '#ffcc00', fontSize: '0.9rem' }}>
            {domain1}
          </Typography>
        </Grid>
        <Grid item xs={6} sx={{ textAlign: 'right' }}>
          <Typography sx={{ fontWeight: 'bold', color: '#ffcc00', fontSize: '0.9rem' }}>
            {domain2}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FeaturedJobCard;
