import { Grid, ListItem } from "@mui/material";
import React from "react";

function Register() {
  return (
    <div>
      <h2>Register</h2>
      <div>
        <Grid container spacing={2} columns={16}>
          <Grid item xs={8}>
            <ListItem>Doctor Register</ListItem>
          </Grid>
          <Grid item xs={8}>
            <ListItem>Patient Register</ListItem>
          </Grid>
        </Grid>
      </div>
      <div></div>
    </div>

    // <div> </div>
  );
}

export default Register;
