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
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <LogoTypography sx={{ flexGrow: 1 }}>
            <span style={{ 
              backgroundColor: '#5E5CFF', 
              borderRadius: '50%', 
              width: '32px', 
              height: '32px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white'
            }}>
              J
            </span>
            JobHuntly
          </LogoTypography>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit">Find Jobs</Button>
            <Button color="inherit">Browse Companies</Button>
          </Box>
          
          <Box sx={{ display: 'flex', gap: 2, ml: 2 }}>
            <Button color="inherit">Login</Button>
            <Button
              variant="contained"
              sx={{
                bgcolor: '#5E5CFF',
                '&:hover': { bgcolor: '#4A48CC' },
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 8, textAlign: 'center' }}>
        <Typography variant="h3" component="h1" gutterBottom>
          Find your{' '}
          <Box
            component="span"
            sx={{
              color: '#5E5CFF',
              borderBottom: '3px solid #5E5CFF',
              paddingBottom: '4px',
            }}
          >
            dream companies
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