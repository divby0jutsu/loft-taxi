import React from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "@material-ui/core";
import { connect } from "react-redux";
import { logout } from "./actions";

const Nav = (props) => {
  return (
    <Tabs>
      <Tab label="Карта" to="/map" component={Link} />
      <Tab label="Профиль" to="/account" component={Link} />
      <Tab onClick={props.logout} label="Выйти" />
    </Tabs>
  );
};

export default connect(null, { logout })(Nav);
