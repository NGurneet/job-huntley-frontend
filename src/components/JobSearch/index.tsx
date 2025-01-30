import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  TextField,
  Container,
  Box,
  Autocomplete,
  styled,
  Divider
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useState } from "react";
import AppNavbar from '../AppNavbar';
import dreamcompanieframe from "../../assets/dreamcompainesframe.svg"
import findyourframe from "../../assets/find-your-frame.svg"


// Custom styled components
const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'white',
    '& fieldset': {
      borderColor: '#E0E0E0',
    },
    '&:hover fieldset': {
      borderColor: '#B8B8B8',
    },
  },
});

const SearchButton = styled(Button)({
  backgroundColor: '#5E5CFF',
  padding: '14px 32px',
  '&:hover': {
    backgroundColor: '#4A48CC',
  },
});

const LogoTypography = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: '#5E5CFF',
  fontWeight: 'bold',
  fontSize: '24px',
});

interface JobSearchProps {
  popularCompanies?: string[];

}

const JobSearch: React.FC<JobSearchProps> = ({
  popularCompanies = ['Twitter', 'Microsoft', 'Apple', 'Facebook'],
  
  
}) => {
  return (
    <Box sx={{ bgcolor: '#FFFFFF', minHeight: '100vh' }}>
      <AppNavbar activeTab="Find Jobs" />

      <Container maxWidth="lg" sx={{ mt: 8, textAlign: 'center' }}>
      <Typography variant="h3" component="h1" gutterBottom>
  <img src={findyourframe} alt="find your frame" />
  {' '}
  <Box
    component="span"
    sx={{
      color: '#5E5CFF',
      paddingBottom: '4px', // You can remove this too if not needed
    }}
  >
    <img src={dreamcompanieframe} alt="dream company frame" />
  </Box>
</Typography>

<Typography variant="h6" color="text.secondary" gutterBottom>
  Find the dream companies you dream work for
</Typography>


        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mt: 4,
            mb: 3,
            justifyContent: 'center',
          }}
        >
          <StyledTextField
            placeholder="Company name or keyword"
            InputProps={{
              startAdornment: <SearchIcon sx={{ mr: 1, color: '#666' }} />,
            }}
            sx={{ width: '400px' }}
          />
          
          <StyledTextField
            placeholder="Florence, Italy"
            InputProps={{
              startAdornment: <LocationOnIcon sx={{ mr: 1, color: '#666' }} />,
            }}
            sx={{ width: '300px' }}
          />
          
          <SearchButton variant="contained">
            Search
          </SearchButton>
        </Box>

        <Box sx={{ mt: 2 }}>
          <Typography component="span" color="text.secondary">
            Popular :{' '}
          </Typography>
          {popularCompanies.map((company, index) => (
            <Button
              key={company}
              color="inherit"
              sx={{ 
                textTransform: 'none',
                color: 'text.secondary',
              }}
            >
              {company}
              {index < popularCompanies.length - 1 && ', '}
            </Button>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default JobSearch;