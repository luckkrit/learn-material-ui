import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Form, useForm } from "../../Components/useForm";
import Controls from "../../Components/controls/Controls";
import * as employeeService from "../../services/employeeService";

const genderItems = [
  { id: "male", title: "Male" },
  { id: "female", title: "Female" },
  { id: "other", title: "Other" },
];
const initialFieldValues = {
  id: 0,
  fullName: "",
  email: "",
  mobile: "",
  city: "",
  gender: "male",
  departmentId: "",
  hireDate: new Date(),
  isPermanent: false,
};

function EmployeeForm(props) {
  const { addOrEdit, recordForEdit } = props;

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("fullName" in fieldValues) {
      temp.fullName = fieldValues.fullName ? "" : "This field is required";
    }
    if ("email" in fieldValues) {
      temp.email = /^[a-zA-Z0-9.!#$%&?*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        fieldValues.email
      )
        ? ""
        : "Email is not valid";
    }
    if ("mobile" in fieldValues) {
      temp.mobile =
        fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required";
    }
    if ("departmentId" in fieldValues) {
      temp.departmentId =
        fieldValues.departmentId.length > 0 ? "" : "This field is required";
    }
    setErrors({ ...temp });
    if (fieldValues === values) {
      return Object.values(temp).every((x) => x === "");
    }
    return false;
  };
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFieldValues, true, validate);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addOrEdit(values, resetForm);
    }
  };
  useEffect(() => {
    if (recordForEdit !== null) {
      setValues({
        ...recordForEdit,
      });
    }
  }, [recordForEdit]);
  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name={"fullName"}
            value={values.fullName}
            label={"Full Name"}
            onChange={handleInputChange}
            error={errors.fullName}
          />
          <Controls.Input
            name={"email"}
            value={values.email}
            label={"Email"}
            onChange={handleInputChange}
            error={errors.email}
          />
          <Controls.Input
            name={"mobile"}
            value={values.mobile}
            label={"Mobile"}
            onChange={handleInputChange}
            error={errors.mobile}
          />
          <Controls.Input
            name={"city"}
            value={values.city}
            label={"City"}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={6}>
          <Controls.RadioGroup
            name={"gender"}
            label={"Gender"}
            items={genderItems}
            value={values.gender}
            onChange={handleInputChange}
          />
          <Controls.Select
            name={"departmentId"}
            label={"Department"}
            value={values.departmentId}
            onChange={handleInputChange}
            options={employeeService.getDepartmentCollection()}
            error={errors.departmentId}
          />
          <Controls.DatePicker
            name={"hireDate"}
            label={"Hire Date"}
            value={values.hireDate}
            onChange={handleInputChange}
          />
          <Controls.CheckBox
            name={"isPermanent"}
            label={"Permanent Employee"}
            value={values.isPermanent}
            onChange={handleInputChange}
          />
          <div>
            <Controls.Button type={"submit"} text={"Submit"} />
            <Controls.Button
              color={"default"}
              text={"Reset"}
              onClick={resetForm}
            />
          </div>
        </Grid>
      </Grid>
    </Form>
  );
}

export default EmployeeForm;
