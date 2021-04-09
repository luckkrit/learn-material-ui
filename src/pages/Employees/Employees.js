import React, { useState } from "react";
import EmployeeForm from "./EmployeeForm";
import PageHeader from "../../Components/PageHeader";
import {
  Add,
  Close,
  EditOutlined,
  PeopleOutlineTwoTone,
  Search,
} from "@material-ui/icons";
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
import Popup from "../../Components/Popup";
import Notification from "../../Components/Notification";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
  searchInput: {
    width: "75%",
  },
  newButton: {
    position: "absolute",
    right: "10px",
  },
}));

const headCells = [
  { id: "fullName", label: "Employee Name" },
  { id: "email", label: "Email" },
  { id: "mobile", label: "Mobile" },
  { id: "department", label: "Department" },
  { id: "actions'", label: "Actions", disableSorting: true },
];
function Employees(props) {
  const classes = useStyles();
  const [recordForEdit, setRecordForEdit] = useState(null);
  const employees = employeeService.getAllEmployees();
  const [filterFn, setFilterFn] = useState({ fn: (items) => items });
  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  // const employee2 = employees[0];
  // employee2.fullName = "Jib";
  // employeeService.insertEmployee(employee2);
  const [records, setRecords] = useState(employees);
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
  const addOrEdit = (employee, resetForm) => {
    if (employee.id === 0) {
      employeeService.insertEmployee(employee);
    } else {
      employeeService.updateEmployee(employee);
    }
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setRecords(employeeService.getAllEmployees());
    setNotify({
      isOpen: true,
      message: "Submitted successfully",
      type: "success",
    });
  };
  const openInPopup = (item) => {
    setRecordForEdit(item);
    setOpenPopup(true);
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
          <Controls.Button
            className={classes.newButton}
            text={"Add New"}
            variant={"outlined"}
            startIcon={<Add />}
            onClick={() => {
              setOpenPopup(true);
              setRecordForEdit(null);
            }}
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
                <TableCell>
                  <Controls.ActionButton
                    color={"primary"}
                    onClick={() => {
                      openInPopup(item);
                    }}
                  >
                    <EditOutlined fontSize={"small"} />
                  </Controls.ActionButton>
                  <Controls.ActionButton color={"secondary"}>
                    <Close fontSize={"small"} />
                  </Controls.ActionButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TblContainer>
        <TblPagination />
      </Paper>
      <Popup
        title={"Employee Form"}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <EmployeeForm addOrEdit={addOrEdit} recordForEdit={recordForEdit} />
      </Popup>
      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
}

export default Employees;
