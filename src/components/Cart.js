import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

const Cart = () => {
  const { cart, removeFromCart, setCart } = useContext(GlobalContext);

  const handleCheckout = () => {
    alert("Checkout successful!");
    setCart([]);
  };

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>
      {cart.length === 0 ? (
        <Typography>Your cart is empty.</Typography>
      ) : (
        <>
          <List>
            {cart.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem
                  secondaryAction={
                    <Button color="error" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </Button>
                  }
                >
                  <ListItemText primary={item.title} secondary={`$${item.price}`} />
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
          <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleCheckout}>
            Checkout
          </Button>
        </>
      )}
    </Container>
  );
};

export default Cart;
