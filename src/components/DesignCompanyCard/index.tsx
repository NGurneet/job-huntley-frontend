import { Box, Typography } from "@mui/material";

interface DesignCompanyCardProps {
  logo: string;
  name: string;
  jobs: number;
}

const DesignCompanyCard: React.FC<DesignCompanyCardProps> = ({ logo, name, jobs }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: 200,
        height: 200,
        // backgroundColor: "",
        borderRadius: 2, // Square shape
        boxShadow: 0,
        p: 2,
      }}
    >
      <Box
        component="img"
        src={logo}
        alt={`${name} logo`}
        sx={{ width: 60, height: 60, mb: 1 }}
      />
      <Typography variant="h6" fontWeight="bold">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {jobs} Jobs
      </Typography>
    </Box>
  );
};

export default DesignCompanyCard;
