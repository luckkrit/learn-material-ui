import React from "react";
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../Components/PageHeader";
import { PeopleOutlineTwoTone } from "@material-ui/icons";
import { makeStyles, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));
function Employees(props) {
  const classes = useStyles();

  return (
    <>
      <PageHeader
        title={"New Employee"}
        subTitle={"Form design with validation"}
        icon={<PeopleOutlineTwoTone fontSize={"large"} />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </>
  );
}

export default Employees;
