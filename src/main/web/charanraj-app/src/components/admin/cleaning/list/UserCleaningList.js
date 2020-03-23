import { Button, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@material-ui/core";
import React from "react";
import { NEXT_CLASS, OLD_CLASS, UPCOMING_CLASS } from "../../../../constants/styles.constants";
import { checkIfEmpty } from "../../../../helpers/common.helper";
import { compareDates } from "../../../../helpers/date.helper";
import BellIcon from "../../../../icons/BellIcon";
import "./../../../cleaning/cleaning.css";
import "./../../../common/common.css";
import "./list.css";

const LIST_STYLES = {
  0: NEXT_CLASS,
  1: NEXT_CLASS,
  "-1": OLD_CLASS
};

/* accepts date and comapres with current date to return 1, -1 or 0 */
const compareDateWithToday = date => {
  let today = new Date();
  today.setHours(0, 0, 0, 0);
  return compareDates(date, today);
};

/* sets styles of all objects in the list based on date */
const setStyles = list => {
  for (let index = 0; index < list.length; index++) {
    const obj = list[index];
    const val = compareDateWithToday(obj.date);
    obj.className = LIST_STYLES[val];
    if (val !== -1) {
      for (index++; index < list.length; index++) {
        const obj = list[index];
        obj.className = UPCOMING_CLASS;
      }
      return;
    }
  }
};

export default function UserCleaningList(props) {
  const { header, isStyled, sendEventInvites, profileObj } = props;
  let { generatedList } = props;
  if (!checkIfEmpty(generatedList) && isStyled) setStyles(generatedList);
  return (
    !checkIfEmpty(generatedList) && (
      <div>
        {header && <Typography className="header">{header}</Typography>}
        <List dense={true}>
          {generatedList.map((obj, index) => {
            return (
              <div key={index}>
                <Divider variant="fullWidth" component="li" />
                <ListItem className={obj.className} alignItems="flex-start">
                  <ListItemAvatar className="list-item-avatar">
                    <span>{new Date(obj.date).toLocaleDateString()}</span>
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
            );
          })}
        </List>
        <Button
          variant="contained"
          color="primary"
          className="notify-button-padding"
          onClick={() => sendEventInvites(profileObj)}
        >
          <span>
            Notify
            <BellIcon className="bell-icon" />
          </span>
        </Button>
      </div>
    )
  );
}
