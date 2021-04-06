import React from "react";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

function DatePicker(props) {
  const convertToDefEventPara = (name, value) => {
    return {
      target: {
        name,
        value,
      },
    };
  };
  const { name, label, value, onChange } = props;
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant={"inline"}
        inputVariant={"outlined"}
        label={label}
        format={"MMM/dd/yyyy"}
        name={name}
        value={value}
        onChange={(date) => onChange(convertToDefEventPara(name, date))}
      />
    </MuiPickersUtilsProvider>
  );
}

export default DatePicker;
