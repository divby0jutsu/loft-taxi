import React from "react";
import { ProfileForm } from "./ProfileForm";
import { Paper, Box, Grid } from "@material-ui/core";

export const Account = () => {
  return (
    <Box>
      <Grid
        container
        xs={12}
        justify="center"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid container xs={12} sm={9} justify="center" alignItems="center">
          <Paper
            elevation={5}
            style={{ padding: "20px 40px", borderRadius: "10px" }}
          >
            <ProfileForm />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
