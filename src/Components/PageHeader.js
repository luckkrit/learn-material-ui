import React from "react";
import { Card, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fdfdff",
  },
  pageHeader: {
    padding: theme.spacing(4),
    display: "flex",
    marginBottom: theme.spacing(3),
  },
  pageIcon: {
    display: "inline-block",
    padding: theme.spacing(2),
    color: "#3c44b1",
  },
  pageTitle: {
    paddingLeft: theme.spacing(4),
    "& .MuiTypography-subtitle2": { opacity: "0.6" },
  },
}));

const PageHeader = (props) => {
  const { title, subTitle, icon } = props;
  const classes = useStyles();
  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>
        <div className={classes.pageTitle}>
          <Typography variant={"h6"} component={"div"} children={title} />
          <Typography
            variant={"subtitle2"}
            component={"div"}
            children={subTitle}
          />
        </div>
      </div>
    </Paper>
  );
};

export default PageHeader;
