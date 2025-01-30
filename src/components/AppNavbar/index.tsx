import { AppBar, Box, Button, Divider, Toolbar } from "@mui/material";
import { useState } from "react";

interface AppNavbarProps {
  activeTab?: "Find Jobs" | "Browse Companies";
}

const AppNavbar: React.FC<AppNavbarProps> = ({ activeTab = "Find Jobs" }) => {
  const [selectedTab, setSelectedTab] = useState(activeTab);

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Left Section - Logo & Navigation */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          {/* Logo */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box
              sx={{
                backgroundColor: "#5E5CFF",
                borderRadius: "50%",
                width: "32px",
                height: "32px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontWeight: "bold",
              }}
            >
              J
            </Box>
            <Box sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>JobHuntly</Box>
          </Box>

          {/* Navigation Links */}
          {["Find Jobs", "Browse Companies"].map((tab) => (
            <Button
              key={tab}
              color="inherit"
              onClick={() => setSelectedTab(tab as "Find Jobs" | "Browse Companies")}
              sx={{
                fontSize: "1rem",
                fontWeight: selectedTab === tab ? "bold" : "normal",
                color: "#000",
                position: "relative",
                "&::after": selectedTab === tab
                  ? {
                      content: '""',
                      position: "absolute",
                      bottom: "-4px",
                      left: 0,
                      width: "100%",
                      height: "3px",
                      backgroundColor: "#5E5CFF",
                    }
                  : undefined,
              }}
            >
              {tab}
            </Button>
          ))}
        </Box>

        {/* Right Section - Auth Buttons */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Button sx={{ color: "#5E5CFF", fontWeight: "bold" }}>Login</Button>
          <Divider orientation="vertical" flexItem />
          <Button
            variant="contained"
            sx={{
              bgcolor: "#5E5CFF",
              color: "white",
              "&:hover": { bgcolor: "#4A48CC" },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppNavbar;
