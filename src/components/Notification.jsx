import React from "react";
import { FormHelperText } from "@material-ui/core";

export const Notification = ({ children, ...props }) => {
  return (
    <FormHelperText
      className="Mui-error"
      style={{ textAlign: "center", color: "green" }}
      {...props}
    >
      {children}
    </FormHelperText>
  );
};
