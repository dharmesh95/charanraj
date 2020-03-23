import { Button, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@material-ui/core";
import React from "react";
import { checkIfEmpty } from "../../../../helpers/common.helper";
import { addDaysToDate } from "../../../../helpers/date.helper";
import ToolsIcon from "../../../../icons/ToolsIcon";
import MaterialUIPickers from "../date-picker/MaterialUIPickers";
import "./../../../cleaning/cleaning.css";
import "./../../../common/common.css";
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
        <Typography className="list-header">List</Typography>
        <List dense={true} className="list-body">
          {list.map((obj, index) => (
            <div key={index}>
              <Divider variant="fullWidth" component="li" />
              <ListItem alignItems="flex-start">
                <ListItemAvatar className="list-item-avatar">
                  <span>Day {index + 1}</span>
                </ListItemAvatar>
                <ListItemText
                  className="list-item-text"
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
        </List>
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
          <ToolsIcon className="tools-icon" />
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
