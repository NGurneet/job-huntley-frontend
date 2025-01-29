import React from 'react';
import { Box, Typography, TextField, Button, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import lineBelowHeader from "../../assets/custom-line-below-header.svg"
import SearchComponent from '../SearchComponent';

// Styled components
const SearchButton = styled(Button)({
  backgroundColor: '#5E5CFF',
  color: 'white',
  padding: '12px 24px',
  fontSize: '16px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#4A48CC',
  },
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'white',
    borderRadius: '8px',
    '& fieldset': {
      borderColor: '#E0E0E0',
    },
    '&:hover fieldset': {
      borderColor: '#B8B8B8',
    },
  },
});

const LandingHero: React.FC = () => {
  return (
    <Box sx={{ 
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'start',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      textAlign: 'left',
      paddingLeft: { xs: 3, md: 12 }, 
    //   backgroundColor: '#1a1a1a', // Dark Background
      color: 'white',
    }}>
      {/* Heading Section */}
      <Typography 
        variant="h2" 
        fontWeight="bold" 
        sx={{ fontFamily: 'Anton, sans-serif' }}
      >
        Discover
      </Typography>
      <Typography 
        variant="h2" 
        fontWeight="bold" 
        sx={{ fontFamily: 'Anton, sans-serif' }}
      >
        more than
      </Typography>
      <Typography 
        variant="h2" 
        fontWeight="bold" 
        sx={{ fontFamily: 'Anton, sans-serif', color: '#26A4FF', pb: 1, display: 'inline-block' }}
      >
        5000+ Jobs
      </Typography>
    


      {/* Line below header */}
      <Box>
        <img src={lineBelowHeader} alt="Custom Line Below Header" />
      </Box>

      {/* Subtitle Section */}
      <Typography variant="h6" color="grey.300" sx={{ maxWidth: '450px', mt: 2 }}>
        Great platform for the job seeker that searching for <br />
        new career heights and passionate about startups.
      </Typography>

      {/* Search Bar Section */}
      
        {/* <StyledTextField 
          fullWidth
          placeholder="Job title, keyword, or company"
          InputProps={{
            startAdornment: <SearchIcon sx={{ color: '#666', mr: 1 }} />,
          }}
        />
        <SearchButton variant="contained">
          Search My Job
        </SearchButton> */}
        <SearchComponent onSearch={() => {}} />
      

      {/* Popular Jobs Section
      <Typography variant="body2" sx={{ mt: 2, color: 'rgba(255, 255, 255, 0.6)' }}>
        Popular: UI Designer, UX Researcher, Android, Admin
      </Typography> */}
    </Box>
  );
};

export default LandingHero;
