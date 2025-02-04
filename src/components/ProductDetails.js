import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { GlobalContext } from "../context/GlobalContext";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(GlobalContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching product details:", error));
  }, [id]);

  if (!product) {
    return <Typography variant="h6" sx={{ p: 2 }}>Loading...</Typography>;
  }

  return (
    <Container sx={{ py: 4 }}>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}>
        <Box
          component="img"
          src={product.image}
          alt={product.title}
          sx={{ width: { xs: "100%", md: "50%" }, objectFit: "contain", p: 2 }}
        />
        <Box sx={{ p: 2 }}>
          <Typography variant="h4">{product.title}</Typography>
          <Typography variant="h6" color="text.secondary">
            ${product.price}
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {product.description}
          </Typography>
          <Typography variant="subtitle1" sx={{ mt: 1, fontStyle: "italic" }}>
            Category: {product.category}
          </Typography>
          <Button variant="contained" sx={{ mt: 2 }} onClick={() => addToCart(product)}>
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetails;
