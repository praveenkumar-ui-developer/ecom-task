import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { IconButton, Typography, Switch, Box, Button, TextField } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
import { loginWithGoogle, logout } from "../services/authService";

const Navbar = () => {
  const { user, setUser, darkMode, setDarkMode, setSearchTerm } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const loggedInUser = await loginWithGoogle();
    setUser(loggedInUser);
  };

  const handleLogout = async () => {
    await logout();
    setUser(null);
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, cursor: "pointer" }} onClick={() => navigate("/")}>
          E-Commerce
        </Typography>
        <Box sx={{ mr: 2 }}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search products..."
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ backgroundColor: "white", borderRadius: 1 }}
          />
        </Box>
        <IconButton color="inherit" onClick={() => navigate("/cart")}>
          <ShoppingCartIcon />
        </IconButton>
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} color="default" />
        {user ? (
          <Button color="inherit" onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button color="inherit" onClick={handleLogin}>
            Login 
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
