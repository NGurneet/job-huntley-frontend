import { Box, Grid, Typography, Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import DesignCompanyCard from "../DesignCompanyCard";
import companies from "./designCompanylistProps"; // Import the companies list

const DesignCompanyList: React.FC = () => {
  return (
    <Box sx={{ width: "100%", textAlign: "center", p: 1 }}> {/* Reduce padding */}
  <Grid container spacing={1} justifyContent="center"> {/* Reduce spacing */}
    {companies.slice(0, 8).map((company, index) => (
      <Grid item xs={12} sm={6} md={3} key={index}>
        <DesignCompanyCard {...company} />
      </Grid>
    ))}
  </Grid>

  {/* View More Button */}
  <Button
    variant="text"
    
    endIcon={<ArrowForward />}
    sx={{ mt: 2, fontSize: "1rem", fontWeight: "bold", color: " #5E5CFF" ,}}
  >
    View More Design Companies
  </Button>
</Box>

  );
};

export default DesignCompanyList;
