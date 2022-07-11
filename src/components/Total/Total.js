import React from "react";
import { accounting } from "accounting";
import { Button } from "@material-ui/core";
import styled from "@emotion/styled";
import { getBasketTotal } from "../Reducer/Reducer";
import { useStateValue } from "../StateProvider/StateProvider";

const useStyles = styled((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "20vh",
  },
  button: {
    marginTop: "20rem",
  },
}));

export const Total = () => {
  const classes = useStyles();
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  return (
    <div className="classes.root">
      <h5>Total items: {basket?.length}</h5>
      <h5>{accounting.formatMoney(getBasketTotal(basket), "$")}</h5>
      <Button className={classes.button} variant="contained" color="secondary">
        Check Out
      </Button>
    </div>
  );
};
