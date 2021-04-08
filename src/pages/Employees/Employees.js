import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../Components/PageHeader";
import { PeopleOutlineTwoTone, Search } from "@material-ui/icons";
import {
  InputAdornment,
  makeStyles,
  Paper,
  TableBody,
  TableCell,
  TableRow,
  Toolbar,
} from "@material-ui/core";
import useTable from "../../Components/useTable";
import * as employeeService from "../../services/employeeService";
import Controls from "../../Components/controls/Controls";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
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
  const [filterFn, setFilterFn] = useState({ fn: (items) => items });
  // const employee2 = employees[0];
  // employee2.fullName = "Jib";
  // employeeService.insertEmployee(employee2);
  const [records] = useState(employees);
  const {
    TblContainer,
    TblHead,
    TblPagination,
    recordsAfterPagesAndSorting,
  } = useTable(records, headCells, filterFn);
  const handleSearch = (e) => {
    let target = e.target;
    setFilterFn({
      fn: (items) => {
        if (target.value === "") {
          return items;
        } else {
          return items.filter((x) =>
            x.fullName.toLowerCase().includes(e.target.value)
          );
        }
      },
    });
  };
  return (
    <>
      <PageHeader
        title={"New Employee"}
        subTitle={"Form design with validation"}
        icon={<PeopleOutlineTwoTone fontSize={"large"} />}
      />
      <Paper className={classes.pageContent}>
        {/*<EmployeeForm />*/}
        <Toolbar>
          <Controls.Input
            label={"Search Employee"}
            className={classes.searchInput}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
        </Toolbar>
        <TblContainer>
          <TblHead />
          <TableBody>
            {recordsAfterPagesAndSorting().map((item) => (
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
