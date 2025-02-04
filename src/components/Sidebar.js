import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";

const Sidebar = ({ fixed }) => {
  const { categories, setSelectedCategory } = useContext(GlobalContext);

  // When fixed is true, apply fixed positioning styles
  const fixedStyles = {
    position: "fixed",
    top: "64px", // below the fixed Navbar
    left: 0,
    bottom: 0,
    width: 250,
    overflowY: "auto",
    p: 2,
  };

  const relativeStyles = {
    width: "100%",
    p: 2,
    mb: 2,
  };

  return (
    <Paper sx={fixed ? fixedStyles : relativeStyles}>
      <Typography variant="h6">Categories</Typography>
      <List>
        {categories.map((category, index) => (
          <ListItemButton key={index} onClick={() => setSelectedCategory(category)}>
            <ListItemText primary={category} />
          </ListItemButton>
        ))}
        <ListItemButton onClick={() => setSelectedCategory(null)}>
          <ListItemText primary="All Products" />
        </ListItemButton>
      </List>
    </Paper>
  );
};

export default Sidebar;
