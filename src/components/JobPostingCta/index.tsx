import React from 'react';
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  styled,
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Message as MessageIcon,
  Person as PersonIcon,
  Description as DescriptionIcon,
  Settings as SettingsIcon,
  Help as HelpIcon,
} from '@mui/icons-material';

// Styled Components
const GradientBox = styled(Box)(({ theme }) => ({
  background: '#5E5CFF',
  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 85%)',
  padding: theme.spacing(8),
  position: 'relative',
  overflow: 'hidden',
  minHeight: '600px',
  display: 'flex',
}));

const ContentWrapper = styled(Box)({
  maxWidth: 1200,
  margin: '0 auto',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '40px',
});

const DashboardPreview = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: 'white',
  borderRadius: 8,
  width: '500px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
}));

const StatsCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#f8f9fa',
  padding: theme.spacing(2),
  borderRadius: 8,
  marginTop: theme.spacing(2),
}));

const SidebarButton = styled(ListItem)(({ theme }) => ({
  borderRadius: 8,
  marginBottom: theme.spacing(1),
  '&:hover': {
    backgroundColor: '#f5f5f5',
  },
}));

// Chart Component
const VisitorsChart: React.FC = () => {
  return (
    <Box sx={{ height: 100, display: 'flex', alignItems: 'flex-end', gap: 1, my: 2 }}>
      {[20, 35, 25, 15, 30, 45, 25].map((height, index) => (
        <Box
          key={index}
          sx={{
            height: `${height}%`,
            width: '12%',
            backgroundColor: index === 5 ? '#5E5CFF' : '#e0e0e0',
            borderRadius: 1,
          }}
        />
      ))}
    </Box>
  );
};

const JobPostingCTA: React.FC = () => {
  return (
    <GradientBox>
      <ContentWrapper>
        {/* Left side - CTA */}
        <Box sx={{ color: 'white', maxWidth: '400px' }}>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
            Start posting jobs today
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Start posting jobs for only $10.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'white',
              color: '#5E5CFF',
              px: 4,
              py: 1.5,
              '&:hover': {
                backgroundColor: '#f5f5f5',
              },
            }}
          >
            Sign Up For Free
          </Button>
        </Box>

        {/* Right side - Dashboard Preview */}
        <DashboardPreview elevation={6}>
          {/* Header */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
            <Typography variant="h6">JobHuntly</Typography>
            <Button variant="contained" size="small" sx={{ backgroundColor: '#5E5CFF' }}>
              Post a job
            </Button>
          </Box>

          {/* Sidebar and Content Layout */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            {/* Sidebar */}
            <Box sx={{ width: '200px' }}>
              <List>
                {[
                  { icon: <DashboardIcon />, text: 'Dashboard' },
                  { icon: <MessageIcon />, text: 'Messages' },
                  { icon: <PersonIcon />, text: 'Company Profile' },
                  { icon: <DescriptionIcon />, text: 'Job Listing' },
                  { icon: <SettingsIcon />, text: 'Settings' },
                  { icon: <HelpIcon />, text: 'Help' },
                ].map((item, index) => (
                  <SidebarButton key={index} >
                    <ListItemIcon sx={{ minWidth: 40 }}>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </SidebarButton>
                ))}
              </List>
            </Box>

            {/* Main Content */}
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6">Company Visitors</Typography>
              <Typography variant="h4" sx={{ my: 1 }}>21,457</Typography>
              <Typography variant="body2" color="textSecondary">
                Visitors from July 19 - July 25
              </Typography>

              <VisitorsChart />

              <StatsCard>
                <Typography variant="h6">Applicants Statistic</Typography>
                <Typography variant="h3">58</Typography>
                <Typography variant="body2" color="textSecondary">
                  Social Media Specialist
                </Typography>
              </StatsCard>
            </Box>
          </Box>
        </DashboardPreview>
      </ContentWrapper>
    </GradientBox>
  );
};

export default JobPostingCTA;