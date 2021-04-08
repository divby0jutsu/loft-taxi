import React from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab } from "@material-ui/core";
import { connect } from "react-redux";
import { logout } from "../../actions";

const Nav = (props) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab label="Map" to="/map" component={Link} />
      <Tab label="Account" to="/account" component={Link} />
      <Tab onClick={props.logout} label="Log Out" />
    </Tabs>
  );
};

export default connect(null, { logout })(Nav);
