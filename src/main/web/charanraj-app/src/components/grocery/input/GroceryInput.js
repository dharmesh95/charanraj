import { Paper } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postGroceryData } from "../../../actions/grocery.action";
import { createUrl, GROCERY_URL } from "../../../constants/url.constants";
import { getHeaders } from "../../../constants/user.constants";
import GroceryItem from "../../../models/GroceryItem";
import { StyledTextFied } from "../../common/common.styles";
import { SendGroceryDiv } from "../grocery.styles";
import { GroceryButton } from "./GroceryButton";

export const GroceryInput = ({ fetchGroceryData }) => {
  const profileObj = useSelector((state) => state.userReducer.profileObj);
  const [groceryItemName, setGroceryItemName] = useState("");
  const dispatch = useDispatch();

  const handleChange = ($event) => {
    setGroceryItemName($event.target.value);
  };

  const sendGrocery = () => {
    if (groceryItemName && groceryItemName.length > 2) {
      const groceryItem = new GroceryItem(
        profileObj,
        groceryItemName,
        new Date()
      );
      dispatch(
        postGroceryData(
          createUrl(GROCERY_URL),
          groceryItem,
          getHeaders(profileObj),
          fetchGroceryData
        )
      );
      setGroceryItemName("");
    }
  };

  return (
    <div>
      <Paper>
        <SendGroceryDiv>
          <StyledTextFied
            id="standard-multiline-static"
            label="Item Name"
            multiline
            rows="6"
            placeholder="Add something to the Grocery List"
            margin="normal"
            onChange={handleChange}
            value={groceryItemName}
          />
          <GroceryButton onClick={sendGrocery} />
        </SendGroceryDiv>
      </Paper>
    </div>
  );
};
