import React from "react";
import { FormHelperText } from "@material-ui/core";

export const Error = ({ children, ...props }) => {
  return (
    <FormHelperText
      className="Mui-error"
      style={{ textAlign: "center" }}
      {...props}
    >
      {children}
    </FormHelperText>
  );
};
