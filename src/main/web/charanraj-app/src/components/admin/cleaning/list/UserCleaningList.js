import { Divider, List, ListItem, Typography } from "@material-ui/core";
import React from "react";
import { UPCOMING_CLASS } from "../../../../constants/styles.constants";
import { checkIfEmpty } from "../../../../helpers/common.helper";
import { compareDates } from "../../../../helpers/date.helper";
import BellIcon from "../../../../icons/BellIcon";
import { StyledListItemAvatar, StyledListItemText } from "../../../common/common.styles";

import { LIST_STYLES } from "./cleaning-list.constants";
import { NotifyButton } from "./cleaning-list.styles";

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
                  <StyledListItemAvatar>
                    <span>{new Date(obj.date).toLocaleDateString()}</span>
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
            );
          })}
        </List>
        <NotifyButton
          variant="contained"
          color="primary"
          onClick={() => sendEventInvites(profileObj)}
        >
          <span>
            Notify
            <BellIcon />
          </span>
        </NotifyButton>
      </div>
    )
  );
}
