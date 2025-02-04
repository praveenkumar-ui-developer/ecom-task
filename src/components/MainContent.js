import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useTheme, useMediaQuery } from "@mui/material";
import Sidebar from "./Sidebar";
import ProductList from "./ProductList";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";

const MainContent = ({ searchTerm, selectedCategory }) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  if (isMdUp) {
    // For medium and larger screens, render fixed Sidebar and offset content.
    return (
      <Box
        sx={{
          pt: "64px", // Offset for fixed Navbar
          pl: "250px", // Offset for fixed Sidebar
          pr: 2,
          width: "100%",
          overflowX: "hidden",
        }}
      >
        <Sidebar fixed />
        <ProductList searchTerm={searchTerm} selectedCategory={selectedCategory} />
      </Box>
    );
  } else {
    // For small screens, show a menu button to toggle the Sidebar via a Drawer.
    return (
      <Box
        sx={{
          pt: "64px", // Offset for fixed Navbar
          px: 2,
          width: "100%",
          overflowX: "hidden",
        }}
      >
        <IconButton color="inherit" onClick={toggleDrawer}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={mobileOpen} onClose={toggleDrawer}>
          <Box sx={{ width: 250 }} onClick={toggleDrawer}>
            <Sidebar fixed={false} />
          </Box>
        </Drawer>
        <ProductList searchTerm={searchTerm} selectedCategory={selectedCategory} />
      </Box>
    );
  }
};

export default MainContent;
