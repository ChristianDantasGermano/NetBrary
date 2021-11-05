import React from "react";

import {
  Grid,
  Card,
  CardContent,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";

import NavBar from "../../Components/Navbar/navbar";

const useStyles = makeStyles({
  root: {
    minWidth: 450,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    textAlign: "center",
  },
  pos: {
    marginBottom: 12,
  },
});

const Profile = () => {
  const classes = useStyles();

  return (
    <div>
      <NavBar />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <Card className={classes.root}>
            <CardContent>
              <Typography className={classes.title} variant="h2">
                Minha Conta
              </Typography>
              <Box mx={4} mt={1}>
                <Box display="block">
                  <Typography display="inline" className={classes.title} variant="h6">
                    Nome: 
                  </Typography>
                  <Typography  display="inline" className={classes.title} variant="body1" gutterBottom>
                    {" "}Mario Adolfo Sisney
                  </Typography>
                </Box>
                <Box display="block">
                  <Typography display="inline" className={classes.title} variant="h6">
                    Email:
                  </Typography>
                  <Typography  display="inline" className={classes.title} variant="body1" gutterBottom>
                    {" "}marioAdolfo@gmail.com
                  </Typography>
                </Box>
                <Box display="block">
                  <Typography display="inline" className={classes.title} variant="h6">
                    Datas de Nascimento:
                  </Typography>
                  <Typography  display="inline" className={classes.title} variant="body1" gutterBottom>
                    {" "}06/04/1996
                  </Typography>
                </Box>
                                <Box display="block">
                  <Typography display="inline" className={classes.title} variant="h6">
                    Status da Conta: 
                  </Typography>
                  <Typography  display="inline" className={classes.title} variant="body1" gutterBottom>
                    {" "}Ativa
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default Profile;
