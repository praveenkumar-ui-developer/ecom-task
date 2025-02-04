import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(GlobalContext);

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p: { xs: 1, sm: 2 },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          height: { xs: 120, sm: 150 },
          objectFit: "contain",
          p: 2,
        }}
        image={product.image}
        alt={product.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h2" noWrap>
          {product.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {product.category}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(`/product/${product.id}`)}>
          View
        </Button>
        <Button size="small" onClick={() => addToCart(product)}>
          To Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
