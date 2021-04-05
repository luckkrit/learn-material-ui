import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((oldValues) => ({
      ...oldValues,
      [name]: value,
    }));
  };
  return [values, setValues, handleInputChange];
};

const useStyle = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));
const Form = (props) => {
  const classes = useStyle();
  return (
    <form className={classes.root} autoComplete={false}>
      {props.children}
    </form>
  );
};

export { useForm, Form };
