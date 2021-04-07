import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../Components/PageHeader";
import { PeopleOutlineTwoTone } from "@material-ui/icons";
import {
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableRow,
} from "@material-ui/core";
import useTable from "../../Components/useTable";
import * as employeeService from "../../services/employeeService";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

const headCells = [
  { id: "fullName", label: "Employee Name" },
  { id: "email", label: "Email" },
  { id: "mobile", label: "Mobile" },
  { id: "department", label: "Department", disableSorting: true },
];
function Employees(props) {
  const classes = useStyles();
  const employees = employeeService.getAllEmployees();
  // const employee2 = employees[0];
  // employee2.fullName = "Jib";
  // employeeService.insertEmployee(employee2);
  const [records] = useState(employees);
  const { TblContainer, TblHead, TblPagination, recordsAfterPages } = useTable(
    records,
    headCells
  );
  return (
    <>
      <PageHeader
        title={"New Employee"}
        subTitle={"Form design with validation"}
        icon={<PeopleOutlineTwoTone fontSize={"large"} />}
      />
      <Paper className={classes.pageContent}>
        {/*<EmployeeForm />*/}
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPages().map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.fullName}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.mobile}</TableCell>
                <TableCell>{item.department}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
    </>
  );
}

export default Employees;
