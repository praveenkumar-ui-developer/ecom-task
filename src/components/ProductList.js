import React, { useContext } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import ProductCard from "./ProductCard";
import { GlobalContext } from "../context/GlobalContext";

const ProductList = ({ searchTerm, selectedCategory }) => {
  const { products } = useContext(GlobalContext);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });

  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ py: 2, overflowX: "hidden" }}
    >
      {filteredProducts.length > 0 ? (
        <Grid container spacing={6}>
          {filteredProducts.map((product) => (
            <Grid item key={product.id} xs={6} sm={4} md={4} lg={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="body1">No products found.</Typography>
      )}
    </Container>
  );
};

export default ProductList;
