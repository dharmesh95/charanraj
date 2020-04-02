import { Button, Divider, ListItem, Typography } from "@material-ui/core";
import React from "react";
import { checkIfEmpty } from "../../../../helpers/common.helper";
import { addDaysToDate } from "../../../../helpers/date.helper";
import ToolsIcon from "../../../../icons/ToolsIcon";
import { StyledListItemAvatar, StyledListItemText } from "../../../common/common.styles";
import MaterialUIPickers from "../date-picker/MaterialUIPickers";
import { ListBody, ListHeaderTypography } from "./cleaning-list.styles";
import GeneratedList from "./GeneratedList";

let generatedList = [];

const generateList = (list, firstDate, lastDate, profileObj) => {
  generatedList = [];
  if (lastDate >= firstDate) {
    let start = firstDate.getDate();
    let end = lastDate.getDate();
    for (let index = 0; index < end - start + 1; index++) {
      generatedList.push({
        date: addDaysToDate(firstDate, index),
        user1: list[index % list.length].user1,
        user2: list[index % list.length].user2,
        houseId: profileObj.houseId
      });
    }
  }
};

export default function CleaningList(props) {
  const { list, firstDate, lastDate, updateDate, profileObj } = props;
  return (
    !checkIfEmpty(list) && (
      <div>
        <ListHeaderTypography>List</ListHeaderTypography>
        <ListBody dense={true}>
          {list.map((obj, index) => (
            <div key={index}>
              <Divider variant="fullWidth" component="li" />
              <ListItem alignItems="flex-start">
                <StyledListItemAvatar>
                  <span>Day {index + 1}</span>
                </StyledListItemAvatar>
                <StyledListItemText
                  primary={
                    <React.Fragment>
                      <Typography>{obj.user1.name}</Typography>
                      <Typography>{obj.user2.name}</Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </div>
          ))}
        </ListBody>
        <MaterialUIPickers
          updateDate={updateDate}
          label="From Date"
          defaultDate={firstDate}
          type="firstDate"
        />
        <MaterialUIPickers
          type="lastDate"
          label="To Date"
          updateDate={updateDate}
          defaultDate={lastDate}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => generateList(list, firstDate, lastDate, profileObj)}
        >
          Generate
          <ToolsIcon />
        </Button>
        <GeneratedList
          header="Generated List"
          generatedList={generatedList}
          {...props}
        />
      </div>
    )
  );
}
