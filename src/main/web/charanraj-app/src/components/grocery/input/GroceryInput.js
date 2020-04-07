import { Paper, Typography } from "@material-ui/core";
import React from "react";
import { StyledTextFied } from "../../common/common.styles";
import { SendGroceryDiv } from "../grocery.styles";
import GroceryButton from "./GroceryButton";

export default function GroceryInput({ grocery, handleChange, sendGrocery }) {
  return (
    <div>
      <Typography paragraph>Grocery</Typography>
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
            value={grocery}
          />
          <GroceryButton onClick={sendGrocery} />
        </SendGroceryDiv>
      </Paper>
    </div>
  );
}
