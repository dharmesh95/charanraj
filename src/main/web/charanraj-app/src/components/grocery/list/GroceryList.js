import { Divider, List } from "@material-ui/core";
import React from "react";
import { checkIfEmpty } from "../../../helpers/common.helper";
import EmptyGroceryList from "./EmptyGroceryList";
import GroceryListItem from "./list-item/GroceryListItem";

export const GroceryList = React.memo(({ groceryList }) => {
  return (
    <List dense={true}>
      {!checkIfEmpty(groceryList) ? (
        groceryList.map((obj) => (
          <div key={obj.id}>
            <Divider variant="fullWidth" component="li" />
            <GroceryListItem obj={obj} />
          </div>
        ))
      ) : (
        <EmptyGroceryList />
      )}
    </List>
  );
});
