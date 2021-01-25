import React from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab} from "@material-ui/core";
import { useContext } from "react";
import { AuthContext } from "./Authentication"

export const Nav = () => {
  const {logout} = useContext(AuthContext);
  return (
    <Tabs>
      <Tab label="Карта" to="/map" component={Link}/>
      <Tab label="Профиль" to="/account" component={Link}/>
      <Tab onClick={logout} label="Выйти"/>
    </Tabs>
  );
};
