import React from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import accounting from "accounting";
import { makeStyles } from "@material-ui/core/styles";
import { AddShoppingCart } from "@material-ui/icons";
import { actionTypes } from "../Reducer/Reducer";
import { useStateValue } from "../StateProvider/StateProvider";

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
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function Product({
  product: { id, title, category, description, image, price, rating },
}) {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { rate, count } = rating;

  const addToBasket = () => {
    dispatch({
      type: actionTypes.ADD_TO_BASKET,
      item: {
        id,
        title,
        category,
        description,
        image,
        price,
        rating,
      },
    });
  };

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
        subheader="in stock"
      />

      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
        ></Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to Cart" onClick={addToBasket}>
          <AddShoppingCart fontSize="large" />
        </IconButton>
        {Array(Math.floor(rate))
          .fill()
          .map((_, i) => (
            <p>&#11088;</p>
          ))}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

//Formé parte de un equipo para la construcción de un proyecto para "tal entidad". Yo participé en tal y tal cosa
//Agregar referencias a proyectos que estén publicados en heroku, por ejemplo

//? Con respecto a frontend y cómo dirigirme a eso
//! Hacer una página con un flujo de login, con registro. Que las páginas se muestren o dejen de mostrarse de acuerdo a ciertas condiciones. AOC
