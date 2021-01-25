import React from "react";
import { Grid, AppBar, Toolbar } from "@material-ui/core";
import { ReactComponent as LogoIcon } from "./logoicon.svg";
import { ReactComponent as LogoText } from "./lofttaxi.svg";
import { Nav } from "./Nav";

export const Header = () => {
  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar variant="dense" style={{ justifyContent: "space-between" }}>
        <Grid container item direction="row" alignItems="center" sm={4}>
          <LogoIcon
            style={{ maxHeight: "60px", maxWidth: "60px", marginRight: "16px" }}
          />
          <LogoText />
        </Grid>
        <Nav />
      </Toolbar>
    </AppBar>
  );
};
