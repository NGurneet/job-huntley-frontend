import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, styled } from '@mui/material';

// Styled components
const LogoTypography = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: '#5E5CFF',
  fontWeight: 'bold',
  fontSize: '24px',
});

interface NavbarProps {
  onSignUpClick?: () => void;
  onLoginClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onSignUpClick, onLoginClick }) => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        {/* Logo */}
        <LogoTypography sx={{ flexGrow: 1 }}>
          <span
            style={{
              backgroundColor: '#5E5CFF',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
            }}
          >
            J
          </span>
          JobHuntly
        </LogoTypography>

        {/* Navigation */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit">Find Jobs</Button>
          <Button color="inherit">Browse Companies</Button>
        </Box>

        {/* Auth Buttons */}
        <Box sx={{ display: 'flex', gap: 2, ml: 2 }}>
          <Button color="inherit" onClick={onLoginClick}>Login</Button>
          <Button
            variant="contained"
            sx={{
              bgcolor: '#5E5CFF',
              '&:hover': { bgcolor: '#4A48CC' },
            }}
            onClick={onSignUpClick}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
