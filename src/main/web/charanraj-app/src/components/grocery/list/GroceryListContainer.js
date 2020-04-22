import { Paper } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { GroceryHeaderTypography } from "../grocery.styles";
import { GroceryList } from "./GroceryList";

export default function GroceryListContainer() {
  const groceryList = useSelector((state) => state.adminReducer.grocery);
  return (
    <Paper>
      <GroceryHeaderTypography paragraph>Grocery List</GroceryHeaderTypography>
      <GroceryList groceryList={groceryList} />
    </Paper>
  );
}
