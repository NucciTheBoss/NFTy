import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import styles from "./NFT.module.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const NFT = ({ name, price, description, imgUrl }) => {
  return (
    <Card sx={{ maxWidth: 345 }} className={styles.cardContainer}>
      <CardMedia component="img" width="140" image={imgUrl} alt="NFT image" />
      <CardContent className={styles.cardContent}>
        <div className={styles.nameContainer}>
          <h4>{name}</h4>
        </div>
        <div className={styles.priceContainer}>
          <h5>List Price</h5>
          <h5>${price}</h5>
        </div>
      </CardContent>
      <CardActions className={styles.cardActions}>
        <Button variant="contained" size="small">
          Bid
        </Button>
        <FavoriteBorderIcon />
      </CardActions>
    </Card>
  );
};

export default NFT;