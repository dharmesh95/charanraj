import DateFnsUtils from "@date-io/date-fns";
import Grid from "@material-ui/core/Grid";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import "date-fns";
import React from "react";

export default function MaterialUIPickers(props) {
  const { defaultDate, label, updateDate, type } = props;
  // The first commit of Material-UI
  const [selectedDate, setSelectedDate] = React.useState(
    defaultDate || new Date()
  );

  function handleDateChange(date) {
    setSelectedDate(date);
    updateDate(type, date);
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        <KeyboardDatePicker
          style={{ width: "100%", marginTop: "0px" }}
          margin="normal"
          id="date-picker-dialog"
          label={label}
          format="MM/dd/yyyy"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date"
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
