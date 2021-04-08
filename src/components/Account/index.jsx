import React from "react";
import ProfileForm from "../ProfileForm";
import { Paper, Box, Grid } from "@material-ui/core";

export const Account = () => {
  return (
    <Box style={{ display: "flex", flexGrow: "1" }}>
      <Grid container item xs={12} justify="center" alignItems="center">
        <Grid
          container
          item
          xs={12}
          sm={9}
          justify="center"
          alignItems="center"
        >
          <Paper
            elevation={5}
            style={{
              flexGrow: "1",
              padding: "20px 40px",
              zIndex: "1200",
              borderRadius: "10px",
            }}
          >
            <ProfileForm />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};
