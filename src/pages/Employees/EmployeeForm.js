import React from "react";
import { Grid } from "@material-ui/core";
import { Form, useForm } from "../../Components/useForm";
import Controls from "../../Components/controls/Controls";

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
  const [values, , handleInputChange] = useForm(initialFieldValues);
  console.log(values);
  return (
    <Form>
      <Grid container>
        <Grid item xs={6}>
          <Controls.Input
            name={"fullName"}
            value={values.fullName}
            label={"Full Name"}
            onChange={handleInputChange}
          />
          <Controls.Input
            name={"email"}
            value={values.email}
            label={"Email"}
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
          />
        </Grid>
      </Grid>
    </Form>
  );
}

export default EmployeeForm;
