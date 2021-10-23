import "./styles.css";
import { Link } from "react-router-dom";
import {
  Grid,
  Card,
  CardContent,
  Button,
  Typography,
  makeStyles,
  Box,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 500,
  },
  title: {
    textAlign: "center",
  },
});

const Authentication = () => {
  const classes = useStyles();
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
        <Card variant="outlined" className={classes.root}>
          <CardContent>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
              style={{ minHeight: "45vh" }}
            >
              <Typography className={classes.title} variant="h1">
                NetBrary
              </Typography>
              <Box m={2}>
                <Grid item>
                  <Grid
                    container
                    marginTop={2}
                    direction="row"
                    justifyContent="center"
                    spacing={2}
                    alignItems="stretch"
                  >
                    <Grid item>
                      <Button
                        component={Link}
                        to={"/logon"}
                        variant="contained"
                        color="primary"
                        size="large"
                      >
                        Entrar
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        component={Link}
                        to={"/register"}
                        variant="outlined"
                        color="primary"
                        size="large"
                      >
                        Cadastro
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Authentication;
