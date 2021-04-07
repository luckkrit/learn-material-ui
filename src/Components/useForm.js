import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

const useForm = (initialValues, validateOnChange = false, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues((oldValues) => ({
      ...oldValues,
      [name]: value,
    }));
    if (validateOnChange) {
      validate({ [name]: value });
    }
  };
  const resetForm = () => {
    setValues(initialValues);
  };
  return { values, setValues, errors, setErrors, handleInputChange, resetForm };
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
  const { children, ...other } = props;
  return (
    <form className={classes.root} autoComplete={"false"} {...other}>
      {children}
    </form>
  );
};

export { useForm, Form };
