import React from 'react';
import { Box, Button, MenuItem, InputAdornment, TextField, styled, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Styled components
const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    borderRadius: 0, // Sharp corners
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: 'none', // Remove borders
    },
    '&:hover fieldset': {
      borderColor: 'transparent', // No hover effect for border
    },
  },
}));

const SearchButton = styled(Button)(({ theme }) => ({
  borderRadius: 8,
  backgroundColor: '#4640DE', // Custom background color
  color: 'white',
  '&:hover': {
    backgroundColor: '#3a37c7', // Darker shade on hover
  },
  width: '200px', // Wider search button
}));

const SearchBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'white',
  borderRadius: '8px',
  padding: '6px',
  marginTop: '48px',
});

interface SearchComponentProps {
  onSearch: (keyword: string, location: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const [keyword, setKeyword] = React.useState('');
  const [location, setLocation] = React.useState('Florence, Italy');

  const handleSearch = () => {
    onSearch(keyword, location);
  };

  return (
    <Container maxWidth="lg">
      <SearchBox>
        <StyledTextField
          placeholder="Job title or keyword"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: '#9CA3AF' }} />
              </InputAdornment>
            ),
          }}
          sx={{ width: '400px' }}
        />

        <Box sx={{ width: '1px', height: '24px', bgcolor: '#E5E7EB', mx: 2 }} />

        <StyledTextField
          select
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          sx={{ width: '300px' }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LocationOnIcon sx={{ color: '#9CA3AF' }} />
              </InputAdornment>
            ),
          }}
        >
          <MenuItem value="Florence, Italy">Florence, Italy</MenuItem>
          <MenuItem value="New York, USA">New York, USA</MenuItem>
          <MenuItem value="London, UK">London, UK</MenuItem>
        </StyledTextField>

        <SearchButton variant="contained" onClick={handleSearch}>
          Search my job
        </SearchButton>
      </SearchBox>
    </Container>
  );
};

export default SearchComponent;
