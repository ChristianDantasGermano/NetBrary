import React, { useState } from "react";
import "./styles.css";

import {
  Grid,
  Box,
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  TextField,
} from "@material-ui/core";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Logon = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Card sx={{ minWidth: 500 }}>
          <CardContent>
            <Typography sx={{ textAlign: "center" }} variant="h2">
              NetBrary
            </Typography>
            <Grid
              container
              direction="column"
              justifyContent="center"
              spacing="center"
              alignItems="stretch"
            >
              <Grid item>
                <TextField
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  id="standard-basic"
                  label="Standard"
                  variant="standard"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Typography variant="h5" component="div">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Cadastra-se</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Logon;
