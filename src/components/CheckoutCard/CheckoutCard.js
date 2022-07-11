import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import accounting from "accounting";
import { actionTypes } from "../Reducer/Reducer";
import { IconButton } from "@material-ui/core";
import { useStateValue } from "../StateProvider/StateProvider";

// import fetchProducts from "../fetch/Fetch";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  action: {
    marginTop: "1rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },

  cardActions: {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
  },

  cardRating: {
    display: "flex",
  },
}));

export default function CheckoutCard({
  product: { title, category, description, id, image, price, rating },
}) {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();

  const removeItem = () => {
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id,
    });
  };

  const { rate, count } = rating;

  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <Typography
            className="{classes.action"
            variant="h5"
            color="textSecondary"
          >
            {accounting.formatMoney(price, "$")}
          </Typography>
        }
        title={title}
        subheader=""
      />

      <CardMedia className={classes.media} image={image} title={title} />
      <CardActions disableSpacing className={classes.cardActions}>
        <div className={classes.cardRating}>
          {Array(Math.floor(rate))
            .fill()
            .map((_, i) => (
              <p>&#11088;</p>
            ))}
        </div>
        <IconButton>
          <DeleteIcon fontSize="large" onClick={removeItem} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
