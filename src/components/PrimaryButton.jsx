import React from "react";
import { Button } from "@material-ui/core";

export const PrimaryButton = ({ children, ...props }) => {
  return (
    <Button variant="contained" color="primary" type="submit" {...props}>
      {children}
    </Button>
  );
};
