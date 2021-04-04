import React from "react";
import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  Toolbar,
} from "@material-ui/core";
import {
  ChatBubbleOutline,
  NotificationsNone,
  PowerSettingsNew,
} from "@material-ui/icons";

function Header(props) {
  return (
    <AppBar position={"static"}>
      <Toolbar>
        <Grid container>
          <Grid item>
            <InputBase />
          </Grid>
          <Grid item sm></Grid>
          <Grid item>
            <IconButton>
              <Badge badgeContent={4} color={"secondary"}>
                <NotificationsNone />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={3} color={"secondary"}>
                <ChatBubbleOutline />
              </Badge>
            </IconButton>
            <IconButton>
              <PowerSettingsNew />
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
